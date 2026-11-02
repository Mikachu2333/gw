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
$userProj   = Join-Path $projDir '公文排版.csproj.user'

if (-not (Test-Path $projDir)) { throw "未找到项目目录：$projDir" }

# 1) 取或建证书（幂等：同主题已存在则复用，避免每次构建都往存储里堆证书）
$existing = Get-ChildItem Cert:\CurrentUser\My -CodeSigningCert |
            Where-Object { $_.Subject -eq $Subject } |
            Select-Object -First 1

if ($existing -and $Force) {
    Write-Host "移除旧证书 $existing.Thumbprint"
    Remove-Item $existing.PSPath -Force
    $existing = $null
}

if ($existing) {
    $cert = $existing
    Write-Host "复用已存在的代码签名证书：$($cert.Thumbprint)"
} else {
    $cert = New-SelfSignedCertificate `
        -Type CodeSigningCert `
        -Subject $Subject `
        -HashAlgorithm SHA256 `
        -KeyUsage DigitalSignature `
        -KeyExportPolicy Exportable `
        -KeyAlgorithm RSA -KeyLength 2048 `
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
Write-Host "完成。现在可以构建：msbuild src\公文排版.csproj /p:Configuration=Debug"
Write-Host ''
Write-Host '若 Word/WPS 加载时仍提示不受信任，请以管理员身份执行下面两行（本机信任，仅影响这台机器）：'
Write-Host "  Import-Certificate -FilePath '$cerPath' -CertStoreLocation Cert:\LocalMachine\Root"
Write-Host "  Import-Certificate -FilePath '$cerPath' -CertStoreLocation Cert:\LocalMachine\TrustedPublisher"
