# AGENTS.md — 公文准式 (gw_mika)

VSTO add-in for Microsoft Word (with WPS compatibility branches) that applies the
Chinese official-document layout standard GB/T 9704—2012. C# WinForms Ribbon,
.NET Framework 4.8, VSTO 4.0, Office PIA 15. UI text and code comments are Chinese;
follow that convention.

Open-source derivative of 小恐龙公文排版助手. Repository (this project):
`https://gitlab.com/Mikachu2333/gw`; upstream original, open-sourced by its author:
`https://github.com/xkonglong/gw`. Both URLs live in one place — `Ribbon1.RepoUrl` /
`Ribbon1.UpstreamUrl` (src\Ribbon1.cs) and `MyAppURL` (Installer\installer.iss). No payment
QR codes and no legacy site URLs anywhere in the product.

Display name is 「公文准式」 everywhere a user sees it (Ribbon tab, About title, installer,
COM add-in FriendlyName). Every identifier that must be ASCII is `gw_mika` (project,
assembly, root namespace, output dll, installer file names, npm package); `gw-mika` is only
used where an underscore is not allowed, which turned out to be nowhere.

This file records how the repository actually works today. Keep it factual and update
it when the architecture, build steps, or domain constants change.

## Repository layout

| Path | Responsibility |
| --- | --- |
| `src\gw_mika.sln` | Single-project solution. |
| `src\gw_mika.csproj` | Old-style VSTO project (ToolsVersion 15.0), `AssemblyName=gw_mika`, `RootNamespace=gw_mika`, `DefineConstants=VSTO40`. |
| `src\Ribbon1.cs` | Shared state, host detection, `Ribbon1_Load/Close`, `ReadSetting`, `FormatFontSize`, `GetDllPath`, `WithUndo`, WPS icon setup. |
| `src\Ribbon1.designer.cs` | Ribbon definition: control creation, properties, `Buttons.Add` order, Click wiring, field declarations. Designer-managed; hand edits must keep all four parts consistent. |
| `src\Ribbon1.Fonts.cs` | Font buttons, `SetFont`, `FontSwitch`, `SetTitle`, font-conversion gallery, font/letter dialog entry. |
| `src\Ribbon1.Styles.cs` | "公文:" style creation, custom-style cleanup, style-refresh button, style key bindings. |
| `src\Ribbon1.Format.cs` | Paragraph/text formatting commands (indent, spacing, quotes, cleanup, line breaks). |
| `src\Ribbon1.Insert.cs` | Insert line, header/footer parts, symbols, page setup dialog, table. |
| `src\Ribbon1.Layout.cs` | Page setup button, first-line-indent button, left-indent reset, header line removal, numbering-to-text. |
| `src\Ribbon1.Shapes.cs` | Red header line, stamp/shape placement, delete header, signature image. |
| `src\Ribbon1.PageNumber.cs` | Official page numbers and footer helpers. |
| `src\Ribbon1.Export.cs` | Save copy as PDF / .doc / PNG / JPG, PDF merge, doc protection. |
| `src\Ribbon1.Security.cs` | Document password, protection toggle, permission checks. |
| `src\Ribbon1.Vba.cs` | VBA script discovery, loading, encoding checks, run history menu. |
| `src\Ribbon1.Speech.cs` | Read-aloud (System.Speech). |
| `src\Ribbon1.Lab.cs` | Debug-only "实验室" buttons (visible only in `DEBUG`). |
| `src\ThisAddIn.cs` | VSTO entry point, Word event subscriptions, `ControlEnable` gate. |
| `src\ThisAddIn.Designer.cs` / `.xml` | Generated host item wiring; regenerate with the VSTO designer, do not hand-edit. |
| `src\frmPaperSetup.*` | Modeless page-setup form (Word 2013+ path). |
| `src\frmFontChangeDialog.*` | Modal "指定字体更改" dialog (letter/digit font replacement). |
| `src\frmSpeakOption.*` | Borderless read-aloud options form; shares the Ribbon speech synthesizer. |
| `src\AboutBox1.*` | Settings UI (page margins, fonts, line spacing, help URLs); saves via `Properties.Settings`. |
| `src\Properties\Settings.Designer.cs` | Generated strongly typed settings. `Settings.cs` adds `ResetNames(...)`. |
| `src\app.config` | Default values for `userSettings` and `applicationSettings`. |
| `src\Resources\` | Icons plus `公文部件.dotx` (copied to output `Always`). |
| `VBA Script\` | 42 example `.vba` scripts, linked into the build as `VBA Script\*.vba`. |
| `tools\make-dev-cert.ps1` | Creates/imports the dev signing certificate and writes `ManifestCertificateThumbprint` into `gw_mika.csproj.user`. |
| `make.bat` | One-shot Release build + installer packaging + JS build (see Packaging below); outputs `dist\*.exe` and `dist\*.zip`. |
| `wps-js\` | WPS JS 加载项（manifest.xml + ribbon.xml + js/ + ui/），vite + `wpsjs` CLI，Linux 版 WPS 只能用这一份产物。 |
| `Installer\installer.iss` | Inno Setup script: machine-wide install, VSTO runtime prerequisite, certificate import, Word/WPS registry registration. |
| `Installer\redist\` | Optional drop folder for a bundled `vstor_redist.exe` (git-ignored; makes the installer offline). |
| `img\` | README screenshots. |

## Build

Prerequisites: Visual Studio with the Office/SharePoint development workload (Office PIA
v15 and the VSTO targets), .NET Framework 4.8 targeting pack, and a manifest-signing
certificate thumbprint in `src\gw_mika.csproj.user` (git-ignored; run
`tools\make-dev-cert.ps1` once per machine).

The PIA reference path comes from `$(OfficePiaDir)`; the default expects
`C:\Program Files (x86)\Microsoft Visual Studio\Shared\Visual Studio Tools for Office\PIA\Office15\`.
A missing PIA fails the `ValidateOfficePiaReferences` target.

Build with Visual Studio's MSBuild (the .NET SDK `dotnet build` does not support VSTO):

```powershell
$ErrorActionPreference = 'Stop'
$vswhere = "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe"
$msbuild = & $vswhere -latest -requires Microsoft.Component.MSBuild -find 'MSBuild\**\Bin\MSBuild.exe' | Select-Object -First 1
& $msbuild src\gw_mika.csproj /p:Configuration=Debug /v:m /nologo
```

On this machine a working MSBuild is
`C:\Program Files\Microsoft Visual Studio\18\Community\MSBuild\Current\Bin\MSBuild.exe`.
Expected result: `gw_mika -> src\bin\Debug\gw_mika.dll`, zero errors and warnings.
The output folder also receives `VBA Script\` and `Resources\公文部件.dotx`.

There are no unit tests. Validation = successful build + manual smoke test in Word
(and WPS when a `IsWps` branch is touched).

### Packaging (make.bat)

`make.bat` in the repo root builds Release, mirrors `src\bin\Release` into
`dist\payload`, compiles `Installer\installer.iss` with Inno Setup 6.3+/7 into
`dist\gw_mika-Setup-<版本>.exe`, then runs `npm install` + `npm run build` in `wps-js\`
and zips `dist\gw_mika-wps-js-<版本>`. Step 8 is skipped (not failed) when npm is missing,
because the Windows C# installer is the primary artifact. It locates MSBuild with vswhere,
runs `tools\make-dev-cert.ps1` when the manifest thumbprint or its certificate is missing,
reads the version from the built `gw_mika.dll` (not from `AssemblyInfo.cs`, which the
VS extension rewrites), and aborts if the `.cer` thumbprint differs from the one that
signed the manifests.

`dist\payload` must stay a complete mirror of `bin\Release` (minus `.pdb`):
`gw_mika.dll.manifest` lists all 42 `VBA Script\*.vba` files and `gw_mika.dll.config`
with hashes, and VSTO refuses to load when a declared file is missing.

The installer is machine-wide (`PrivilegesRequired=admin`, `{autopf}`) and does four
things: requires .NET 4.8 (Release >= 528040), installs the VSTO 4.0 runtime when absent
(from `Installer\redist\vstor_redist.exe` if present, otherwise downloaded from Microsoft
and SHA-256-pinned), registers the add-in, and imports the bundled `gw-codecert.cer` into
LocalMachine Root + TrustedPublisher via `certutil` so Word/WPS stop prompting to trust
the publisher.

Registration is the `file:///...\gw_mika.vsto|vstolocal` manifest under HKCU plus both HKLM
registry views, under the add-in ID `gw_mika.公文准式` (`MyAddinId` in `installer.iss`). That
key name deliberately differs from the official `小恐龙工作室.小恐龙公文排版助手`, so the two
add-ins coexist instead of overwriting each other's `Manifest` value — at the cost of two
Ribbon tabs when both are enabled. One add-in ID across hives merges into a single load, and writing
`LoadBehavior=3` in every hive clears the stale "user disabled it" override that would
otherwise win over HKLM. It also always writes the add-in ID as an empty value under
`HKCU\Software\Kingsoft\Office\WPS\AddinsWL` — without that WPS whitelist entry WPS does not
enumerate the add-in at all (no error, no disabled row), which is what the vendor's own MSI
does too. The whitelist exists only under HKCU, so a machine-wide install still leaves other
users' WPS without the add-in until each of them runs the installer once. Uninstall removes the
keys, the whitelist value, and only the certificate this package recorded as imported.

## Runtime architecture

- `ThisAddIn_Startup` only subscribes Word events; the Ribbon is created lazily by VSTO.
- `Ribbon1_Load` (src\Ribbon1.cs:60) determines the host from the process name
  (`hostProcess`), `Application.Name` (`hostName`), and `Version` (`hostVersion`);
  sets `IsWps` (src\Ribbon1.cs:40) and `IsLegacyHost` (12.x/14.x, non-WPS,
  src\Ribbon1.cs:44); applies WPS icons; initializes the speech synthesizer; fills the
  Chinese-font combo box (only families containing 宋/黑/楷); then calls `ReadSetting`
  and `LoadVBA`.
- Word 2007 (12.x) shows an "unsupported, install v1.0.8.3" warning at load
  (src\Ribbon1.cs:83-87) but keeps running. Word 2010 (14.x) goes through the
  `IsLegacyHost` modal-dialog path for page setup.
- `ReadSetting` (src\Ribbon1.cs:251) rebuilds the ten `Font` fields from
  `Properties.Settings.Default`, disposes the previous owned fonts first, and refreshes
  button SuperTips. Fonts created there are registered with `Track` and disposed in
  `Ribbon1_Close`; fonts returned by the settings provider are never disposed.
- `WithUndo(label, work, suspendScreen)` (src\Ribbon1.cs:323) is the contract for every
  document mutation: it starts/ends one Word custom undo record and restores
  `ScreenUpdating` even when `work` throws. Do not hand-roll
  `StartCustomRecord`/`ScreenUpdating` pairs in new code.
- `ControlEnable(bool)` (src\ThisAddIn.cs:113) is the single gate for protected/read-only
  documents. It is called from `WindowSelectionChange`, `DocumentOpen`,
  `WindowActivate`, `DocumentBeforeClose`, and protected-view activation. Every new
  control that mutates the document must be added there.
- Speech: one `SpeechSynthesizer` shared by the Ribbon and `frmSpeakOption`.
  `SpeakCompleted` fires on a worker thread, so the handler marshals through the
  invisible `speechMarshal` control (handle created on the Ribbon STA thread).
  `Ribbon1_Close` cancels, unsubscribes, then disposes in that order.
- VBA: scripts load from `VBA Script\` next to the DLL (fallback `VBA脚本\`) or from
  `Settings.VBA路径`; `RunVbaFile` adds a module to the active document's VBA project.
  Scripts must be cp936/GBK (see Editing conventions) for `CheckVbaEncoding`; the history menu is rebuilt from
  `VBA历史` entries formatted `label|path`.

## Configuration and persisted state

`src\app.config` holds both sections for `gw_mika.Properties.Settings`:

- `userSettings` (per user, `%LOCALAPPDATA%\...\user.config`): 上边距 37, 下边距 35,
  左边距 28, 右边距 26, 页脚边距 24.7, 行数 22, 字数 28, 行间距 28,
  允许行间距 False, 公文版式 True, and the ten font strings
  (公文标题 `方正小标宋简体, 21.75pt`; 一级标题/版头 `黑体, 15.75pt`;
  二级标题/签发人姓名 `楷体, 15.75pt`; 三级/四级标题/正文 `仿宋, 15.75pt`;
  版记/页码 `仿宋`/`宋体`, 14.25pt; 数字字体/英文字体 `Times New Roman`).
- `applicationSettings`: `DPI` 200 and `VBA路径` only. The three `帮助_*`/`在线帮助`
  URL settings were removed — they were always empty, so every help entry point printed
  "本版本未内置在线帮助地址". Help is now routed in code: `Ribbon1.OnlineHelpUrl`
  picks the WPS JSAPI page when `IsWps` and the Word VBA reference otherwise, and the
  two form "?" buttons open `Ribbon1.RepoUrl`.
- The rename to `gw_mika` changed `AssemblyCompany`/`AssemblyTitle`, so the per-user
  config folder (`%LOCALAPPDATA%\<company>\<product>_<version>\user.config`) moved.
  Together with the missing `Settings.Upgrade()`, an existing 小恐龙 install's margins
  and fonts do not carry into this add-in — it starts on the defaults by design.
- `Settings.ResetNames(names)` resets only the named settings and saves. Never call
  `Settings.Default.Reset()` — it also wipes VBA history and script paths.
- There is no `Settings.Upgrade()` call. Bumping `AssemblyVersion` makes existing
  `user.config` invisible, so users silently fall back to defaults.

## Domain constants and magic values

- Margins (mm): top 37, bottom 35, left 28, right 26; footer distance 24.7.
- Body grid: 22 lines × 28 characters; line spacing 28 pt, exact spacing optional.
- Font sizes: 三号 15.75 pt (body), 二号 21.75 pt (title), 四号 14.25 pt (版记/页码).
- `FormatFontSize` keeps 10.5 pt (五号) as-is and rounds every other size to an integer
  (so 15.75 → 16, 21.75 → 22). This is legacy behavior; changing it affects every
  formatting button.
- First-line indent uses `ParagraphFormat.CharacterUnitFirstLineIndent = 2`, never
  `FirstLineIndent` points, so the indent survives font-size changes.
- Insert-line button: table width 100, row height 28.5 pt, top/bottom borders 1.0 pt,
  horizontal borders 0.75 pt.
- Page-image export rasterizes A4 at 1754 × 1240 px (rotated to 1240 × 1754 for
  landscape). Batch PNG keeps the rendered resolution; batch JPG applies
  `Settings.Default.DPI` (default 200, fallback 150) via `Bitmap.SetResolution`;
  single-page export uses 1754 × 1240 only for PNG option 1 and original pixels
  otherwise.

## Editing conventions

- Chinese UI strings; Chinese comments match the existing code base.
- Preserve each file's current encoding and BOM state. Files are UTF-8; some have a BOM
  and some do not. Editors/scripts that silently drop the BOM rewrite the whole file.
- `.gitattributes` sets `-text` on text files: never enable `text=auto`/`eol=` and never
  normalize line endings repo-wide (history has mixed CRLF/LF by design).
- `*.vba` / `*.bas` are marked binary and must stay **cp936/GBK** with CRLF; VBA
  `AddFromFile` reads the bytes as-is. "GB2312" is what the in-script comments say, but it is
  really cp936: `公文自动排版.vba` and `公文自动排版2026.vba` use `〇`(A9 96) and `﨩`(FE 4F),
  which are outside strict GB2312, so a strict cp20936 round-trip would corrupt them. Any
  validator must therefore use codepage 936, not 20936. All 42 scripts also assume codepage 936
  is the ANSI codepage — 24 of them declare Chinese identifiers, so on a non-zh-CN machine the
  code itself mis-decodes, and `CheckVbaEncoding` cannot detect that.
- Do not add NuGet packages, change the target framework, or restructure the VSTO
  project without explicit approval.
- Commit only when asked. Do not commit `*.user`, `*.pfx`, `*.snk`.

## Change checklist

1. Ribbon change: edit/create controls in `Ribbon1.designer.cs` (or the VS Ribbon
   Designer), then wire the handler in the matching `Ribbon1.*.cs` partial. Verify the
   field declaration, `InitializeComponent` property block, `Buttons.Add` order, and
   `Click +=` all agree.
2. Document-mutating handler: wrap in `WithUndo(...)`, restore `ScreenUpdating` and
   `ActiveWindow.View.SeekView` in `finally`, and add the control to `ControlEnable`.
3. New setting: update `app.config` (both sections as appropriate),
   `Properties\Settings.Designer.cs`, the AboutBox UI, and the `ResetNames` call list.
4. New hard-coded font name: remember fonts may be absent (方正小标宋_GBK, 仿宋_GB2312,
   楷体_GB2312). Word substitutes silently, so provide a fallback or a clear message.
5. Build, then smoke-test: selection vs no selection, empty document, `.doc` source,
   protected document, Word 2016/365 (32- and 64-bit), and WPS if `IsWps` is involved.

## Known pitfalls (verified behavior)

- Styles: deleting a style that is still in use throws. `creatCustomStyle` therefore
  keeps such styles and calls `ApplyStyleSettings()` afterwards, which refreshes all
  seven "公文:" styles from the current settings (including the early-return path when
  they all exist). `LinkToListTemplate` still leaves list templates in the document.
- `FontSwitch` matches only `Font.NameFarEast`, so digits/Latin characters set to the
  same name in `Font.Name` are not converted — that is what "指定字体更改..." is for.
- Exporting a `.doc` copy of a `.doc` source would target the source path; the code now
  falls back to `<name>_副本.doc`. `SaveAs2` does not exist in Word 2007, so
  `SaveAsCompat` calls `SaveAs` when `hostVersion` starts with `12.`.
- The "段前分页" path calls `WordApp.Run("ParaPageBreakBefore")`, a macro that is not
  shipped in this repository; the error dialog says so.
- `frmPaperSetup` is modeless; `btnPaper.Checked` is reset from its `FormClosed` handler.
- Page numbers: centered/right styles write every section whose footer is not linked to
  the previous one (plus first-page footers when enabled); "外侧" skips linked sections.
- `WordApp.Run(...)` can execute a same-named macro defined by an open document, so
  `RunVbaFile` invokes `"<module>.<proc>"` instead of the bare procedure name.
- Fonts may be absent on the target machine (方正小标宋_GBK, 仿宋_GB2312, 楷体_GB2312).
  Word substitutes silently; `FontSwitch` warns via `IsFontInstalled` after replacing.
- The seven style fonts are set through `Font.NameFarEast` only; the Latin font of the
  styles is whatever the base style provides.
