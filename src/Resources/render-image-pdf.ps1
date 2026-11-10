# VBA 的整页 EMF 渲染辅助器；由安装包携带，不下载或调用外部转换服务。
[CmdletBinding()]
param([Parameter(Mandatory=$true)][string]$JobDirectory)
$ErrorActionPreference = 'Stop'
$jobRoot = [IO.Path]::GetFullPath($JobDirectory)
$jobFile = Join-Path $jobRoot 'pages.xml'
$statusFile = Join-Path $jobRoot 'result.txt'
$temporary = $null
try {
    $settings = New-Object Xml.XmlReaderSettings
    $settings.DtdProcessing = [Xml.DtdProcessing]::Prohibit
    $settings.XmlResolver = $null
    $reader = [Xml.XmlReader]::Create($jobFile, $settings)
    try { $job = New-Object Xml.XmlDocument; $job.XmlResolver = $null; $job.Load($reader) }
    finally { $reader.Dispose() }
    $destination = [IO.Path]::GetFullPath([string]$job.job.output)
    if ([IO.File]::Exists($destination)) { throw '输出文件已经存在，请选择其他文件名。' }
    $dpi = [int]$job.job.dpi
    if ($dpi -lt 72 -or $dpi -gt 600) { throw 'DPI 必须在 72–600 之间。' }
    Add-Type -AssemblyName System.Drawing
    Add-Type -Path (Join-Path $PSScriptRoot 'ImagePdfWriter.cs')
    $temporary = $destination + '.' + [Guid]::NewGuid().ToString('N') + '.tmp'
    $writer = New-Object gw_mika.ImagePdfWriter($temporary)
    $count = 0
    try {
        foreach ($page in $job.job.page) {
            $number = [int]$page.number
            if ($number -ne $count + 1) { throw '页面序号不连续。' }
            $width = [double]::Parse($page.width, [Globalization.CultureInfo]::InvariantCulture)
            $height = [double]::Parse($page.height, [Globalization.CultureInfo]::InvariantCulture)
            $pixelsWide = [int][Math]::Ceiling($width * $dpi / 72)
            $pixelsHigh = [int][Math]::Ceiling($height * $dpi / 72)
            if ($pixelsWide -le 0 -or $pixelsHigh -le 0 -or ([long]$pixelsWide * $pixelsHigh) -gt 40000000) { throw '页面尺寸过大。' }
            $image = [Drawing.Image]::FromFile((Join-Path $jobRoot ($number.ToString() + '.emf')))
            try {
                $bitmap = New-Object Drawing.Bitmap($pixelsWide, $pixelsHigh, ([Drawing.Imaging.PixelFormat]::Format24bppRgb))
                try {
                    $bitmap.SetResolution($dpi, $dpi)
                    $graphics = [Drawing.Graphics]::FromImage($bitmap)
                    try { $graphics.Clear([Drawing.Color]::White); $graphics.DrawImage($image, 0, 0, $pixelsWide, $pixelsHigh) }
                    finally { $graphics.Dispose() }
                    $buffer = New-Object IO.MemoryStream
                    try {
                        $bitmap.Save($buffer, [Drawing.Imaging.ImageFormat]::Jpeg)
                        $writer.AddPage($buffer.ToArray(), $pixelsWide, $pixelsHigh, $width, $height)
                    } finally { $buffer.Dispose() }
                } finally { $bitmap.Dispose() }
            } finally { $image.Dispose() }
            $count++
        }
        $writer.Complete()
    } finally { $writer.Dispose() }
    [IO.File]::Move($temporary, $destination)
    [IO.File]::WriteAllText($statusFile, ('OK ' + $count), [Text.Encoding]::Unicode)
} catch {
    [IO.File]::WriteAllText($statusFile, $_.ToString(), [Text.Encoding]::Unicode)
    if ($temporary -and [IO.File]::Exists($temporary)) { [IO.File]::Delete($temporary) }
    exit 1
}
