using System;
using System.Drawing;
using System.Reflection;
using System.Windows.Forms;
using System.IO;
using System.Diagnostics;

namespace 公文排版
{
    partial class AboutBox1 : Form
    {
        private readonly ToolTip _tip = new ToolTip();

        // 本窗体替按钮持有的 Font。设置提供者每读一次就新建一个 Font，字体对话框返回的也是
        // 新实例，而 WinForms 不接管控件 Font 的所有权：换字体时上一个实例没人 Dispose，
        // GDI 字体句柄只能等终结器回收（和 Ribbon1.ReadSetting 里修掉的是同一类问题）。
        private readonly System.Collections.Generic.Dictionary<Button, Font> ownedFonts
            = new System.Collections.Generic.Dictionary<Button, Font>();

        public AboutBox1()
        {
            InitializeComponent();
            string name = Assembly.GetExecutingAssembly().GetName().Name;
            string ver = Assembly.GetExecutingAssembly().GetName().Version.ToString();
            this.Text = "关于" + name + ver;
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

                LoadFont(cobLetter);

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

        private void ShowAdvancedPanel(bool show)
        {
            if (show)
            {
                // 400 是设计器在 96dpi 下量的设备像素：AutoScaleMode 是 Dpi，子控件会跟着
                // 缩放而这个常数不会，125%/150% 下面板里 11 行只剩几十像素高。
                this.Height = 400 * this.DeviceDpi / 96;
                panel1.Visible = false;
                lblTip.Visible = true;
                lblTip.Text = "用户设置，双击恢复默认.";
                GetFont();
                btnCustom.Text = "<<高级功能";
                btnSave.Visible = true;
                tableLayoutPanel1.Dock = DockStyle.Fill;
                tableLayoutPanel1.Visible = true;
            }
            else
            {
                lblTip.Visible = false;
                btnSave.Visible = false;
                this.Height = MinimumSize.Height;
                panel1.Visible = true;
                tableLayoutPanel1.Visible = false;
                btnCustom.Text = ">>高级功能";
            }
        }

        private void BtnCustom_Click(object sender, EventArgs e)
        {
            ShowAdvancedPanel(panel1.Visible);
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
            SetButtonFont(btn, font);
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
                var s = Properties.Settings.Default;
                s.公文标题 = button1.Font;
                s.一级标题 = button2.Font;
                s.二级标题 = button3.Font;
                s.三级标题 = button4.Font;
                s.四级标题 = button5.Font;
                s.正文 = button6.Font;
                s.版头 = button7.Font;
                s.签发人姓名 = button8.Font;
                s.版记 = button9.Font;
                s.页码 = button10.Font;

                string letterFont = cobLetter.Text?.Trim();
                if (string.IsNullOrEmpty(letterFont))
                {
                    MessageBox.Show("未指定默认西文字体!", this.Text);
                    return;
                }
                s.英文字体 = letterFont;

                s.Save();

                MessageBox.Show(
                    "用户自定义配置文件已保存！\r\n注意：Word 更新后用户配置文件可能被重置。",
                    this.Text, MessageBoxButtons.OK, MessageBoxIcon.Information);

                // 校验不过时上面已经 return，窗体保持打开；能走到这里说明保存成功，
                // 必须显式给出 OK：btnOK 的 DialogResult 是 Cancel，而调用方
                // Ribbon1.btnAbout_Click 只在返回 OK 时才 ReadSetting() 重建功能区字体，
                // 不返回 OK 用户刚存的设置在本次会话里根本不生效。
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
            string url = Properties.Settings.Default.帮助_高级功能;
            if (string.IsNullOrWhiteSpace(url))
            {
                MessageBox.Show("本版本未内置在线帮助地址。",
                    "高级功能帮助", MessageBoxButtons.OK, MessageBoxIcon.Information);
                return;
            }
            try
            {
                Process.Start(url);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source,
                    "打开在线帮助时出错", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
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