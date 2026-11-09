using System;
using System.Drawing;
using System.Reflection;
using System.Windows.Forms;
using System.IO;
using System.Diagnostics;

namespace gw_mika
{
    partial class AboutBox1 : Form
    {
        private readonly ToolTip _tip = new ToolTip();
        private bool advancedSettings;
        internal bool SettingsChanged { get; private set; }

        // 设置提供者会缓存 Font；窗体只持有它们的副本和字体对话框返回的实例。
        // 保存时也复制一份交给设置对象，避免关闭窗体后配置中的字体已被释放。
        private readonly System.Collections.Generic.Dictionary<Button, Font> ownedFonts
            = new System.Collections.Generic.Dictionary<Button, Font>();

        // 关于窗体正文。两处链接由 AddUrlLinks 手工登记成可点击区间，
        // 不再放收款码、赞赏图和旧站点入口。
        private const string AboutText =
            "「公文准式」是按 GB/T 9704—2012 排布公文的 Word / WPS 插件，本版本为开源二次开发版。\r\n\r\n" +
            "源码与问题反馈：https://gitlab.com/Mikachu2333/gw\r\n\r\n" +
            "本软件的根基「小恐龙公文排版助手」已由原作者开源，在此致谢：\r\n" +
            "https://github.com/xkonglong/gw";

        public AboutBox1()
        {
            InitializeComponent();
            this.Text = BuildTitle();
            this.lblText.Text = AboutText;
            AddUrlLinks();
            this.Height = this.MinimumSize.Height;

            // 窗体是按次 new 出来再 using 释放的（Ribbon1.btnAbout_Click），_tip 和这些
            // Font 都不在 components 里，设计器生成的 Dispose 碰不到它们。
            this.Disposed += (s, e) =>
            {
                _tip.Dispose();
                foreach (Font f in ownedFonts.Values)
                {
                    if (f != null) f.Dispose();
                }
                ownedFonts.Clear();
            };
        }

        /// <summary>标题由程序集版本生成，形如：关于「公文准式」（版本 X.Y.Z.W）。</summary>
        private static string BuildTitle()
        {
            var asm = Assembly.GetExecutingAssembly();
            string product = ((AssemblyProductAttribute)Attribute.GetCustomAttribute(
                asm, typeof(AssemblyProductAttribute)))?.Product;
            if (string.IsNullOrWhiteSpace(product)) product = asm.GetName().Name;
            return "关于「" + product + "」（版本 " + asm.GetName().Version + "）";
        }

        /// <summary>
        /// 把正文里的 http(s) 地址登记成可点击区间。.NET Framework 4.8 的 LinkLabel 没有
        /// DetectUrls 属性（反射确认过），URL 只能自己扫；LinkData 存原文，点击时不必再按
        /// Start/Length 回查，也就不会把紧跟其后的中文标点一起吞进去。
        /// </summary>
        private void AddUrlLinks()
        {
            lblText.Links.Clear();
            string text = lblText.Text ?? "";
            int i = 0;
            while (i < text.Length)
            {
                int at = text.IndexOf("http", i, StringComparison.Ordinal);
                if (at < 0) break;
                int end = at;
                while (end < text.Length && !char.IsWhiteSpace(text[end])) end++;
                string run = text.Substring(at, end - at);
                if (run.StartsWith("http://", StringComparison.Ordinal)
                    || run.StartsWith("https://", StringComparison.Ordinal))
                {
                    lblText.Links.Add(at, end - at, run);
                    i = end;
                }
                else
                {
                    i = at + 4;
                }
            }
        }

        private void LblText_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            string url = e.Link.LinkData as string;
            if (string.IsNullOrWhiteSpace(url))
                url = lblText.Text.Substring(e.Link.Start, e.Link.Length);
            e.Link.Visited = true;
            Ribbon1.OpenLink(url.TrimEnd(' ', '。', '，', '、', '；', '：'), "打开链接");
        }

        private void LoadFont(ComboBox combo)
        {
            if (combo == null) return;
            try
            {
                combo.BeginUpdate();
                combo.Items.Clear();
                using (var ifc = new System.Drawing.Text.InstalledFontCollection())
                {
                    foreach (FontFamily ff in ifc.Families)
                        combo.Items.Add(ff.Name);
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
            }
            finally
            {
                combo.EndUpdate();
            }
        }

        private void AboutBox1_Load(object sender, EventArgs e)
        {
            try
            {
                string oVer = "Windows " + Environment.OSVersion.Version;
                oVer += Environment.Is64BitOperatingSystem ? " 64位" : " 32位";

                string wVer = Application.ProductName + "(" + Application.ProductVersion + ")";
                wVer += Environment.Is64BitProcess ? " 64位" : " 32位";

                string wPath = Application.StartupPath;
                string mPath = Assembly.GetExecutingAssembly().Location;

                this.txtInfo.Text = this.Text + "\r\n" + oVer + "\r\n" + wVer + "\r\n" + wPath + "\r\n" + mPath;

                tableLayoutPanel1.Dock = DockStyle.Fill;

                if (advancedSettings)
                {
                    LoadFont(cobLetter);
                    GetFont();
                    this.Height = 400 * this.DeviceDpi / 96;
                }

                // TableLayoutPanel 双缓冲，减少刷新闪烁
                typeof(TableLayoutPanel)
                    .GetProperty("DoubleBuffered", BindingFlags.Instance | BindingFlags.NonPublic)
                    ?.SetValue(tableLayoutPanel1, true, null);
            }
            catch (Exception ex)
            {
                Debug.WriteLine("AboutBox1_Load: " + ex.Message);
                // 不再 throw，窗体仍可打开
            }
        }

        private void TxtInfo_Click(object sender, EventArgs e)
        {
            if (!(sender is TextBox tbox)) return;
            if (string.IsNullOrEmpty(txtInfo.Text)) return;
            try
            {
                Clipboard.SetText(txtInfo.Text);
                _tip.Show("系统信息已复制", tbox, 1000);
            }
            catch (Exception ex)
            {
                _tip.Show("系统信息复制时出错!\r\n" + ex.Message, tbox, 1000);
            }
        }

        internal void ShowAdvancedSettings()
        {
            advancedSettings = true;
            this.Text = "高级设置（公文准式）";
            // 400 是设计器在 96dpi 下量的设备像素：AutoScaleMode 是 Dpi，子控件会跟着
            // 缩放而这个常数不会，125%/150% 下面板里 11 行只剩几十像素高。
            this.Height = 400 * this.DeviceDpi / 96;
            panel1.Visible = false;
            lblTip.Visible = true;
            lblTip.Text = "用户设置，双击恢复默认.";
            btnSave.Visible = true;
            tableLayoutPanel1.Dock = DockStyle.Fill;
            tableLayoutPanel1.Visible = true;
        }

        private void SetFont(object sender, EventArgs e)
        {
            if (!(sender is Button btn)) return;
            try
            {
                using (var fd = new FontDialog())
                {
                    fd.Font = btn.Font;
                    fd.AllowSimulations = true;
                    fd.ShowEffects = false;
                    fd.MinSize = 9;
                    fd.FontMustExist = true;

                    if (fd.ShowDialog(this) == DialogResult.OK)
                    {
                        btn.Text = fd.Font.Name;
                        SetButtonFont(btn, fd.Font);
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n当前用户权限无法访问该字体,请为所有用户安装该字体。",
                    "打开字体对话框时出错", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void ApplyFont(Button btn, Font font)
        {
            if (btn == null || font == null) return;
            btn.Text = font.Name;
            SetButtonFont(btn, (Font)font.Clone());
        }

        /// <summary>给按钮换字体，并把上一个由本窗体持有的 Font 释放掉。</summary>
        private void SetButtonFont(Button btn, Font font)
        {
            if (btn == null || font == null) return;
            Font previous;
            // 字体对话框在用户没改动时会把我们给它的那个实例原样还回来，
            // 这种情况绝不能先释放再赋回去。
            if (ownedFonts.TryGetValue(btn, out previous) && !ReferenceEquals(previous, font))
            {
                previous.Dispose();
            }
            ownedFonts[btn] = font;
            btn.Font = font;
        }

        private void GetFont()
        {
            try
            {
                var s = Properties.Settings.Default;
                ApplyFont(button1, s.公文标题);
                ApplyFont(button2, s.一级标题);
                ApplyFont(button3, s.二级标题);
                ApplyFont(button4, s.三级标题);
                ApplyFont(button5, s.四级标题);
                ApplyFont(button6, s.正文);
                ApplyFont(button7, s.版头);
                ApplyFont(button8, s.签发人姓名);
                ApplyFont(button9, s.版记);
                ApplyFont(button10, s.页码);

                string letterFont = s.英文字体;
                if (!string.IsNullOrEmpty(letterFont))
                    cobLetter.Text = letterFont;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source,
                    "读取公文格式配置文件时出错", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void SaveConfig()
        {
            try
            {
                string letterFont = cobLetter.Text?.Trim();
                if (string.IsNullOrEmpty(letterFont))
                {
                    MessageBox.Show("未指定默认西文字体!", this.Text);
                    return;
                }

                var s = Properties.Settings.Default;
                s.公文标题 = (Font)button1.Font.Clone();
                s.一级标题 = (Font)button2.Font.Clone();
                s.二级标题 = (Font)button3.Font.Clone();
                s.三级标题 = (Font)button4.Font.Clone();
                s.四级标题 = (Font)button5.Font.Clone();
                s.正文 = (Font)button6.Font.Clone();
                s.版头 = (Font)button7.Font.Clone();
                s.签发人姓名 = (Font)button8.Font.Clone();
                s.版记 = (Font)button9.Font.Clone();
                s.页码 = (Font)button10.Font.Clone();

                s.英文字体 = letterFont;

                s.Save();
                SettingsChanged = true;

                MessageBox.Show(
                    "用户自定义配置文件已保存！\r\n注意：Word 更新后用户配置文件可能被重置。",
                    this.Text, MessageBoxButtons.OK, MessageBoxIcon.Information);

                // 校验不过时上面已经 return，窗体保持打开；能走到这里说明保存成功，
                // 用 SettingsChanged 告知调用方刷新功能区字体；恢复默认后直接关闭
                // 窗体也需要刷新，不能只依赖 DialogResult。
                DialogResult = DialogResult.OK;
                Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source,
                    "保存公文格式配置文件时出错", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void AboutBox1_HelpButtonClicked(object sender, System.ComponentModel.CancelEventArgs e)
        {
            // 原先读 Settings.帮助_高级功能（恒为空的 applicationSettings），点"?"只会看到
            // "本版本未内置在线帮助地址"。现在直接指向项目主页。
            Ribbon1.OpenLink(Ribbon1.RepoUrl, "在线帮助");
            e.Cancel = true;
        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            SaveConfig();
        }

        private void lblTip_DoubleClick(object sender, EventArgs e)
        {
            if (MessageBox.Show("确定把公文字体相关的用户设置恢复为默认值吗？\r\n（不影响页面设置与 VBA 运行历史）",
                "确认", MessageBoxButtons.YesNo, MessageBoxIcon.Question) != DialogResult.Yes)
                return;

            try
            {
                // 原先用 Settings.Default.Reset()：那会清空全部用户设置，
                // 连 VBA 运行历史、脚本路径一起抹掉，而提示只说"恢复默认字体设置"
                Properties.Settings.Default.ResetNames(
                    "公文标题", "一级标题", "二级标题", "三级标题", "四级标题",
                    "正文", "版头", "签发人姓名", "版记", "页码",
                    "英文字体", "数字字体");
                SettingsChanged = true;
                GetFont();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "重置设置时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }
    }
}