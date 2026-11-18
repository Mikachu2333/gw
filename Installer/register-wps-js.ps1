# WPS JS 加载项按当前用户注册；不修改宏安全策略，也不覆盖其他加载项。
[CmdletBinding()]
param(
    [ValidateSet('Check', 'CheckInstall', 'Install', 'Uninstall')][string]$Action = 'Check',
    [string]$DataRoot = (Join-Path ([Environment]::GetFolderPath('ApplicationData')) 'kingsoft\wps\jsaddons'),
    [ValidatePattern('^\d+\.\d+\.\d+$')][string]$Version,
    [switch]$MigrateLegacyVsto
)
$ErrorActionPreference = 'Stop'
$DataRoot = [IO.Path]::GetFullPath($DataRoot)
$configPath = Join-Path $DataRoot 'publish.xml'
$statePath = Join-Path $DataRoot '.gw_mika-registry.json'
$addinId = 'gw_mika.公文准式'
$registryPaths = @('Software\Kingsoft\Office\WPS\AddinsWL', 'Software\Kingsoft\Office\WPS\AddinsBL')

function Read-Config {
    $document = New-Object Xml.XmlDocument
    $document.PreserveWhitespace = $true
    $document.XmlResolver = $null
    if (Test-Path -LiteralPath $configPath) {
        $options = New-Object Xml.XmlReaderSettings
        $options.DtdProcessing = [Xml.DtdProcessing]::Prohibit
        $options.XmlResolver = $null
        $reader = [Xml.XmlReader]::Create($configPath, $options)
        try { $document.Load($reader) } finally { $reader.Dispose() }
        if ($document.DocumentElement.Name -ne 'jsplugins' -or $document.DocumentElement.NamespaceURI) {
            throw 'publish.xml 的根元素不是 jsplugins，已保留原文件。'
        }
    } else { $document.LoadXml('<jsplugins />') }
    if ($document.FirstChild -is [Xml.XmlDeclaration]) { $document.FirstChild.Encoding = 'utf-8' }
    return ,$document
}

function Write-Atomic([string]$Path, [string]$Content) {
    $temporary = $Path + '.' + [Guid]::NewGuid().ToString('N') + '.tmp'
    $backup = $temporary + '.bak'
    try {
        [IO.File]::WriteAllText($temporary, $Content, (New-Object Text.UTF8Encoding($false)))
        if ([IO.File]::Exists($Path)) { [IO.File]::Replace($temporary, $Path, $backup) }
        else { [IO.File]::Move($temporary, $Path) }
    } finally {
        if ([IO.File]::Exists($temporary)) { [IO.File]::Delete($temporary) }
        if ([IO.File]::Exists($backup)) { [IO.File]::Delete($backup) }
    }
}

function Get-LegacyRegistry {
    $records = @()
    foreach ($path in $registryPaths) {
        $key = [Microsoft.Win32.Registry]::CurrentUser.OpenSubKey($path)
        try {
            $exists = $key -and ($key.GetValueNames() -contains $addinId)
            $records += [pscustomobject]@{
                Path = $path; Exists = [bool]$exists
                Kind = $(if ($exists) { $key.GetValueKind($addinId).ToString() } else { 'String' })
                Value = $(if ($exists) { ,$key.GetValue($addinId, $null, [Microsoft.Win32.RegistryValueOptions]::DoNotExpandEnvironmentNames) } else { $null })
            }
        } finally { if ($key) { $key.Dispose() } }
    }
    return $records
}

function Restore-LegacyRegistry($Records) {
    foreach ($record in $Records) {
        if ($registryPaths -notcontains $record.Path) { throw '迁移记录含有未知注册表路径。' }
        $key = [Microsoft.Win32.Registry]::CurrentUser.CreateSubKey($record.Path)
        try {
            if ($record.Exists) {
                $kind = [Microsoft.Win32.RegistryValueKind]$record.Kind
                $value = switch ($kind) {
                    'Binary' { ,([byte[]]$record.Value) }
                    'MultiString' { ,([string[]]$record.Value) }
                    'DWord' { [int]$record.Value }
                    'QWord' { [long]$record.Value }
                    default { $record.Value }
                }
                $key.SetValue($addinId, $value, $kind)
            } else { $key.DeleteValue($addinId, $false) }
        } finally { $key.Dispose() }
    }
}

try {
    if ($Action -in 'Check','CheckInstall') {
        $null = Read-Config
        if ($Action -eq 'CheckInstall') {
            if (-not $Version) { throw '需要安装版本号。' }
            $target = Join-Path $DataRoot ('gw_mika_' + $Version)
            if (Test-Path -LiteralPath $target) {
                $marker = Get-Content -Raw -LiteralPath (Join-Path $target 'install.json') -Encoding UTF8 | ConvertFrom-Json
                if ($marker.id -cne 'gw_mika' -or $marker.version -cne $Version) { throw '现有目录不属于此版本，停止安装。' }
            }
        }
        Write-Output 'WPS JS 注册配置可用。'
        exit 0
    }
    [IO.Directory]::CreateDirectory($DataRoot) | Out-Null
    # 两个安装进程不能同时读取旧配置并互相覆盖。
    $lock = [IO.File]::Open((Join-Path $DataRoot '.gw_mika.lock'), 'OpenOrCreate', 'ReadWrite', 'None')
    try {
        $document = Read-Config
        $configExists = [IO.File]::Exists($configPath)
        $state = if (Test-Path -LiteralPath $statePath) {
            Get-Content -Raw -LiteralPath $statePath -Encoding UTF8 | ConvertFrom-Json
        } else { $null }
        if ([IO.File]::Exists($statePath)) {
            if ($state.Id -cne 'gw_mika' -or @($state.Registry).Count -ne $registryPaths.Count) { throw '迁移记录不完整。' }
            foreach ($path in $registryPaths) {
                $records = @($state.Registry | Where-Object Path -eq $path)
                if ($records.Count -ne 1 -or $records[0].Exists -isnot [bool]) { throw '迁移记录缺少注册表项。' }
            }
        }

        foreach ($node in @($document.DocumentElement.SelectNodes('jsplugin'))) {
            if ($node.GetAttribute('type') -ceq 'wps' -and
                @('gw_mika', 'gw_mika-wps-js') -ccontains $node.GetAttribute('name')) {
                $null = $node.ParentNode.RemoveChild($node)
            }
        }
        if ($Action -eq 'Install') {
            if (-not $Version) { throw '安装时必须提供三段版本号。' }
            $folder = 'gw_mika_' + $Version
            $payload = Join-Path $DataRoot $folder
            foreach ($file in @('main.js', 'ribbon.xml', 'index.html', 'install.json','js/ribbon.js')) {
                if (-not (Test-Path -LiteralPath (Join-Path $payload $file) -PathType Leaf)) { throw "缺少加载项文件：$file" }
            }
            $metadata = Get-Content -Raw -LiteralPath (Join-Path $payload 'install.json') -Encoding UTF8 | ConvertFrom-Json
            if ($metadata.id -ne 'gw_mika' -or $metadata.version -ne $Version) { throw 'JS 载荷标识或版本不一致。' }
            $node = $document.CreateElement('jsplugin')
            foreach ($pair in @{name='gw_mika'; type='wps'; url=$folder; version=$Version; enable='enable_dev'; install='null'; customDomain=''}.GetEnumerator()) {
                $node.SetAttribute($pair.Key, $pair.Value)
            }
            $null = $document.DocumentElement.AppendChild($node)
            $beforeMigration = if ($MigrateLegacyVsto) { @(Get-LegacyRegistry) }
            $createdState = $MigrateLegacyVsto -and -not $state
            if ($createdState) {
                $state = [pscustomobject]@{ Id='gw_mika'; Registry=$beforeMigration }
                Write-Atomic $statePath ($state | ConvertTo-Json -Depth 6)
            }
            try {
                if ($MigrateLegacyVsto) {
                    $key = [Microsoft.Win32.Registry]::CurrentUser.CreateSubKey($registryPaths[0])
                    try { $key.DeleteValue($addinId, $false) } finally { $key.Dispose() }
                    $key = [Microsoft.Win32.Registry]::CurrentUser.CreateSubKey($registryPaths[1])
                    try { $key.SetValue($addinId, '', [Microsoft.Win32.RegistryValueKind]::String) } finally { $key.Dispose() }
                }
                Write-Atomic $configPath $document.OuterXml
            } catch {
                if ($MigrateLegacyVsto) { Restore-LegacyRegistry $beforeMigration }
                if ($createdState) { [IO.File]::Delete($statePath) }
                throw
            }
        } else {
            $beforeRestore = if ($state) { @(Get-LegacyRegistry) }
            try {
                if ($state) { Restore-LegacyRegistry $state.Registry }
                if ($configExists) { Write-Atomic $configPath $document.OuterXml }
            } catch {
                if ($state) { Restore-LegacyRegistry $beforeRestore }
                throw
            }
            if ([IO.File]::Exists($statePath)) { [IO.File]::Delete($statePath) }
        }
        Write-Output ('WPS JS ' + $Action + ' 完成。请完全退出并重新打开 WPS。')
    } finally { $lock.Dispose() }
} catch {
    Write-Error $_
    exit 1
}
