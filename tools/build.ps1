# 统一构建入口；所有原生命令都检查退出码，日志保留在 dist/logs。
[CmdletBinding()]
param([switch]$WpsOnly)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$dist = Join-Path $root 'dist'
[IO.Directory]::CreateDirectory((Join-Path $dist 'logs')) | Out-Null

function Invoke-Native([string]$Exe, [string[]]$Arguments) {
    & $Exe @Arguments
    if ($LASTEXITCODE -ne 0) { throw "$Exe 失败，退出码 $LASTEXITCODE。" }
}
function Mirror-Workspace([string]$Source, [string]$Target, [string[]]$Exclude = @()) {
    $fullTarget = [IO.Path]::GetFullPath($Target)
    $allowed = [IO.Path]::GetFullPath($dist) + [IO.Path]::DirectorySeparatorChar
    if (-not $fullTarget.StartsWith($allowed, [StringComparison]::OrdinalIgnoreCase)) { throw '镜像目标必须位于 dist 内。' }
    $arguments = @($Source, $fullTarget, '/MIR', '/NFL', '/NDL', '/NJH', '/NJS', '/XD', '__pycache__')
    if ($Exclude.Count) { $arguments += '/XF'; $arguments += $Exclude }
    & robocopy.exe @arguments | Out-Null
    if ($LASTEXITCODE -ge 8) { throw "复制载荷失败：$Source" }
}
function Read-SigningCertificate([string]$Thumbprint) {
    $store = New-Object Security.Cryptography.X509Certificates.X509Store('My', 'CurrentUser')
    try {
        $store.Open([Security.Cryptography.X509Certificates.OpenFlags]::ReadOnly)
        $store.Certificates | Where-Object { $_.Thumbprint -eq $Thumbprint -and $_.HasPrivateKey -and $_.NotAfter -gt (Get-Date) } | Select-Object -First 1
    } finally { $store.Close() }
}
function Find-Iscc {
    $paths = @(
        "$env:LOCALAPPDATA\Programs\Inno Setup 7\ISCC.exe", "$env:ProgramFiles\Inno Setup 7\ISCC.exe",
        "${env:ProgramFiles(x86)}\Inno Setup 6\ISCC.exe", "$env:ProgramFiles\Inno Setup 6\ISCC.exe",
        "$env:LOCALAPPDATA\Programs\Inno Setup 6\ISCC.exe"
    )
    foreach ($path in $paths) { if (Test-Path -LiteralPath $path) { return $path } }
    $command = Get-Command iscc.exe -ErrorAction SilentlyContinue
    if ($command) { return $command.Source }
    throw '没有找到 Inno Setup 6.3+/7 编译器。'
}

try {
    Push-Location $root
    $package = Get-Content -Raw -LiteralPath 'wps-js/package.json' -Encoding UTF8 | ConvertFrom-Json
    $version = $package.version
    if ($version -notmatch '^\d+\.\d+\.\d+$') { throw 'JS 版本必须为三段数字。' }
    if ($package.addonType -ne 'wps' -or $package.name -ne 'gw_mika') { throw 'JS 包必须声明 name=gw_mika、addonType=wps。' }
    $version4 = $version + '.0'
    $iscc = Find-Iscc
    $npm = (Get-Command npm.cmd -ErrorAction Stop).Source

    if (-not $WpsOnly) {
        Write-Host '[1/5] 检查 VSTO 签名并构建 Word 版...'
        $vswhere = "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe"
        $msbuild = & $vswhere -latest -products '*' -requires Microsoft.Component.MSBuild -find 'MSBuild\**\Bin\MSBuild.exe' | Select-Object -First 1
        if (-not $msbuild) { throw '需要带 Office 开发组件的 Visual Studio MSBuild。' }
        $userFile = Join-Path $root 'src/gw_mika.csproj.user'
        $thumb = ''
        if (Test-Path -LiteralPath $userFile) {
            $xml = [xml](Get-Content -Raw -LiteralPath $userFile)
            $thumb = [string]($xml.SelectSingleNode('//*[local-name()="ManifestCertificateThumbprint"]').InnerText)
        }
        $cert = Read-SigningCertificate $thumb
        if (-not $cert -or -not (Test-Path -LiteralPath 'src/Resources/gw-codecert.cer') -or -not (Test-Path -LiteralPath 'src/gw-strongname.snk')) {
            & (Join-Path $PSScriptRoot 'make-dev-cert.ps1')
            $xml = [xml](Get-Content -Raw -LiteralPath $userFile)
            $thumb = [string]($xml.SelectSingleNode('//*[local-name()="ManifestCertificateThumbprint"]').InnerText)
            $cert = Read-SigningCertificate $thumb
            if (-not $cert) { throw '没有可用的清单签名证书，已停止打包。' }
        }
        $publicCert = New-Object Security.Cryptography.X509Certificates.X509Certificate2((Join-Path $root 'src/Resources/gw-codecert.cer'))
        if ($publicCert.Thumbprint -ne $thumb) { throw '安装包公钥证书与清单签名指纹不同。' }
        Invoke-Native $msbuild @('src/gw_mika.csproj', '/t:Rebuild', '/p:Configuration=Release', '/p:Platform=AnyCPU', '/v:m', '/nologo', '-bl:dist/logs/release-{}.binlog')
        $version4 = [Reflection.AssemblyName]::GetAssemblyName((Join-Path $root 'src/bin/Release/gw_mika.dll')).Version.ToString()
        $peVersion = [Version]::Parse($version4)
        $mainVersion = '{0}.{1}.{2}' -f $peVersion.Major, $peVersion.Minor, $peVersion.Build
        if ($mainVersion -ne $version) { throw "版本不一致：程序集 $version4，JS $version。请同步版本后重试。" }
        Mirror-Workspace (Join-Path $root 'src/bin/Release') (Join-Path $dist 'payload') @('*.pdb', '*.binlog', 'verification*', 'gw-codecert.cer')
    }

    Write-Host '[2/5] 构建 WPS JS 版...'
    Push-Location (Join-Path $root 'wps-js')
    try {
        if (-not (Test-Path -LiteralPath 'node_modules')) { Invoke-Native $npm @('ci', '--no-audit', '--no-fund') }
        Invoke-Native $npm @('run', 'build')
    } finally { Pop-Location }

    Write-Host '[3/5] 生成 Linux 当前用户安装包...'
    $linuxRoot = Join-Path $dist ('gw_mika-WPS-Linux-' + $version)
    Mirror-Workspace (Join-Path $root 'Installer/linux') $linuxRoot @('__pycache__', '*.pyc')
    Mirror-Workspace (Join-Path $root 'wps-js/dist') (Join-Path $linuxRoot 'payload')
    $archive = Join-Path $dist ('gw_mika-WPS-Linux-' + $version + '.tar.gz')
    Invoke-Native 'tar.exe' @('-czf', $archive, '-C', $dist, ([IO.Path]::GetFileName($linuxRoot)))

    Write-Host '[4/5] 编译独立安装器...'
    $defines = @("/DAppVersion=$version", "/DAppVersion4=$version4")
    Invoke-Native $iscc ($defines + @('Installer/wps-js.iss'))
    if (-not $WpsOnly) {
        $redist = if (Test-Path -LiteralPath 'Installer/redist/vstor_redist.exe') { '1' } else { '0' }
        Invoke-Native $iscc ($defines + @("/DCertThumbprint=$thumb", "/DHaveVstoRedist=$redist", 'Installer/word.iss'))
        Write-Host '[5/5] 编译按宿主自动选择的 Windows 安装入口...'
        Invoke-Native $iscc ($defines + @('Installer/installer.iss'))
    }
    Write-Host "打包完成：$dist"
    Write-Host "Windows WPS：gw_mika-WPS-Setup-$version.exe；Linux：gw_mika-WPS-Linux-$version.tar.gz"
    if (-not $WpsOnly) { Write-Host "Windows 自动选择入口：gw_mika-Setup-$version.exe" }
} catch {
    Write-Error $_
    exit 1
} finally { Pop-Location }
