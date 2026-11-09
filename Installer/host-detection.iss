// 优先使用可验证的程序路径，避免卸载残留注册表被当作已安装宿主。
function ProgramRegistered(ExeName: String): Boolean;
var
  Roots: array[0..3] of Integer;
  I: Integer;
  Filename: String;
begin
  Roots[0] := HKCU32; Roots[1] := HKLM32;
  Roots[2] := HKCU64; Roots[3] := HKLM64;
  Result := False;
  for I := 0 to 3 do
    if (I < 2) or IsWin64 then
      if RegQueryStringValue(Roots[I], 'Software\Microsoft\Windows\CurrentVersion\App Paths\' + ExeName, '', Filename) then
        if FileExists(RemoveQuotes(Filename)) then Result := True;
end;

function WordInstalled: Boolean;
var Roots: array[0..1] of Integer;
  Versions: array[0..3] of String;
  I, J: Integer;
  Folder: String;
begin
  Result := ProgramRegistered('WINWORD.EXE');
  Roots[0] := HKLM32; Roots[1] := HKLM64;
  Versions[0] := '16.0'; Versions[1] := '15.0'; Versions[2] := '14.0'; Versions[3] := '12.0';
  for I := 0 to 1 do
    if (I = 0) or IsWin64 then
      for J := 0 to 3 do
        if RegQueryStringValue(Roots[I], 'Software\Microsoft\Office\' + Versions[J] + '\Word\InstallRoot', 'Path', Folder) then
          if FileExists(AddBackslash(Folder) + 'WINWORD.EXE') then Result := True;
end;

function WpsInstalled: Boolean;
var Id, Server: String;
begin
  Result := ProgramRegistered('wps.exe');
  if not Result then
    if RegQueryStringValue(HKCR, 'KWPS.Application\CLSID', '', Id) then
      if RegQueryStringValue(HKCR, 'CLSID\' + Id + '\LocalServer32', '', Server) then
        Result := FileExists(RemoveQuotes(Server));
end;
