; WPS 专用安装器：当前用户安装，不安装 VSTO，不调整宏安全性。
#ifndef AppVersion
  #define AppVersion "0.0.0"
#endif
#ifndef AppVersion4
  #define AppVersion4 "0.0.0.0"
#endif
[Setup]
AppId={{67AC9F23-493B-498C-A0C3-8177E7390B0E}
AppName=公文准式（WPS）
AppVersion={#AppVersion}
AppPublisher=gw_mika
DefaultDirName={localappdata}\Programs\gw_mika
DisableDirPage=yes
DisableProgramGroupPage=yes
PrivilegesRequired=lowest
OutputDir=..\dist
OutputBaseFilename=gw_mika-WPS-Setup-{#AppVersion}
Compression=lzma2/max
SolidCompression=yes
WizardStyle=modern
SetupLogging=yes
CloseApplications=yes
RestartApplications=no
VersionInfoVersion={#AppVersion4}
InfoAfterFile=安装完成说明.txt

[Languages]
Name: "zh_CN"; MessagesFile: "compiler:Languages\ChineseSimplified.isl"
Name: "en_US"; MessagesFile: "compiler:Default.isl"

[Files]
Source: "..\wps-js\dist\*"; DestDir: "{userappdata}\kingsoft\wps\jsaddons\gw_mika_{#AppVersion}"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "register-wps-js.ps1"; DestDir: "{app}"; Flags: ignoreversion
Source: "register-wps-js.ps1"; Flags: dontcopy

[Code]
function Registration(Action, Script: String): Boolean;
var Code: Integer;
begin
  Result := Exec(ExpandConstant('{sys}\WindowsPowerShell\v1.0\powershell.exe'),
    '-NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "' + Script +
    '" -Action ' + Action + ' -Version {#AppVersion} -MigrateLegacyVsto',
    '', SW_HIDE, ewWaitUntilTerminated, Code) and (Code = 0);
  if not Result then Log('WPS JS 注册操作失败：' + Action + '，退出码 ' + IntToStr(Code));
end;

function PrepareToInstall(var NeedsRestart: Boolean): String;
begin
  Result := '';
  ExtractTemporaryFile('register-wps-js.ps1');
  if not Registration('Check', ExpandConstant('{tmp}\register-wps-js.ps1')) then
    Result := 'WPS 加载项配置无法读取。请检查当前用户的 publish.xml；安装器不会覆盖损坏的配置。';
end;

procedure CurStepChanged(Step: TSetupStep);
begin
  if Step = ssPostInstall then
    if not Registration('Install', ExpandConstant('{app}\register-wps-js.ps1')) then
      RaiseException('WPS JS 注册失败，请查看安装日志。文件已保留，可修复安装后重试。');
end;

function InitializeUninstall: Boolean;
begin
  Result := Registration('Check', ExpandConstant('{app}\register-wps-js.ps1'));
  if not Result then MsgBox('WPS 配置无法读取，请先修复 publish.xml 再卸载，避免留下失效注册。', mbError, MB_OK);
end;

procedure CurUninstallStepChanged(Step: TUninstallStep);
begin
  if Step = usUninstall then
    if not Registration('Uninstall', ExpandConstant('{app}\register-wps-js.ps1')) then
      RaiseException('移除 WPS JS 注册失败。');
end;
