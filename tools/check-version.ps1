# 校验发布版本号在 C# 侧与 npm 侧一致。
# 用法（由仓库根目录的 make.bat 第 6 步调用）：
#   powershell -NoProfile -ExecutionPolicy Bypass -File tools\check-version.ps1 -AssemblyVersion 4.0.0.0
# 退出码 0 表示一致，并在标准输出打印显示用版本号（修订号为 0 时三段，否则四段）；
# 非 0 表示不一致或读取失败，标准输出给出中文原因。
param(
    [Parameter(Mandatory = $true)][string]$AssemblyVersion
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$pkg = Join-Path $root 'wps-js\package.json'
$lock = Join-Path $root 'wps-js\package-lock.json'

$asm = [Version]::Parse($AssemblyVersion)
$display3 = '{0}.{1}.{2}' -f $asm.Major, $asm.Minor, $asm.Build
$display = if ($asm.Revision -gt 0) { $asm.ToString() } else { $display3 }

$pkgJson = Get-Content -Raw -LiteralPath $pkg | ConvertFrom-Json
$pkgVersion = $pkgJson.version

# ConvertFrom-Json 不支持 package-lock.json 里名为 "" 的键，且这里只需要顶层 version，
# 用正则取第一处 "version" 即可（lockfileVersion 3 的顶层 version 就是项目版本）。
$lockVersion = [regex]::Match(
    (Get-Content -Raw -LiteralPath $lock),
    '"version"\s*:\s*"([^"]+)"'
).Groups[1].Value

if ($pkgVersion -ne $display3) {
    Write-Output "版本不一致：AssemblyInfo.cs 是 $AssemblyVersion（主版本 $display3），而 wps-js\package.json 是 $pkgVersion。"
    exit 1
}
if ($lockVersion -ne $pkgVersion) {
    Write-Output "版本不一致：wps-js\package.json 是 $pkgVersion，而 package-lock.json 是 $lockVersion（请重跑 npm install）。"
    exit 1
}
Write-Output $display
exit 0
