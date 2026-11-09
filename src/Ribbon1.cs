using System;
using System.Drawing;
using System.Windows.Forms;
using MSWord = Microsoft.Office.Interop.Word;
using MSOffice = Microsoft.Office.Core;
using Microsoft.Office.Tools.Ribbon;
using System.Diagnostics;
using System.IO;
using System.Collections.Generic;

namespace gw_mika
{
    public partial class Ribbon1
    {
        // ============ 共享字段 ============
        internal MSWord.Application WordApp;                 // Word Application
        internal System.Speech.Synthesis.SpeechSynthesizer sp; // 语音模块
        internal frmPaperSetup fp;                           // 页面设置窗体
        internal frmSpeakOption speakOption;                  // 朗读选项窗体
        // 语音合成器的事件在工作线程回调，而功能区对象与 Word COM 只允许宿主 STA 线程访问。
        // 这个不可见的 Control 只当作封送目标，句柄在 Ribbon1_Load 的 STA 线程上创建。
        private readonly Control speechMarshal = new Control();
        internal string hostProcess = "";                    // 宿主进程名：WINWORD / wps
        internal string hostName = "";                       // Application.Name：Microsoft Word / WPS 文字
        internal string hostVersion = "";                    // Application.Version：12.0=2007, 14.0=2010, 16.0=2016/365

        // 字体变量
        internal Font iniTitle;
        internal Font iniTitle1;
        internal Font iniTitle2;
        internal Font iniTitle3;
        internal Font iniTitle4;
        internal Font iniNormal;
        internal Font iniHead;
        internal Font iniName;
        internal Font iniFoot;
        internal Font iniPageNumber;

        // WPS 的对象模型会把 Application.Name/Version 伪装成 Word 以兼容插件，
        // 因此以宿主进程名为准，Name 作为兜底。
        internal bool IsWps => hostProcess.IndexOf("wps", StringComparison.OrdinalIgnoreCase) >= 0
                            || hostName.IndexOf("WPS", StringComparison.OrdinalIgnoreCase) >= 0;

        /// <summary>Word 2007(12.x) 或 2010(14.x)：功能区与窗体生命周期处理方式不同</summary>
        internal bool IsLegacyHost => !IsWps
            && (hostVersion.StartsWith("12.") || hostVersion.StartsWith("14."));

        // FormatFontSize 每次都新建 Font，而 GDI+ Font 持有 GDI 字体句柄。
        // 这里只登记"由本类创建"的实例用于释放：Properties.Settings.Default 返回的 Font
        // 归设置对象所有，绝不能由我们 Dispose。
        private readonly System.Collections.Generic.List<Font> ownedFonts
            = new System.Collections.Generic.List<Font>();

        private Font Track(Font font)
        {
            if (font != null) ownedFonts.Add(font);
            return font;
        }

        // ============ 项目地址与在线帮助 ============
        // 关于窗体、各表单的"帮助"按钮和安装包共用这几个常量，避免同一个链接抄七份、改一处漏六处。
        internal const string RepoUrl = "https://gitlab.com/Mikachu2333/gw";
        internal const string UpstreamUrl = "https://github.com/xkonglong/gw";

        private const string HelpUrlWps =
            "https://open.wps.cn/documents/app-integration-dev/wps365/client/wpsoffice/jsapi/go-to-js-from-vb";
        private const string HelpUrlWord =
            "https://learn.microsoft.com/en-us/office/vba/api/overview/word";

        /// <summary>在线帮助按宿主分流：WPS 走 JS 加载项文档，Word 走 VBA 文档。</summary>
        internal string OnlineHelpUrl => IsWps ? HelpUrlWps : HelpUrlWord;

        /// <summary>用系统默认浏览器打开链接。打不开时把地址原样留给用户，别只报一句"出错了"。</summary>
        internal static void OpenLink(string url, string caption)
        {
            if (string.IsNullOrWhiteSpace(url)) return;
            try
            {
                Process.Start(url);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n请手动用浏览器访问：\r\n" + url,
                    caption, MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        // ============ 功能区载入/关闭 ============
        private void Ribbon1_Load(object sender, RibbonUIEventArgs e)
        {
#if DEBUG
            button2.Visible = true;
            button3.Visible = true;
            Debug.WriteLine("运行在调试模式");
#else
            button2.Visible = false;
            button3.Visible = false;
#endif
            try
            {
                btnAbout.Description = "关于「公文准式」";

                // 宿主信息必须取自宿主本身。原先用 WinForms 的 Application.ProductName，
                // 它取的是本加载项程序集的 AssemblyProduct（"公文准式"），因此 IsWps 恒为
                // false，所有 WPS 适配分支（图标、页码、对话框、错误提示）从不执行。
                hostProcess = Process.GetCurrentProcess().ProcessName ?? "";
                MSWord.Application host = Globals.ThisAddIn.Application;
                hostName = host.Name ?? "";
                hostVersion = host.Version ?? "";
                Debug.WriteLine($"宿主：{hostProcess} / {hostName} {hostVersion}，IsWps={IsWps}");

                if (IsLegacyHost && hostVersion.StartsWith("12."))
                {
                    MessageBox.Show("「公文准式」不再支持 MS Office 2007 \r\n\t 请安装旧版插件(v1.0.8.3 版本),或者升级您的 Office 版本! ",
                        "公文准式", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }

                if (IsWps)
                {
                    ApplyWpsImages();
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Ribbon1_Load 外观设置: " + ex.Message);
            }

            // 语音初始化
            try
            {
                _ = speechMarshal.Handle;   // 在 STA 线程上建立句柄，供语音回调封送回本线程
                sp = new System.Speech.Synthesis.SpeechSynthesizer();
                sp.SpeakCompleted += Sp_SpeakCompleted;
            }
            catch (Exception ex)
            {
                Debug.WriteLine("语音模块初始化失败: " + ex.Message);
                btnSpeak.Enabled = false;
                btnSpeak.ScreenTip = "操作系统语音模块加载失败，该功能无法使用！";
            }

            // 中文字体下拉
            try
            {
                cobFonts.Items.Clear();
                using (var ifc = new System.Drawing.Text.InstalledFontCollection())
                {
                    foreach (FontFamily ff in ifc.Families)
                    {
                        if (ff.Name.Contains("宋") || ff.Name.Contains("黑") || ff.Name.Contains("楷"))
                        {
                            var rItem = Factory.CreateRibbonDropDownItem();
                            rItem.Label = ff.Name;
                            cobFonts.Items.Add(rItem);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source,
                    "读取字体列表时出错", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }

            // 初始化标题序号菜单和 Word 事件
            string[] index = { "0", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十",
                               "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十" };
            try
            {
                WordApp = Globals.ThisAddIn.Application;
                WordApp.WindowSelectionChange += WordApp_WindowSelectionChange;

                mnuTitle1.Items.Clear();
                mnuTitle2.Items.Clear();
                mnuTitle3.Items.Clear();
                mnuTitle4.Items.Clear();

                for (int i = 1; i < 21; i++)
                {
                    var mnuTitle1_item = this.Factory.CreateRibbonButton();
                    var mnuTitle2_item = this.Factory.CreateRibbonButton();
                    var mnuTitle3_item = this.Factory.CreateRibbonButton();
                    var mnuTitle4_item = this.Factory.CreateRibbonButton();

                    mnuTitle1_item.Label = "标题" + index[i] + "、";
                    mnuTitle2_item.Label = "标题（" + index[i] + "）";
                    mnuTitle3_item.Label = "标题" + i + ".";
                    mnuTitle4_item.Label = "标题（" + i + "）";

                    mnuTitle1_item.ShowImage = false;
                    mnuTitle2_item.ShowImage = false;
                    mnuTitle3_item.ShowImage = false;
                    mnuTitle4_item.ShowImage = false;

                    mnuTitle1_item.Tag = i;
                    mnuTitle2_item.Tag = i;
                    mnuTitle3_item.Tag = i;
                    mnuTitle4_item.Tag = i;

                    mnuTitle1_item.Click += MnuTitle1_item_Click;
                    mnuTitle2_item.Click += MnuTitle2_item_Click;
                    mnuTitle3_item.Click += MnuTitle3_item_Click;
                    mnuTitle4_item.Click += MnuTitle4_item_Click;

                    mnuTitle1.Items.Add(mnuTitle1_item);
                    mnuTitle2.Items.Add(mnuTitle2_item);
                    mnuTitle3.Items.Add(mnuTitle3_item);
                    mnuTitle4.Items.Add(mnuTitle4_item);
                }

                btnInsertSignPic.SuperTip = btnInsertSignPicLink.SuperTip;
                btnInsertSignPic.Tag = "Link";

                if (WordApp.Documents.Count < 1) Globals.ThisAddIn.ControlEnable(false);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source,
                    "「公文准式」载入时出错", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }

            // 预设脚本菜单在构造函数里静态预填，功能区加载后不能再 Clear/Add；
            // 历史脚本菜单由 ReadSetting 从设置重建。
            try
            {
                ReadSetting();
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Ribbon1_Load 读取设置: " + ex.Message);
            }
        }

        private void Ribbon1_Close(object sender, EventArgs e)
        {
            try
            {
                try { if (WordApp != null) WordApp.WindowSelectionChange -= WordApp_WindowSelectionChange; } catch { }

                // 朗读选项窗体共用 sp：先关窗体让它解绑回调，再释放合成器
                if (speakOption != null) { if (!speakOption.IsDisposed) speakOption.Close(); speakOption = null; }

                if (sp != null)
                {
                    // 先停掉正在朗读的任务、再解绑事件，最后释放：
                    // 反过来做会让 SpeakCompleted 在合成器已销毁之后回调到已失效的功能区对象上
                    try { sp.SpeakAsyncCancelAll(); }
                    catch (Exception ex) { Debug.WriteLine("停止朗读失败: " + ex.Message); }
                    try { sp.SpeakCompleted -= Sp_SpeakCompleted; }
                    catch (Exception ex) { Debug.WriteLine("解绑朗读事件失败: " + ex.Message); }
                    sp.Dispose();
                    sp = null;
                }
                if (fp != null) { if (!fp.IsDisposed) fp.Dispose(); fp = null; }
                // 公文部件模板是会话级加载项：不摘掉的话 dotx 一直被占用，
                // 插件更新/卸载时删不动这个文件。
                try { UnloadDotTemplate(); }
                catch (Exception ex) { Debug.WriteLine("卸载公文部件模板失败: " + ex.Message); }
                foreach (Font f in ownedFonts)
                {
                    try { f.Dispose(); } catch { }
                }
                ownedFonts.Clear();
                if (!speechMarshal.IsDisposed) speechMarshal.Dispose();
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Ribbon1_Close: " + ex.Message);
            }
        }

        private void WordApp_WindowSelectionChange(MSWord.Selection Sel)
        {
            try
            {
                if (Sel == null) return;

                btnUnderDot.Checked = Sel.Range.Font.EmphasisMark == MSWord.WdEmphasisMark.wdEmphasisMarkUnderSolidCircle;
                btnHideFont.Checked = Sel.Range.Font.Hidden != 0;

                // 必须同时看保护状态：这个处理器每次移动光标都会跑，只看有没有选区的话，
                // 受保护文档里 ControlEnable(false) 刚禁用的这两个改动型按钮会被立刻重新点亮。
                bool editable = !Sel.Document.ReadOnly
                    && Sel.Document.ProtectionType == MSWord.WdProtectionType.wdNoProtection;
                bool hasSelection = editable && Sel.Type == MSWord.WdSelectionType.wdSelectionNormal && Sel.Text.Length > 1;
                btnFormatDelSelectSpace.Enabled = hasSelection;
                btnFormatDelSelectEmptyLine.Enabled = hasSelection;
            }
            catch (Exception ex)
            {
                Debug.WriteLine("WordApp_WindowSelectionChange: " + ex.Message);
            }
        }

        // ============ 字体配置 ============
        private void ReadSetting()
        {
            // FormatFontSize 每次都新建 Font。原先直接覆盖字段、旧实例无人释放，
            // 于是每次"关于→确定"都泄漏 10 个 GDI 字体句柄（长会话下整进程绘制开始出错）
            foreach (Font old in ownedFonts)
            {
                try { old.Dispose(); } catch { }
            }
            ownedFonts.Clear();

            iniTitle = Track(FormatFontSize(Properties.Settings.Default.公文标题));
            iniTitle1 = Track(FormatFontSize(Properties.Settings.Default.一级标题));
            iniTitle2 = Track(FormatFontSize(Properties.Settings.Default.二级标题));
            iniTitle3 = Track(FormatFontSize(Properties.Settings.Default.三级标题));
            iniTitle4 = Track(FormatFontSize(Properties.Settings.Default.四级标题));
            iniNormal = Track(FormatFontSize(Properties.Settings.Default.正文));
            iniHead = Track(FormatFontSize(Properties.Settings.Default.版头));
            iniName = Track(FormatFontSize(Properties.Settings.Default.签发人姓名));
            iniFoot = Track(FormatFontSize(Properties.Settings.Default.版记));
            iniPageNumber = Track(FormatFontSize(Properties.Settings.Default.页码));

            btnTitleHei.SuperTip = "设置公文大标题,规范为二号,小标宋.\r\n\r\n当前字体为:" + (iniTitle?.Name ?? "未设置");
            btnNormal.SuperTip = "设置所选文字为正文格式,规范为三号,仿宋,首行缩进2字符.\r\n\r\n当前字体为:" + (iniNormal?.Name ?? "未设置");
            btnHead.ScreenTip = "设置所选文字为: " + (iniHead?.Name ?? "?") + " " + (iniHead?.Size ?? 0) + "pt";
            btnName.ScreenTip = "设置所选文字为: " + (iniName?.Name ?? "?") + " " + (iniName?.Size ?? 0) + "pt";
            btnFoot.ScreenTip = "设置所选文字为: " + (iniFoot?.Name ?? "?") + " " + (iniFoot?.Size ?? 0) + "pt";

            RebuildVbaHistoryMenu();
        }

        private Font FormatFontSize(Font font)
        {
            if (font == null) return null;
            string fontName = font.Name;
            float sfs = font.SizeInPoints;
            if (Math.Abs(sfs - 10.5f) < 0.01f)
                return new Font(fontName, 10.5f, font.Style);
            sfs = (float)Math.Round(sfs);
            return new Font(fontName, sfs, font.Style);
        }

        /// <summary>
        /// 返回加载项文件及其附带资源可能所在的目录。
        ///
        /// .NET Framework 影子复制时 Location 指向缓存，CodeBase 保留原始位置。
        /// 模板和预设脚本按资源是否存在选择目录，不能只用 DLL 的缓存位置。
        /// </summary>
        private IEnumerable<string> GetDllDirectories()
        {
            var result = new List<string>();
            var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

            Action<string> add = path =>
            {
                if (string.IsNullOrWhiteSpace(path)) return;
                try
                {
                    string full = Path.GetFullPath(path);
                    if (seen.Add(full)) result.Add(full);
                }
                catch (Exception ex) { Debug.WriteLine("解析加载项目录失败: " + ex.Message); }
            };

            var assembly = System.Reflection.Assembly.GetExecutingAssembly();
            try
            {
                string codeBase = assembly.CodeBase;
                Uri codeBaseUri;
                if (!string.IsNullOrWhiteSpace(codeBase)
                    && Uri.TryCreate(codeBase, UriKind.Absolute, out codeBaseUri)
                    && codeBaseUri.IsFile)
                {
                    add(Path.GetDirectoryName(codeBaseUri.LocalPath));
                }
            }
            catch (Exception ex) { Debug.WriteLine("解析程序集 CodeBase 失败: " + ex.Message); }

            try { add(Path.GetDirectoryName(assembly.Location)); }
            catch (Exception ex) { Debug.WriteLine("解析程序集 Location 失败: " + ex.Message); }

            // 安装器会把真实安装目录写在这里。它能覆盖 WPS 影子复制且程序集属性
            // 被兼容层改写的情况；读取失败时不影响 Word 侧正常工作。
            foreach (var view in new[] { Microsoft.Win32.RegistryView.Registry64, Microsoft.Win32.RegistryView.Registry32 })
            {
                try
                {
                    // 32 位 WPS 也要能读取 64 位安装器写入的目录。
                    using (var root = Microsoft.Win32.RegistryKey.OpenBaseKey(Microsoft.Win32.RegistryHive.LocalMachine, view))
                    using (var key = root.OpenSubKey(@"Software\gw_mika\公文准式"))
                    {
                        add(key?.GetValue("InstallPath") as string);
                    }
                }
                catch (Exception ex) { Debug.WriteLine("读取加载项安装目录失败: " + ex.Message); }
            }

            return result;
        }

        /// <summary>按候选安装目录查找随插件发布的文件。</summary>
        internal string FindInstalledFile(string relativePath)
        {
            if (string.IsNullOrWhiteSpace(relativePath)) return null;
            foreach (string directory in GetDllDirectories())
            {
                string file = Path.Combine(directory, relativePath);
                if (File.Exists(file)) return file;
            }
            return null;
        }

        /// <summary>
        /// 在一条自定义撤销记录中执行操作，并保证撤销记录一定闭合、ScreenUpdating 一定恢复。
        /// 原写法把 StartCustomRecord 放在 try 之外、EndCustomRecord 放在 try 之内：
        /// 中途抛异常时撤销记录永不闭合，之后用户的每一次编辑都被并进这条记录，
        /// Ctrl+Z 会一次回退掉大片无关改动；ScreenUpdating 忘了恢复则 Word 看起来像卡死。
        /// </summary>
        /// <param name="label">显示在撤销栈上的操作名</param>
        /// <param name="work">实际改动文档的动作</param>
        /// <param name="suspendScreen">执行期间是否关闭屏幕刷新</param>
        internal void WithUndo(string label, Action work, bool suspendScreen = false)
        {
            MSWord.UndoRecord undo = WordApp.UndoRecord;
            undo.StartCustomRecord(label);
            try
            {
                if (suspendScreen) WordApp.ScreenUpdating = false;
                work();
            }
            finally
            {
                if (suspendScreen)
                {
                    try { WordApp.ScreenUpdating = true; }
                    catch (Exception ex) { Debug.WriteLine("恢复 ScreenUpdating 失败: " + ex.Message); }
                }
                try { undo.EndCustomRecord(); }
                catch (Exception ex) { Debug.WriteLine("EndCustomRecord 失败: " + label + " — " + ex.Message); }
            }
        }

        // ============ 关于组 ============
        private void btnAbout_Click(object sender, RibbonControlEventArgs e)
        {
            using (var about = new AboutBox1())
            {
                if (about.ShowDialog() == DialogResult.OK) ReadSetting();
            }
        }

        private void btnAdvancedSettings_Click(object sender, RibbonControlEventArgs e)
        {
            using (var about = new AboutBox1())
            {
                about.ShowAdvancedSettings();
                about.ShowDialog();
                if (about.SettingsChanged) ReadSetting();
            }
        }

        private void btnHelp_Click(object sender, RibbonControlEventArgs e)
        {
            OpenLink(OnlineHelpUrl, "在线帮助");
        }

        // ============ 功能区角标 ============
        private void group1_DialogLauncherClick(object sender, RibbonControlEventArgs e)
        {
            try { WordApp.Dialogs[MSWord.WdWordDialog.wdDialogFilePageSetup].Show(); }
            catch (Exception ex) { MessageBox.Show(ex.Message); }
        }

        private void group2_DialogLauncherClick(object sender, RibbonControlEventArgs e)
        {
            try { WordApp.Dialogs[MSWord.WdWordDialog.wdDialogFormatParagraph].Show(); }
            catch (Exception ex) { MessageBox.Show(ex.Message); }
        }

        private void group3_DialogLauncherClick(object sender, RibbonControlEventArgs e)
        {
            try { WordApp.Dialogs[MSWord.WdWordDialog.wdDialogFormatFont].Show(); }
            catch (Exception ex) { MessageBox.Show(ex.Message); }
        }

        // ============ WPS 图标适配（从原 Ribbon1_Load 中抽出） ============
        private void ApplyWpsImages()
        {
            mnuTitle1.OfficeImageId = "_1";

            btnInsertSignPic.Image = Properties.Resources.StampTool;

            btnPaper.OfficeImageId = "PrintPreviewMargins";
            btnInsert2.OfficeImageId = "ParagraphIndent2Spaces";
            btnLeft.OfficeImageId = "DecreaseIndent";
            glyFormat.OfficeImageId = "SmartRearrange";
            btnNormal.OfficeImageId = "CellAlignment_6";
            btnTitleHei.Image = null;
            btnTitleHei.OfficeImageId = "CellAlignment_1";
            btnNum2Txt.OfficeImageId = "Numbering";
            glyFont.OfficeImageId = "ReplaceFont";
            btnFontChangeDialog.OfficeImageId = "ReplaceFont";
            btnHead.OfficeImageId = "BookProtection";
            btnName.OfficeImageId = "CellAlignment_2";
            btnFoot.OfficeImageId = "CellAlignment_7";
            btnStyle.OfficeImageId = "StyleFormat";
            btnStyleR.OfficeImageId = "StyleShapeTool";
            mnuInsertGWObject.Image = Properties.Resources.OpenOfficialDocumentbubbleImage;
            btnFootSingle.OfficeImageId = "AlignBottom";
            btnFootDouble.OfficeImageId = "AlignBottom";
            btnDate.OfficeImageId = "InsertDateTime";
            btnInsertPaper.OfficeImageId = "InsertHorizonBlankPage";
            glyFoot.OfficeImageId = "PageNumber";
            glySymbol.OfficeImageId = "InsertSymbol";
            btnNumberOnLocation.OfficeImageId = "PageNumber";
            btnInsertSignPicSave.OfficeImageId = "ImportDataSave";
            btnProtectDoc.OfficeImageId = "idocprotect";
            glyPassword.OfficeImageId = "ProtectEyes";
            btnClearOpenPW.OfficeImageId = "PasswordEncryption";
            btnClearProtectPW.OfficeImageId = "Lock";
            btnSpeak.OfficeImageId = "InsertSound";
            btnSpeakOption.OfficeImageId = "Setting_p";
            glyBak.Items[0].OfficeImageId = "ExportToPDF";
            glyBak.Items[1].OfficeImageId = "wpp2doc";
            glyBak.Items[2].OfficeImageId = "exporttopicture32";
            glyBak.Items[3].OfficeImageId = "exporttopicture32";
            btnSaveAsPicAt.OfficeImageId = "ChangePicture";
            mnuSelect.OfficeImageId = "SelectObjects";
            btnSelectSharp.OfficeImageId = "SelectAll";
            btnSelectTables.OfficeImageId = "SelectTable";
            btnSelectObject.OfficeImageId = "SelectObjects";
            mnuConvert.OfficeImageId = "WrappingTopandBottom";
            mnuInLineSharp.OfficeImageId = "WrapText";
            btnSharp2OnText.OfficeImageId = "WrappingInFrontofText";
            btnSharp2Top.OfficeImageId = "WrappingInFrontofText";
            btnSharp2Wrapping.OfficeImageId = "WrappingSquare";
            btnSharp2TopBonttom.OfficeImageId = "WrappingTopandBottom";
            btnAI.OfficeImageId = "splitwindow";
            btnVBA.OfficeImageId = "SlideShow";
            btnClearVBA.OfficeImageId = "Delete";
            mnuVBA.OfficeImageId = "iplay";

            btnFormatAddSpace.OfficeImageId = "";
            btnFormatC2E.OfficeImageId = "";
            btnFormatDelEmptyLine.OfficeImageId = "";
            btnFormatDelGraphic.OfficeImageId = "";
            btnFormatDelSelectEmptyLine.OfficeImageId = "";
            btnFormatDelSelectSpace.OfficeImageId = "";
            btnFormatDelSpace.OfficeImageId = "";
            btnFormatE2C.OfficeImageId = "";
            btnFormatFrame2txt.OfficeImageId = "";
            btnFormatFullLine.OfficeImageId = "";
            btnFormatParaPage.OfficeImageId = "";
            btnFormatR2N.OfficeImageId = "";
            btnFormatRemoveURL.OfficeImageId = "";

            btnSetPW.Visible = false;
            btnFormatDelSpace.Visible = false;
            btnSelectCurrentPage.Visible = false;
            btnFormatParaPage.Visible = false;
        }
    }
}