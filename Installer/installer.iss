; =====================================================================
; 小恐龙公文排版助手 —— Inno Setup 安装脚本（Inno Setup 6.3+ / 7.x）
;
; 正常入口是仓库根目录的 make.bat：它先 Release 构建、把 bin\Release 镜像成
; dist\payload，再用下面四个宏调用 ISCC：
;     /DAppVersion=3.8.0            显示用版本（安装包文件名、卸载列表）
;     /DAppVersion4=3.8.0.0         PE 版本（setup.exe 文件属性）
;     /DCertThumbprint=BFD2...      清单签名证书指纹（卸载时按它删证书）
;     /DHaveVstoRedist=0|1          Installer\redist\vstor_redist.exe 是否随包携带
; 在 IDE 里手工编译也能过（每个宏都有默认值），只是没有指纹时卸载不会清理证书。
;
; 用户全程只点"下一步"，安装包自己做四件事：
;   1 检查 .NET 4.8；缺 VSTO 运行库就自动补（优先随包，其次联网下载并校验 SHA-256）。
;   2 把插件装进 Program Files，并按 VSTO 规定写注册表：file:/// + |vstolocal
;     让运行库直接从安装目录加载，不走 ClickOnce 缓存。
;   3 用 certutil 把打包用的自签名证书导入本机受信任根 + 受信任发布者，
;     这样 Word/WPS 加载时不再弹"是否信任此发布者"。
;   4 卸载时把写过的注册表项清掉，并且只删本安装包自己导入的那张证书。
; =====================================================================

#define MyAppName "小恐龙公文排版助手"
#define MyAppPublisher "小恐龙工作室"
; 加载项 ID 用 "厂商.产品名" 的点分形式：官方版的 ID 是 小恐龙工作室.小恐龙公文排版助手，
; 开源版刻意取 小恐龙工作室.公文排版助手，两份注册表键名互不相同，可以并存、也互不顶替。
; 信息键另用一个短名，避免和官方那份 HKCU\Software\小恐龙工作室\小恐龙公文排版助手 撞车
; （撞上了我们卸载时会把它的 Version/Path 一起删掉）。
#define MyAddinId "小恐龙工作室.公文排版助手"
#define MyProductId "公文排版助手"
#define MyAppURL "https://github.com/xkonglong/gw"
#define MyVstoFile "公文排版.vsto"

#ifndef AppVersion
  #define AppVersion "0.0.0"
#endif
#ifndef AppVersion4
  #define AppVersion4 "0.0.0.0"
#endif
#ifndef CertThumbprint
  #define CertThumbprint ""
#endif
#ifndef HaveVstoRedist
  #define HaveVstoRedist "0"
#endif

[Setup]
; AppId 一旦发布就不能改：它是 Inno 判断"同一个程序"的依据，改了就会出现
; 装了新版还留着旧版条目、或卸载器找不到安装记录。
AppId={{5611716C-4AB9-4ECF-84F5-22251C389075}
AppName={#MyAppName}
AppVersion={#AppVersion}
AppVerName={#MyAppName} {#AppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={autopf}\{#MyAppName}
DefaultGroupName={#MyAppName}
DisableProgramGroupPage=yes
DisableWelcomePage=yes
UninstallDisplayName={#MyAppName}
InfoAfterFile=安装完成说明.txt
OutputDir=..\dist
OutputBaseFilename={#MyAppName}-Setup-{#AppVersion}
; 故意不设 SetupIconFile：仓库里唯一的 .ico（src\Resources\wps.ico）是功能区"两端对齐"
; 按钮图标，不是品牌图标，拿它当安装包图标比 Inno 的默认图标更让人误会。
Compression=lzma2/max
SolidCompression=yes
WizardStyle=modern
SetupLogging=yes
ArchitecturesAllowed=x86 x64compatible arm64
ArchitecturesInstallIn64BitMode=x64compatible arm64
; setup.exe 本体编成 32 位：同一个包既能跑在 32 位 Windows 上，也能在 64 位 Windows 上
; 进入 64 位安装模式（{autopf} 落到真正的 Program Files，{sys} 落到真正的 System32，
; 这两点是 Inno 在 64-bit install mode 下自己保证的，不是靠 exe 位数）。
; 插件本体保持 AnyCPU：编成 x86 会让 64 位 Word/WPS 直接拒绝加载。
SetupArchitecture=x86
PrivilegesRequired=admin
; 插件 dll 在 Word/WPS 运行期间一直被占用，不先处理就复制必然失败。交给 Inno 的
; 重启管理器（默认过滤器已包含 *.dll）礼貌请求宿主退出，用户可以保存文档 —— 这里
; 不 taskkill /F 强杀 WINWORD.EXE/wps.exe，因为那会直接丢掉用户未保存的公文。
CloseApplications=yes
; 重启宿主没有意义：加载项要重新打开程序才会被读进来，说明文字里已经写了这一点。
RestartApplications=no
VersionInfoVersion={#AppVersion4}
VersionInfoProductVersion={#AppVersion4}
VersionInfoProductName={#MyAppName}
VersionInfoCompany={#MyAppPublisher}
VersionInfoDescription={#MyAppName} 安装程序

[Languages]
; 顺序即优先级：中文环境默认进 zh_CN。
Name: "zh_CN"; MessagesFile: "compiler:Languages\ChineseSimplified.isl"
Name: "en_US"; MessagesFile: "compiler:Default.isl"

[CustomMessages]
zh_CN.Net48Missing=本插件运行在 .NET Framework 4.8 上，本机没有检测到它。%n%n请先安装 .NET Framework 4.8，再重新运行本安装包。%n下载页面：https://dotnet.microsoft.com/download/dotnet-framework/net48
en_US.Net48Missing=This add-in runs on .NET Framework 4.8, which was not found on this PC.%n%nInstall .NET Framework 4.8 first, then run this installer again.%nDownload page: https://dotnet.microsoft.com/download/dotnet-framework/net48
zh_CN.VstoDownloading=正在准备 VSTO 运行库（加载插件必需，约 40 MB）
en_US.VstoDownloading=Preparing the VSTO runtime (required to load the add-in, ~40 MB)
zh_CN.VstoInstalling=正在静默安装 VSTO 运行库，请稍候……
en_US.VstoInstalling=Installing the VSTO runtime silently, please wait...
zh_CN.VstoDownloadFailed=VSTO 运行库下载失败：%1%n%n本机可以上网时重试即可；如果想完全离线安装，把 vstor_redist.exe 放到 Installer\redist\ 目录后重新执行 make.bat，安装包就会带着它一起装。
en_US.VstoDownloadFailed=Could not download the VSTO runtime: %1%n%nRetry while this PC has internet access, or put vstor_redist.exe into Installer\redist\ and rerun make.bat so the installer carries it offline.
zh_CN.VstoStillMissing=尝试安装之后仍然检测不到 VSTO 运行库（Microsoft Visual Studio 2010 Tools for Office Runtime）。%n%n没有它，Word/WPS 不会加载插件；但也可能是本机装了、只是注册表位置和常见位置不同。%n%n选"是"：退出安装包，先手动装运行库。%n选"否"：继续安装插件文件。
en_US.VstoStillMissing=The VSTO runtime still cannot be detected after the install attempt.%n%nWithout it Word/WPS will not load the add-in - though it is possible that it is installed but registered somewhere unexpected.%n%nChoose Yes to exit and install the runtime manually.%nChoose No to continue installing the add-in files anyway.
zh_CN.VstoAborted=已取消：没有 VSTO 运行库，插件不会被 Word/WPS 加载。
en_US.VstoAborted=Aborted: without the VSTO runtime Word/WPS cannot load the add-in.
zh_CN.CertTitle=证书信任
en_US.CertTitle=Certificate trust
zh_CN.CertFailed=没能把插件的签名证书（指纹 %1）导入本机。%n%n插件仍然可以安装和使用，只是 Word/WPS 第一次加载时会弹一次"是否信任此发布者"，选信任即可，之后不再提示。%n%n想彻底消除这个提示，用管理员身份执行下面两条命令（gw-codecert.cer 在本安装包里）：%n  certutil -addstore -f Root  "gw-codecert.cer"%n  certutil -addstore -f TrustedPublisher  "gw-codecert.cer"
en_US.CertFailed=The add-in's signing certificate (thumbprint %1) could not be added to this PC.%n%nThe add-in still installs and works; Word/WPS will ask once whether to trust the publisher, and confirming is enough.%n%nTo remove that prompt, run as administrator (gw-codecert.cer is inside this installer):%n  certutil -addstore -f Root  "gw-codecert.cer"%n  certutil -addstore -f TrustedPublisher  "gw-codecert.cer"
zh_CN.CertPartial=证书只成功导入了一个存储（指纹 %1），Word/WPS 可能还会提示一次信任确认。%n%n管理员身份执行这两条可以补齐：%n  certutil -addstore -f Root  "gw-codecert.cer"%n  certutil -addstore -f TrustedPublisher  "gw-codecert.cer"
en_US.CertPartial=Only one certificate store was updated (thumbprint %1); Word/WPS may still prompt once.%n%nRun these as administrator to complete it:%n  certutil -addstore -f Root  "gw-codecert.cer"%n  certutil -addstore -f TrustedPublisher  "gw-codecert.cer"

[Files]
; 载荷目录是 bin\Release 的镜像（去掉 pdb 和证书），必须整目录带走：
; 公文排版.dll.manifest 里逐项记着 42 个 .vba 与 dll.config 的哈希，少一个文件 VSTO 就拒绝加载。
; 手工编译前请先跑一次 make.bat，否则这里会报"没有匹配的文件"。
Source: "..\dist\payload\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
; 证书公钥只在安装时导入信任链用，不进安装目录，所以 dontcopy、按需释放到 {tmp}。
Source: "..\src\Resources\gw-codecert.cer"; Flags: dontcopy
#if HaveVstoRedist == "1"
Source: "redist\vstor_redist.exe"; Flags: dontcopy
#endif

[Registry]
; ---- 加载项注册 ----
; 同一个 ID 写三处：HKCU 保证当前用户 + WPS 一定看得到（WPS 只被证实读 HKCU），
; HKLM 的 64/32 两个视图覆盖本机其他用户以及 32 位 Office（32 位 Office 只读 WOW6432Node）。
; HKLM64 那四行带 Check: Is64BitInstallMode：setup.exe 现在是 32 位的，在真正的 32 位 Windows
; 上跑时这个根不可用，不守卫就会在装到一半时报错。
; Office 按加载项 ID 合并各视图，不会加载两次；反过来 HKCU 里残留的 LoadBehavior=2/0
; （用户曾手动禁用过）会压过 HKLM 的 3，所以三处都显式写 3。
Root: HKCU; Subkey: "Software\Microsoft\Office\Word\Addins\{#MyAddinId}"; ValueType: string; ValueName: "FriendlyName"; ValueData: "{#MyAppName}"; Flags: uninsdeletekey
Root: HKCU; Subkey: "Software\Microsoft\Office\Word\Addins\{#MyAddinId}"; ValueType: string; ValueName: "Description"; ValueData: "{#MyAppName} for Word/WPS（GB/T 9704—2012）"
Root: HKCU; Subkey: "Software\Microsoft\Office\Word\Addins\{#MyAddinId}"; ValueType: dword; ValueName: "LoadBehavior"; ValueData: "3"
Root: HKCU; Subkey: "Software\Microsoft\Office\Word\Addins\{#MyAddinId}"; ValueType: string; ValueName: "Manifest"; ValueData: "file:///{app}\{#MyVstoFile}|vstolocal"
Root: HKLM64; Subkey: "Software\Microsoft\Office\Word\Addins\{#MyAddinId}"; ValueType: string; ValueName: "FriendlyName"; ValueData: "{#MyAppName}"; Flags: uninsdeletekey; Check: Is64BitInstallMode
Root: HKLM64; Subkey: "Software\Microsoft\Office\Word\Addins\{#MyAddinId}"; ValueType: string; ValueName: "Description"; ValueData: "{#MyAppName} for Word/WPS（GB/T 9704—2012）"; Check: Is64BitInstallMode
Root: HKLM64; Subkey: "Software\Microsoft\Office\Word\Addins\{#MyAddinId}"; ValueType: dword; ValueName: "LoadBehavior"; ValueData: "3"; Check: Is64BitInstallMode
Root: HKLM64; Subkey: "Software\Microsoft\Office\Word\Addins\{#MyAddinId}"; ValueType: string; ValueName: "Manifest"; ValueData: "file:///{app}\{#MyVstoFile}|vstolocal"; Check: Is64BitInstallMode
Root: HKLM32; Subkey: "Software\Microsoft\Office\Word\Addins\{#MyAddinId}"; ValueType: string; ValueName: "FriendlyName"; ValueData: "{#MyAppName}"; Flags: uninsdeletekey
Root: HKLM32; Subkey: "Software\Microsoft\Office\Word\Addins\{#MyAddinId}"; ValueType: string; ValueName: "Description"; ValueData: "{#MyAppName} for Word/WPS（GB/T 9704—2012）"
Root: HKLM32; Subkey: "Software\Microsoft\Office\Word\Addins\{#MyAddinId}"; ValueType: dword; ValueName: "LoadBehavior"; ValueData: "3"
Root: HKLM32; Subkey: "Software\Microsoft\Office\Word\Addins\{#MyAddinId}"; ValueType: string; ValueName: "Manifest"; ValueData: "file:///{app}\{#MyVstoFile}|vstolocal"

; ---- WPS 加载项白名单（必写，否则 WPS 根本不枚举本加载项） ----
; 这条是逆向原版 MSI（Advanced Installer 打的"低权限安装版"）的 Registry 表确认的：
;   HKCU\SOFTWARE\Kingsoft\Office\WPS\AddinsWL | [Manufacturer].[ProductName] | 空值
; 本机实测：不写它时 WPS 的 COMAddIns 里连条目都不出现（不报错、也不显示为禁用），
; 补上同名空值后立刻 Connect=True。我早先"WL 只服务于原生 COM 加载项、可以不写"的判断是错的。
; 用 uninsdeletevalue 而不是 uninsdeletekey：这张表是整机共享的，里面还有 NTKO、iSignature
; 等几十个别的厂商条目，删整键会把别人的加载项一起废掉。
Root: HKCU; Subkey: "Software\Kingsoft\Office\WPS\AddinsWL"; ValueType: string; ValueName: "{#MyAddinId}"; ValueData: ""; Flags: uninsdeletevalue
; 注意 WL 只有 HKCU 一份，WPS 也只看 HKCU：所以 HKLM 那两处注册只让"所有用户的 Word"看到插件，
; 同一台机器上其他用户的 WPS 仍需各自运行一次安装包。原版直接把整个安装做成 per-user
; （SET_APPDIR=[AppDataFolder][Manufacturer]\[ProductName]）正是为了绕开这个错位。

; ---- 安装信息 ----
; 卸载器靠这几条标记判断"证书、WPS 白名单是不是本安装包写的"，避免删掉别人手工导入的东西。
Root: HKLM; Subkey: "Software\{#MyAppPublisher}\{#MyProductId}"; ValueType: string; ValueName: "Version"; ValueData: "{#AppVersion}"; Flags: uninsdeletekey
Root: HKLM; Subkey: "Software\{#MyAppPublisher}\{#MyProductId}"; ValueType: string; ValueName: "InstallPath"; ValueData: "{app}"; Flags: uninsdeletekey
Root: HKLM; Subkey: "Software\{#MyAppPublisher}\{#MyProductId}"; ValueType: string; ValueName: "CertThumbprint"; ValueData: "{#CertThumbprint}"; Flags: uninsdeletekey

[Code]
var
  DownloadPage: TDownloadWizardPage;
  // 这个标记必须在 [Registry] 的 uninsdeletekey 删掉信息键之前读出来，
  // 所以赋值放在 usUninstall，实际删证书放在 usPostUninstall。
  UninstallCertInstalled: string;

const
  AddinId = '{#MyAddinId}';
  InfoRegKey = 'Software\{#MyAppPublisher}\{#MyProductId}';
  // WPS 的禁用表：用户手动禁用过本插件时条目落在这里。
  // （允许表 AddinsWL 是必写项，已经放进 [Registry]，不在这里重复。）
  WpsBlocklistKey = 'Software\Kingsoft\Office\WPS\AddinsBL';
  NetFullKey = 'SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\Full';
  VstoSetupKey = 'SOFTWARE\Microsoft\VSTO Runtime Setup';
  // 528040 = .NET Framework 4.8（Windows 10 1903 及以后自带）。
  MinNet48Release = 528040;
  CertFileName = 'gw-codecert.cer';
  RedistFileName = 'vstor_redist.exe';
  // 微软官方下载页 microsoft.com/download/details.aspx?id=105522 的直链，41,649,696 字节；
  // 下面是这个文件实测的 SHA-256，Inno 下载完先校验再执行，防止 CDN 被换包后
  // 以管理员权限静默跑一个陌生 exe。换 URL 时必须同步换哈希。
  VstoRedistUrl = 'https://download.microsoft.com/download/8/6/4/8641e164-7796-4b34-81c7-30d24a5bd533/vstor_redist.exe';
  VstoRedistSha256 = '9511042eabb4123827d1799154b9b2754c8509ca742d4e1aea919084563f0b1e';
  CertThumbprint = '{#CertThumbprint}';
  // Windows Installer 的"需要重启"成功码。
  ErrorSuccessRestartRequired = 3010;

// 静默执行一个程序，退出码写进日志；返回是否成功（退出码 0）。
function RunHidden(Filename: String; Params: String; var Code: Integer): Boolean;
begin
  Result := Exec(ExpandConstant(Filename), Params, '', SW_HIDE, ewWaitUntilTerminated, Code)
    and (Code = 0);
  if not Result then
    Log('命令失败（退出码 ' + IntToStr(Code) + '）: ' + Filename + ' ' + Params);
end;

function IsNet48OrNewer: Boolean;
var
  Release: Cardinal;
begin
  // 4.x 的 Release 值在两个视图里都可能出现，先看 64 位再看 32 位。
  Result := False;
  if RegQueryDWordValue(HKLM64, NetFullKey, 'Release', Release) then
    Result := Release >= MinNet48Release
  else if RegQueryDWordValue(HKLM32, NetFullKey, 'Release', Release) then
    Result := Release >= MinNet48Release;
end;

// VSTO 4.0 运行库按微软文档查 32 位视图的两个键：v4R 带 Version（独立 redist 装的），
// v4 只有 Install=1（随 Office 一起装的那份）。实测本机（没装 Office，只有 WPS + VS）
// 64 位视图里根本没有 VSTO Runtime Setup，所以两个视图 × 两个键都查，命中即算有。
function IsVstoRuntimeInstalled: Boolean;
var
  S: string;
  D: Cardinal;
  Roots: array[0..1] of Integer;
  Keys: array[0..1] of string;
  I, J: Integer;
begin
  Result := False;
  Roots[0] := HKLM32;
  Roots[1] := HKLM64;
  Keys[0] := '\v4R';
  Keys[1] := '\v4';
  for I := 0 to High(Roots) do
    for J := 0 to High(Keys) do
      if not Result then
      begin
        if RegQueryStringValue(Roots[I], VstoSetupKey + Keys[J], 'Version', S) then
          if S <> '' then
            Result := True;
        if not Result then
          if RegQueryDWordValue(Roots[I], VstoSetupKey + Keys[J], 'Install', D) then
            if D = 1 then
              Result := True;
      end;
end;

// 缺 VSTO 运行库时插件在 Word/WPS 里根本不会被加载，所以这一步值得单独处理：
// 随包带了 exe 就用本地的（完全离线），否则走下载页联网下载，装完再检测一次。
// 返回非空字符串 = 中止安装（Inno 会把它显示出来）。
function PrepareVstoRuntime(var NeedsReboot: Boolean): String;
var
  ResultCode: Integer;
  RedistPath, DownloadError: string;
begin
  Result := '';
  if IsVstoRuntimeInstalled then
  begin
    Log('已检测到 VSTO 运行库。');
    Exit;
  end;

  RedistPath := '';
#if HaveVstoRedist == "1"
  ExtractTemporaryFile(RedistFileName);
  RedistPath := ExpandConstant('{tmp}\' + RedistFileName);
  Log('使用安装包内自带的 VSTO 运行库。');
#else
  Log('安装包未自带 VSTO 运行库，尝试联网下载。');
  // 下载期间必须盖住 Ready 页并禁用 Next/Back：Inno 在本函数返回前不会离开 Ready 页，
  // 用户此时再点 Install 或 Back 就会把这段流程重入一次。Cancel 留着，卡住的下载要能中止。
  // try/finally 保证任何一条退出路径都把按钮恢复。
  WizardForm.NextButton.Enabled := False;
  WizardForm.BackButton.Enabled := False;
  try
    DownloadPage.Clear;
    DownloadPage.Add(VstoRedistUrl, RedistFileName, VstoRedistSha256);
    DownloadPage.Show;
    try
      try
        DownloadPage.Download;
        RedistPath := ExpandConstant('{tmp}\' + RedistFileName);
      except
        // 把 Inno 抛出的异常文本（DNS、404、校验和不符等）原样带进提示，
        // 否则用户只看到"下载失败"四个字，只能来问。
        DownloadError := GetExceptionMessage;
        Result := FmtMessage(CustomMessage('VstoDownloadFailed'), [DownloadError]);
        Exit;
      end;
    finally
      DownloadPage.Hide;
    end;
    // DownloadPage.Hide 把界面切回 Ready 页，Inno 的翻页逻辑顺手把两个按钮重置成可用，
    // 而下面还要静默装运行库，所以再禁一次。
    WizardForm.NextButton.Enabled := False;
    WizardForm.BackButton.Enabled := False;
  finally
    WizardForm.NextButton.Enabled := True;
    WizardForm.BackButton.Enabled := True;
  end;
  WizardForm.StatusLabel.Caption := CustomMessage('VstoInstalling');
#endif

  if (RedistPath = '') or not FileExists(RedistPath) then
  begin
    Result := FmtMessage(CustomMessage('VstoDownloadFailed'), ['']);
    Exit;
  end;

  // /q /norestart 是微软对这个下载器包记录的静默参数。这里不信它的退出码
  // （这类 wrapper 在"已经装过"时也会返回非 0），一切以装完再检测为准。
  if Exec(RedistPath, '/q /norestart', '', SW_HIDE, ewWaitUntilTerminated, ResultCode) then
  begin
    Log('vstor_redist.exe 退出码 ' + IntToStr(ResultCode));
    if ResultCode = ErrorSuccessRestartRequired then
      NeedsReboot := True;
  end else
    Log('无法启动 vstor_redist.exe。');

  if IsVstoRuntimeInstalled then
  begin
    Log('VSTO 运行库安装完成。');
    Exit;
  end;

  // 走到这里只能问用户：检测说没有，但检测本身可能不准（注册表位置随版本变化）。
  // 默认按钮给"否(继续)"，避免一次误报把本来能用的插件挡在门外。
  if MsgBox(CustomMessage('VstoStillMissing'), mbCriticalError, MB_YESNO) = IDYES then
    Result := CustomMessage('VstoAborted');
end;

// 把打包用的自签名证书导入本机两张存储：
//   Root             —— 证书链只有自己当根才验证得通过；
//   TrustedPublisher —— Office 据此认定发布者，不再逐次弹信任提示。
// 只导公钥，私钥留在打包机上。失败不终止安装：插件照样能装，只是首次加载会弹一次提示。
procedure TrustSigningCertificate;
var
  ResultCode: Integer;
  CerPath: string;
  RootOk, PublisherOk, Verified: Boolean;
begin
  ExtractTemporaryFile(CertFileName);
  CerPath := ExpandConstant('{tmp}\' + CertFileName);

  RootOk := RunHidden('{sys}\certutil.exe', '-addstore -f Root "' + CerPath + '"', ResultCode);
  PublisherOk := RunHidden('{sys}\certutil.exe',
    '-addstore -f TrustedPublisher "' + CerPath + '"', ResultCode);

  if CertThumbprint <> '' then
  begin
    // addstore 的退出码不足以说明证书真的进了存储，按指纹再查一次。
    Verified := RunHidden('{sys}\certutil.exe', '-store Root ' + CertThumbprint, ResultCode) and
      RunHidden('{sys}\certutil.exe', '-store TrustedPublisher ' + CertThumbprint, ResultCode);
  end
  else
    Verified := RootOk and PublisherOk;

  if Verified then
  begin
    Log('证书已导入本机受信任根与受信任发布者。');
    RegWriteStringValue(HKLM, InfoRegKey, 'CertInstalled', '1');
  end
  else if RootOk or PublisherOk then
    MsgBox(FmtMessage(CustomMessage('CertPartial'), [CertThumbprint]), mbError, MB_OK)
  else
    MsgBox(FmtMessage(CustomMessage('CertFailed'), [CertThumbprint]), mbError, MB_OK);
end;

procedure InitializeWizard;
begin
  DownloadPage := CreateDownloadPage(SetupMessage(msgWizardPreparing),
    CustomMessage('VstoDownloading'), nil);
end;

function PrepareToInstall(var NeedsReboot: Boolean): String;
begin
  Result := '';
  NeedsReboot := False;

  // .NET 4.8 是硬前提（VSTO 运行库和插件本身都跑在它上面），缺了就没有继续的意义。
  // 返回非空字符串即中止安装，Inno 会把这段文字显示给用户，不必再自己弹一次框。
  if not IsNet48OrNewer then
  begin
    Result := CustomMessage('Net48Missing');
    Exit;
  end;

  Result := PrepareVstoRuntime(NeedsReboot);
end;

procedure CurStepChanged(CurStep: TSetupStep);
begin
  if CurStep = ssPostInstall then
  begin
    TrustSigningCertificate;

    // 用户曾经在 WPS 里手动禁用过本插件的话，BL 里的条目会让它一直不加载；
    // 既然他现在主动重装，就把这条禁用记录清掉（值不存在时是无害的空操作）。
    RegDeleteValue(HKCU, WpsBlocklistKey, AddinId);
  end;
end;

procedure CurUninstallStepChanged(CurUninstallStep: TUninstallStep);
var
  ResultCode: Integer;
begin
  if CurUninstallStep = usUninstall then
  begin
    if not RegQueryStringValue(HKLM, InfoRegKey, 'CertInstalled', UninstallCertInstalled) then
      UninstallCertInstalled := '';
  end;

  if CurUninstallStep = usPostUninstall then
  begin
    // 只删本安装包导入的那张证书（按打包时传进来的指纹），不动别人手工导入的证书；
    // 手工编译时指纹为空，这一步整体跳过。
    if (UninstallCertInstalled = '1') and (CertThumbprint <> '') then
    begin
      RunHidden('{sys}\certutil.exe', '-delstore -f Root ' + CertThumbprint, ResultCode);
      RunHidden('{sys}\certutil.exe', '-delstore -f TrustedPublisher ' + CertThumbprint, ResultCode);
    end;
  end;
end;
