<#
    为 VSTO 项目生成本机自签名代码签名证书。

    VSTO 硬性要求部署清单必须签名（Office.targets 的 VerifyClickOnceSigningSettings
    在未签名时直接终止构建），而清单签名只能按"证书存储里的指纹"进行，
    所以每台开发机都需要一份自己的代码签名证书，且 pfx/cer 不入库。

    用法：
        powershell -ExecutionPolicy Bypass -File tools\make-dev-cert.ps1
    可选参数：
        -Force      已存在同名证书时，先删除旧的再重新生成
        -Subject    证书主题，默认 "CN=GW 公文排版助手 开发证书"

    产物：src\gw-codecert.pfx（证书+私钥，便于迁移）、src\Resources\gw-codecert.cer（公钥，
    供信任发布者）、src\gw-strongname.snk（用同一张证书私钥导出的强名称密钥）、
    以及写入 src\gw_mika.csproj.user 的证书指纹。

    本脚本只写当前用户存储（Cert:\CurrentUser\My），不需要管理员权限。
    要让 Word/WPS 不再弹信任提示，还需把证书导入本机受信任根与受信任发布者，
    脚本最后会打印出需要以管理员身份执行的那两行命令，由你自行决定。
#>
[CmdletBinding()]
param(
    [string] $Subject = 'CN=GW 公文排版助手 开发证书',
    [switch] $Force
)

$ErrorActionPreference = 'Stop'

$repoRoot   = Split-Path -Parent $PSScriptRoot
$projDir    = Join-Path $repoRoot 'src'
$pfxPath    = Join-Path $projDir 'gw-codecert.pfx'
$cerPath    = Join-Path $projDir 'Resources\gw-codecert.cer'
$userProj   = Join-Path $projDir 'gw_mika.csproj.user'

if (-not (Test-Path $projDir)) { throw "未找到项目目录：$projDir" }

# 1) 取或建证书（幂等：同主题已存在则复用，避免每次构建都往存储里堆证书）
# 不依赖证书驱动器的动态 -CodeSigningCert 参数：部分 PowerShell 环境不提供它。
$store = New-Object Security.Cryptography.X509Certificates.X509Store('My', 'CurrentUser')
try {
    $store.Open([Security.Cryptography.X509Certificates.OpenFlags]::ReadOnly)
    $existing = $store.Certificates | Where-Object {
        $_.Subject -eq $Subject -and $_.HasPrivateKey -and $_.NotAfter -gt (Get-Date) -and
        ($_.Extensions | Where-Object {
            $_ -is [Security.Cryptography.X509Certificates.X509EnhancedKeyUsageExtension] -and
            ($_.EnhancedKeyUsages | Where-Object { $_.Value -eq '1.3.6.1.5.5.7.3.3' })
        })
    } | Sort-Object NotAfter -Descending | Select-Object -First 1
} finally { $store.Close() }

if ($existing -and $Force) {
    Write-Host ("移除旧证书 " + $existing.Thumbprint)
    $store.Open([Security.Cryptography.X509Certificates.OpenFlags]::ReadWrite)
    try { $store.Remove($existing) } finally { $store.Close() }
    $existing = $null
}

if ($existing) {
    $cert = $existing
    Write-Host "复用已存在的代码签名证书：$($cert.Thumbprint)"
} else {
    # 必须用传统 CAPI 提供者（-Provider，而非默认的 CNG/Platform Crypto Provider）：
    # .NET Framework 的清单签名器 SecurityUtilities.SignFile → GetRSAPrivateKey →
    # CngKey.Open 对 CNG 句柄会抛 "已检测到正在打开的 CNG 密钥句柄是极短的，
    # 但未指定 EphemeralKey 打开选项"（ArgumentException），导致 MSB4018 构建失败。
    $cert = New-SelfSignedCertificate `
        -Type CodeSigningCert `
        -Subject $Subject `
        -HashAlgorithm SHA256 `
        -KeyUsage DigitalSignature `
        -KeyExportPolicy Exportable `
        -KeyAlgorithm RSA -KeyLength 2048 `
        -Provider 'Microsoft Enhanced Cryptographic Provider v1.0' `
        -CertStoreLocation Cert:\CurrentUser\My `
        -NotAfter (Get-Date).AddYears(3) `
        -TextExtension @('2.5.29.37={text}1.3.6.1.5.5.7.3.3')
    Write-Host "已生成代码签名证书：$($cert.Thumbprint)"
}

# 2) 导出 pfx（无口令，供 csc /keyfile 直接使用）与 cer（公钥，供用户信任发布者）
#    Export-PfxCertificate 不接受空口令，故走 .NET 导出。
$pfxBytes = $cert.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Pfx, '')
[System.IO.File]::WriteAllBytes($pfxPath, $pfxBytes)
$cerBytes = $cert.Export([System.Security.Cryptography.X509Certificates.X509ContentType]::Cert)
[System.IO.File]::WriteAllBytes($cerPath, $cerBytes)
Write-Host "已导出：$pfxPath"
Write-Host "已导出：$cerPath"

# 2b) 强名称密钥（.snk）必须来自"同一张证书私钥"。
#     ClickOnce/VSTO 清单里的 <assemblyIdentity publicKeyToken> 由清单签名证书的公钥推导，
#     若 .snk 是另一把随机密钥，程序集 token 与 .vsto 声明的 token 就会不一致，
#     VSTO 运行时按 .vsto 里的 token 定位加载项程序集 → 安装/加载失败。
#     上游项目把 pfx 同时用作两者正是这个原因；这里用 .snk 是因为 ResolveKeySource
#     无法导入 PowerShell 导出的无口令 pfx（MSB3325）。
$snkPath = Join-Path $projDir 'gw-strongname.snk'
$rsaPriv = [System.Security.Cryptography.X509Certificates.RSACertificateExtensions]::GetRSAPrivateKey($cert)
if (-not $rsaPriv) { throw "无法从证书取得私钥（私钥不可导出？请用 -Force 重新生成证书）" }
$csp = New-Object System.Security.Cryptography.RSACryptoServiceProvider
$csp.ImportParameters($rsaPriv.ExportParameters($true))
$snkBlob = [byte[]]$csp.ExportCspBlob($true)
[System.IO.File]::WriteAllBytes($snkPath, $snkBlob)
Write-Host ("已用证书私钥重建强名称密钥：$snkPath（" + $snkBlob.Length + " 字节）")

# 3) 把指纹写入 .csproj.user（MSBuild 会自动导入同名 .user，且 .gitignore 已忽略它）
#    用纯文本注入而非 XML 解析：.user 带 MSBuild 默认命名空间，XPath 处理容易出错。
$thumbLine = "    <ManifestCertificateThumbprint>$($cert.Thumbprint)</ManifestCertificateThumbprint>"
if (Test-Path $userProj) {
    $text = Get-Content $userProj -Raw -Encoding UTF8
} else {
    $text = "<?xml version=`"1.0`" encoding=`"utf-8`"?>`r`n<Project ToolsVersion=`"15.0`" xmlns=`"http://schemas.microsoft.com/developer/msbuild/2003`">`r`n</Project>`r`n"
}

if ($text -match '<ManifestCertificateThumbprint>') {
    $text = $text -replace '<ManifestCertificateThumbprint>.*?</ManifestCertificateThumbprint>',
                           "<ManifestCertificateThumbprint>$($cert.Thumbprint)</ManifestCertificateThumbprint>"
} elseif ($text -match '(?s)<Project\s[^>]*>') {
    # 插到 <Project ...> 之后，作为独立的 PropertyGroup
    # 只匹配根元素 <Project ...>（要求 Project 后必须是空白，避免误匹配 <ProjectView>）
    $text = [regex]::Replace($text, '(?s)<Project\s[^>]*>', { param($m) $m.Value + "`r`n  <PropertyGroup>`r`n$thumbLine`r`n  </PropertyGroup>" }, 1)
} else {
    throw "无法在 $userProj 中定位 <Project> 根元素"
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($userProj, $text, $utf8NoBom)
Write-Host "已写入指纹到：$userProj"

Write-Host ''
Write-Host "完成。现在可以构建：msbuild src\gw_mika.csproj /p:Configuration=Debug"
Write-Host ''
Write-Host '若 Word/WPS 加载时仍提示不受信任，请以管理员身份执行下面两行（本机信任，仅影响这台机器）：'
Write-Host "  Import-Certificate -FilePath '$cerPath' -CertStoreLocation Cert:\LocalMachine\Root"
Write-Host "  Import-Certificate -FilePath '$cerPath' -CertStoreLocation Cert:\LocalMachine\TrustedPublisher"
