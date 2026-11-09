; Windows 自动分流入口。自身不安装文件；两个子安装器各自负责升级与卸载。
#ifndef AppVersion
  #define AppVersion "0.0.0"
#endif
#ifndef AppVersion4
  #define AppVersion4 "0.0.0.0"
#endif
[Setup]
AppName=公文准式
AppVersion={#AppVersion}
AppPublisher=gw_mika
PrivilegesRequired=lowest
CreateAppDir=no
Uninstallable=no
DisableDirPage=yes
DisableProgramGroupPage=yes
DisableReadyPage=no
OutputDir=..\dist
OutputBaseFilename=gw_mika-Setup-{#AppVersion}
Compression=lzma2/fast
SolidCompression=no
WizardStyle=modern
SetupLogging=yes
VersionInfoVersion={#AppVersion4}

[Languages]
Name: "zh_CN"; MessagesFile: "compiler:Languages\ChineseSimplified.isl"
Name: "en_US"; MessagesFile: "compiler:Default.isl"

[Files]
Source: "..\dist\gw_mika-WPS-Setup-{#AppVersion}.exe"; Flags: dontcopy
Source: "..\dist\gw_mika-Word-Setup-{#AppVersion}.exe"; Flags: dontcopy

[Code]
#include "host-detection.iss"
var
  Hosts: TInputOptionWizardPage;
  WantWord, WantWps: Boolean;
  RestartNeeded: Boolean;

function InitializeSetup: Boolean;
var Report, Data: String;
begin
  WantWord := WordInstalled;
  WantWps := WpsInstalled;
  Report := ExpandConstant('{param:DETECTONLY|}');
  if Report <> '' then
  begin
    // 诊断模式只输出探测结果，不安装或修改用户配置。
    Data := 'word=' + IntToStr(Ord(WantWord)) + #13#10 + 'wps=' + IntToStr(Ord(WantWps)) + #13#10;
    SaveStringToFile(Report, Data, False);
    Result := False;
  end
  else Result := True;
end;

procedure InitializeWizard;
begin
  Hosts := CreateInputOptionPage(wpWelcome, '选择使用的办公软件',
    '已根据本机检测结果选择版本。',
    'WPS 使用 JavaScript 加载项，无需 VBA。Word 使用 VSTO 加载项。两者共存时可同时安装。', False, False);
  Hosts.Add('WPS 文字：安装 JS 版（当前用户）');
  Hosts.Add('Microsoft Word：安装 VSTO 版（需要管理员权限）');
  Hosts.Values[0] := WantWps;
  Hosts.Values[1] := WantWord;
  if not WantWord and not WantWps then
    Hosts.SubCaptionLabel.Caption := '未找到已注册的宿主，请选择实际使用的软件。';
end;

function NextButtonClick(PageId: Integer): Boolean;
begin
  Result := True;
  if PageId = Hosts.ID then
  begin
    WantWps := Hosts.Values[0]; WantWord := Hosts.Values[1];
    Result := WantWps or WantWord;
    if not Result then MsgBox('请选择 WPS 或 Microsoft Word。', mbInformation, MB_OK);
  end;
end;

function PrepareToInstall(var NeedsRestart: Boolean): String;
begin
  WantWps := Hosts.Values[0]; WantWord := Hosts.Values[1];
  Result := '';
  if not WantWps and not WantWord then Result := '没有选择安装目标。';
end;

procedure InstallChild(Name: String; Elevate: Boolean);
var Code: Integer; Path, Arguments: String; Started: Boolean;
begin
  ExtractTemporaryFile(Name);
  Path := ExpandConstant('{tmp}\') + Name;
  Arguments := '/NORESTART /SP-';
  if WizardSilent then Arguments := Arguments + ' /VERYSILENT /SUPPRESSMSGBOXES';
  if Elevate then
    Started := ShellExec('runas', Path, Arguments, '', SW_SHOWNORMAL, ewWaitUntilTerminated, Code)
  else
    Started := Exec(Path, Arguments, '', SW_SHOWNORMAL, ewWaitUntilTerminated, Code);
  if not Started or ((Code <> 0) and (Code <> 3010)) then
    RaiseException('子安装器未完成：' + Name + '，退出码 ' + IntToStr(Code));
  if Code = 3010 then RestartNeeded := True;
end;

procedure CurStepChanged(Step: TSetupStep);
begin
  if Step = ssPostInstall then
  begin
    if WantWord then InstallChild('gw_mika-Word-Setup-{#AppVersion}.exe', True);
    if WantWps then InstallChild('gw_mika-WPS-Setup-{#AppVersion}.exe', False);
  end;
end;

function NeedRestart: Boolean;
begin
  Result := RestartNeeded;
end;
