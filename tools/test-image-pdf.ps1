# 验证 VBA 使用的辅助器和 VSTO 共用的写入器，不连接 Office 或打印机。
[CmdletBinding()]
param([ValidateSet(100,150,200,300,400,600)][int]$Dpi = 100)
$ErrorActionPreference = 'Stop'
$workspace = Split-Path -Parent $PSScriptRoot
$job = Join-Path $workspace ('dist/logs/imagepdf-helper-' + [Guid]::NewGuid().ToString('N'))
[IO.Directory]::CreateDirectory($job) | Out-Null
Add-Type -AssemblyName System.Drawing
$screen = [Drawing.Graphics]::FromHwnd([IntPtr]::Zero)
try {
    $hdc = $screen.GetHdc()
    try {
        foreach ($number in 1..2) {
            $metafile = New-Object Drawing.Imaging.Metafile((Join-Path $job ($number.ToString() + '.emf')), $hdc)
            try {
                $graphics = [Drawing.Graphics]::FromImage($metafile)
                try {
                    $graphics.FillRectangle([Drawing.Brushes]::RoyalBlue, 10, 10, 180, 100)
                    $font = New-Object Drawing.Font('Arial', 20)
                    try { $graphics.DrawString('Raster page ' + $number, $font, [Drawing.Brushes]::Black, 20, 150) }
                    finally { $font.Dispose() }
                } finally { $graphics.Dispose() }
            } finally { $metafile.Dispose() }
        }
    } finally { $screen.ReleaseHdc($hdc) }
} finally { $screen.Dispose() }
$xml = New-Object Xml.XmlDocument
$root = $xml.CreateElement('job')
$output = Join-Path $job 'result.pdf'
$root.SetAttribute('output', $output); $root.SetAttribute('dpi', $Dpi.ToString()); $xml.AppendChild($root) | Out-Null
foreach ($number in 1..2) {
    $page = $xml.CreateElement('page'); $page.SetAttribute('number', $number.ToString())
    $page.SetAttribute('width', $(if ($number -eq 1) { '595.25' } else { '842' }))
    $page.SetAttribute('height', $(if ($number -eq 1) { '842' } else { '595.25' }))
    $root.AppendChild($page) | Out-Null
}
$xml.Save((Join-Path $job 'pages.xml'))
$previousCulture = [Threading.Thread]::CurrentThread.CurrentCulture
try {
    [Threading.Thread]::CurrentThread.CurrentCulture = 'fr-FR'
    & (Join-Path $workspace 'src/Resources/render-image-pdf.ps1') -JobDirectory $job
} finally { [Threading.Thread]::CurrentThread.CurrentCulture = $previousCulture }
if ([IO.File]::ReadAllText((Join-Path $job 'result.txt')) -ne 'OK 2') { throw '辅助器未返回成功状态。' }
if ((Get-Item -LiteralPath $output).Length -le 1000) { throw '输出 PDF 过小。' }
[IO.File]::Copy($output, (Join-Path $workspace 'dist/logs/raster-dotnet-result.pdf'), $true)
[IO.File]::Copy($output, (Join-Path $workspace ('dist/logs/raster-dotnet-' + $Dpi + '.pdf')), $true)
Write-Output "PASS: Windows EMF rasterization at $Dpi DPI and shared PDF writer; two page sizes under fr-FR culture."
