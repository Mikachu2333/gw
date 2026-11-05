@echo off
setlocal EnableExtensions DisableDelayedExpansion
chcp 65001 >nul

rem =====================================================================
rem 小恐龙公文排版助手 —— 构建 + 全自动安装包脚本
rem
rem   用法：仓库根目录执行  make.bat
rem   产物：dist\小恐龙公文排版助手-Setup-<版本>.exe
rem
rem   按顺序做七件事：
rem     1  定位 MSBuild（VSTO 工程不支持 dotnet build，必须用 VS 的 MSBuild）
rem     2  确认清单签名证书可用，缺失时自动调用 tools\make-dev-cert.ps1
rem     3  Release 构建
rem     4  把 bin\Release 镜像成安装包载荷 dist\payload
rem     5  定位 Inno Setup 编译器 ISCC.exe
rem     6  从构建出的 dll 读版本、从 .cer 读指纹（两者不一致时拒绝打包）
rem     7  编译 Installer\installer.iss
rem
rem   证书说明：pfx / cer / snk / csproj.user 都不入库，每台打包机用的是自己的自签名
rem   证书。安装包会把打包时的 .cer 一起带走并在安装时导入本机受信任根 + 受信任发布者，
rem   所以"换机器重新打包"不需要用户再做任何手工信任操作 —— 重装一次安装包即可。
rem =====================================================================

set "ROOT=%~dp0"
set "PROJ=%ROOT%src\公文排版.csproj"
set "USERPROJ=%ROOT%src\公文排版.csproj.user"
set "CERTPS1=%ROOT%tools\make-dev-cert.ps1"
set "CER=%ROOT%src\Resources\gw-codecert.cer"
set "BIN=%ROOT%src\bin\Release"
set "DIST=%ROOT%dist"
set "PAYLOAD=%DIST%\payload"
set "ISS=%ROOT%Installer\installer.iss"
set "VSTO_REDIST=%ROOT%Installer\redist\vstor_redist.exe"
set "VSOUT=%TEMP%\gw_make_vswhere.txt"

echo ==========================================
echo 小恐龙公文排版助手 make
echo ==========================================

:: ---------- 1. MSBuild ----------
echo.
echo [1/7] 定位 MSBuild...
set "MSBUILD="
set "VSWHERE=%ProgramFiles(x86)%\Microsoft Visual Studio\Installer\vswhere.exe"

if exist "%VSWHERE%" (
    rem 不能写成 for /f ... in (`"%VSWHERE%" ...`)：cmd 对"以引号开头的命令串"会剥掉首尾引号，
    rem 于是 C:\Program Files\... 被从空格处劈开，报 "'C:\Program' 不是内部或外部命令"。
    rem 改成先落到临时文件再读，顺带也避开了嵌套引号。
    rem 临时文件名在块外定义：if 块里的 %VAR% 是整块解析时就展开的，块内 set 再引用会拿到空值。
    "%VSWHERE%" -latest -products * -requires Microsoft.Component.MSBuild -find "MSBuild\**\Bin\MSBuild.exe" > "%VSOUT%" 2>nul
    for /f "usebackq delims=" %%m in ("%VSOUT%") do (
        if not defined MSBUILD set "MSBUILD=%%m"
    )
    del /q "%VSOUT%" >nul 2>&1
)

if not defined MSBUILD (
    where msbuild >nul 2>&1
    if not errorlevel 1 set "MSBUILD=msbuild"
)

if not defined MSBUILD (
    echo [错误] 没有找到 MSBuild。
    echo         请安装 Visual Studio 的 "Office/SharePoint 开发" 工作负载，
    echo         或在 Developer Command Prompt 里运行本脚本。
    exit /b 1
)
echo        MSBuild: %MSBUILD%

:: ---------- 2. 签名证书 ----------
rem 清单签名只能按证书存储里的指纹进行（VSTO 的 SignFile 不接受 pfx 路径），所以这里先保证
rem "指纹属性存在 + 指纹对应的证书确实在当前用户存储里"，两者任一缺失就自动跑一次 make-dev-cert.ps1。
rem 该脚本幂等：同主题证书已存在则复用，不会每次构建都往存储里堆证书。
echo.
echo [2/7] 检查清单签名证书...
call :read_thumbprint
if not defined THUMB (
    echo        未找到 ManifestCertificateThumbprint，需要生成/复用本机开发证书。
    call :gen_cert
) else (
    powershell -NoProfile -Command "if (-not (Test-Path 'Cert:\CurrentUser\My\%THUMB%')) { exit 1 }"
    if errorlevel 1 (
        echo        指纹 %THUMB% 在当前用户证书存储里找不到，重新生成证书。
        call :gen_cert
    )
)

call :read_thumbprint || (
    echo [错误] 运行 tools\make-dev-cert.ps1 之后仍然读不到 ManifestCertificateThumbprint。
    echo         请检查 src\公文排版.csproj.user 是否可写。
    exit /b 1
)
if not exist "%CER%" (
    echo [错误] 缺少证书公钥文件 %CER%，安装包无法导入信任链。
    echo         请执行： powershell -ExecutionPolicy Bypass -File tools\make-dev-cert.ps1
    exit /b 1
)
echo        清单指纹: %THUMB%

:: ---------- 3. 构建 ----------
echo.
echo [3/7] MSBuild Release 构建...
"%MSBUILD%" "%PROJ%" /t:Rebuild /p:Configuration=Release /p:Platform=AnyCPU /v:m /nologo
if errorlevel 1 (
    echo [错误] Release 构建失败，见上面的 MSBuild 输出。
    exit /b 1
)
if not exist "%BIN%\公文排版.vsto" (
    echo [错误] 构建成功但 %BIN%\公文排版.vsto 不存在，载荷无法组装。
    exit /b 1
)

:: ---------- 4. 载荷 ----------
rem 载荷必须是 bin\Release 的完整镜像（去掉 pdb）：.dll.manifest 里 <file> 逐项记着 42 个 .vba
rem 和 dll.config 的哈希，缺任何一个 VSTO 都会拒绝加载；反过来多带的文件不影响加载。
rem 证书 .cer 不放进载荷 —— 它由 installer.iss 直接从 src\Resources 取用，只进 {tmp} 不进 {app}。
echo.
echo [4/7] 组装安装包载荷 dist\payload...
if exist "%DIST%" (
    rmdir /s /q "%DIST%" >nul 2>&1
    if exist "%DIST%" (
        timeout /t 1 >nul
        rmdir /s /q "%DIST%" >nul 2>&1
    )
)
mkdir "%PAYLOAD%" >nul 2>&1

robocopy "%BIN%" "%PAYLOAD%" /MIR /NFL /NDL /NJH /NJS >nul
set "ROBO=%errorlevel%"
if %ROBO% GEQ 8 (
    echo [错误] robocopy 复制载荷失败（退出码 %ROBO%）。
    exit /b 1
)
del /q "%PAYLOAD%\*.pdb" >nul 2>&1
del /q "%PAYLOAD%\Resources\gw-codecert.cer" >nul 2>&1

:: ---------- 5. Inno Setup ----------
echo.
echo [5/7] 定位 Inno Setup 编译器...
set "ISCC="

if exist "%ProgramFiles%\Inno Setup 7\ISCC.exe" (
    set "ISCC=%ProgramFiles%\Inno Setup 7\ISCC.exe"
    goto :iscc_found
)
if exist "%LOCALAPPDATA%\Programs\Inno Setup 7\ISCC.exe" (
    set "ISCC=%LOCALAPPDATA%\Programs\Inno Setup 7\ISCC.exe"
    goto :iscc_found
)
if exist "%ProgramFiles(x86)%\Inno Setup 6\ISCC.exe" (
    set "ISCC=%ProgramFiles(x86)%\Inno Setup 6\ISCC.exe"
    goto :iscc_found
)
if exist "%ProgramFiles%\Inno Setup 6\ISCC.exe" (
    set "ISCC=%ProgramFiles%\Inno Setup 6\ISCC.exe"
    goto :iscc_found
)
if exist "%LOCALAPPDATA%\Programs\Inno Setup 6\ISCC.exe" (
    set "ISCC=%LOCALAPPDATA%\Programs\Inno Setup 6\ISCC.exe"
    goto :iscc_found
)
where iscc >nul 2>&1
if not errorlevel 1 (
    for /f "usebackq delims=" %%i in (`where iscc`) do (
        if not defined ISCC set "ISCC=%%i"
    )
    if defined ISCC goto :iscc_found
)
rem 常见目录都没命中时，问一次卸载注册表（Inno 以 is1 方式安装，App Path 就是安装目录）。
for /f "usebackq delims=" %%i in (`powershell -NoProfile -Command "$h=@('HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall','HKLM:\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall','HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall'); foreach($b in $h){ Get-ChildItem $b -ErrorAction SilentlyContinue | Where-Object { $_.PSChildName -like 'Inno Setup *_is1' } | ForEach-Object { $a=(Get-ItemProperty $_.PSPath).'Inno Setup: App Path'; if($a -and (Test-Path ($a+'\ISCC.exe'))){ $a+'\ISCC.exe'; exit } } }"`) do set "ISCC=%%i"
if defined ISCC goto :iscc_found

echo [错误] 没有找到 Inno Setup 编译器 ISCC.exe。已检查：
echo   1. %ProgramFiles%\Inno Setup 7\ISCC.exe
echo   2. %LOCALAPPDATA%\Programs\Inno Setup 7\ISCC.exe
echo   3. %ProgramFiles(x86)%\Inno Setup 6\ISCC.exe
echo   4. %ProgramFiles%\Inno Setup 6\ISCC.exe
echo   5. %LOCALAPPDATA%\Programs\Inno Setup 6\ISCC.exe
echo   6. PATH 上的 iscc
echo   7. 卸载注册表里的 "Inno Setup: App Path"
echo 请安装 Inno Setup 6.3 或 7（脚本需要 x64compatible 等新常量）。
exit /b 1

:iscc_found
"%ISCC%" /? 2>&1 | findstr /r /c:"Inno Setup [67]" >nul
if errorlevel 1 (
    echo [错误] %ISCC% 不是 Inno Setup 6/7 编译器，无法编译本脚本。
    exit /b 1
)
echo        ISCC: %ISCC%

:: ---------- 6. 版本与指纹 ----------
rem 版本从构建出的 dll 读，而不是从 AssemblyInfo.cs 读：程序集版本号会被 VS 的自动递增插件改写，
rem 只有产物里的版本才是这台机器刚刚真正编译出来的那个。
echo.
echo [6/7] 读取版本与证书指纹...
for /f "usebackq delims=" %%v in (`powershell -NoProfile -Command "[Reflection.AssemblyName]::GetAssemblyName('%BIN%\公文排版.dll').Version.ToString()"`) do set "VER4=%%v"
if not defined VER4 (
    echo [错误] 读取程序集版本失败。
    exit /b 1
)
rem 修订号为 0 时只显示三段，避免安装包名叫 "...-Setup-3.8.0.0.exe"。
for /f "usebackq delims=" %%v in (`powershell -NoProfile -Command "$v=[Version]::Parse('%VER4%'); if ($v.Revision -gt 0) { $v.ToString() } else { ('{0}.{1}.{2}' -f $v.Major,$v.Minor,$v.Build) }"`) do set "VER=%%v"

rem 指纹以安装包真正携带的 .cer 为准；和 csproj.user 里的签名指纹不一致就说明清单是别的证书签的，
rem 那样装出来的包会把用户机器上的信任链指错，必须在这里拦下来。
rem 用 X509Certificate2 而不是 Get-PfxCertificate：后者依赖证书模块，前者只要有 .NET 就能读公钥。
for /f "usebackq delims=" %%t in (`powershell -NoProfile -Command "(New-Object Security.Cryptography.X509Certificates.X509Certificate2 '%CER%').Thumbprint"`) do set "CER_THUMB=%%t"
if not defined CER_THUMB (
    echo [错误] 读取 %CER% 指纹失败。
    exit /b 1
)
if /i not "%CER_THUMB%"=="%THUMB%" (
    echo [错误] 证书不一致：清单用 %THUMB% 签名，而 %CER% 的指纹是 %CER_THUMB%。
    echo         请重跑 tools\make-dev-cert.ps1 后用同一张证书重新构建。
    exit /b 1
)
echo        版本: %VER% （PE 版本 %VER4%）
echo        指纹: %CER_THUMB%

:: ---------- 7. 编译安装包 ----------
echo.
echo [7/7] 编译 Inno Setup 安装包...
set "REDIST_DEFINE=/DHaveVstoRedist=0"
if exist "%VSTO_REDIST%" set "REDIST_DEFINE=/DHaveVstoRedist=1"
if "%REDIST_DEFINE%"=="/DHaveVstoRedist=1" (
    echo        VSTO 运行库：随包携带，安装完全离线。
) else (
    echo        VSTO 运行库：未随包携带，缺它的机器会在安装时联网下载约 40 MB。
    echo         想做完全离线的安装包，把 vstor_redist.exe 放进 Installer\redist\ 再跑一次。
)

"%ISCC%" /DAppVersion="%VER%" /DAppVersion4="%VER4%" /DCertThumbprint="%THUMB%" %REDIST_DEFINE% "%ISS%"
if errorlevel 1 (
    echo [错误] Inno Setup 编译失败。
    exit /b 1
)

echo.
echo ==========================================
echo 打包完成
echo ==========================================
echo 安装包目录: %DIST%
dir /b "%DIST%\*.exe" 2>nul
echo.
echo 用户拿到这个 exe 双击即可：自动申请管理员、自动检查 .NET 4.8 与 VSTO 运行库、
echo 自动导入证书、自动注册到 Word 与 WPS，全程只点"下一步"。
echo 卸载（控制面板 - 程序和功能）会一并清掉注册表和本安装包导入的证书。
exit /b 0


:: ---------- 子过程 ----------
:gen_cert
if not exist "%CERTPS1%" (
    echo [错误] 找不到 %CERTPS1%。
    exit /b 1
)
echo        执行 tools\make-dev-cert.ps1 ...
powershell -NoProfile -ExecutionPolicy Bypass -File "%CERTPS1%"
if errorlevel 1 (
    echo [错误] 生成证书失败。
    exit /b 1
)
exit /b 0

:: 读 csproj.user 里的 ManifestCertificateThumbprint；读不到就 exit /b 1 让调用方去生成证书。
:read_thumbprint
set "THUMB="
if not exist "%USERPROJ%" exit /b 1
for /f "usebackq delims=" %%t in (`powershell -NoProfile -Command "$x=[xml](Get-Content -Raw -LiteralPath '%USERPROJ%'); $x.Project.PropertyGroup.ManifestCertificateThumbprint | Where-Object { $_ } | Select-Object -First 1"`) do set "THUMB=%%t"
if not defined THUMB exit /b 1
exit /b 0
