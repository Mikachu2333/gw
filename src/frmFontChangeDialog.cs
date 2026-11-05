using Microsoft.Office.Interop.Word;
using System;
using System.Drawing.Text;
using System.Windows.Forms;
using System.Diagnostics;
using System.Drawing;

namespace 公文排版
{
    public partial class FrmFontChangeDialog : Form
    {
        private Microsoft.Office.Interop.Word.Application WordApp;

        public FrmFontChangeDialog()
        {
            InitializeComponent();
        }

        private void LoadFont(ComboBox combo)
        {
            if (combo == null) return;
            try
            {
                combo.BeginUpdate();
                combo.Items.Clear();
                using (var ifc = new InstalledFontCollection())
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

        /// <summary>
        /// 更改字母或数字的字体. numLetter 为 ^# 表示数字, ^$ 表示字母.
        /// </summary>
        private bool ChangeFont(string numLetter, string fontName)
        {
            WordApp.Selection.Find.ClearFormatting();
            WordApp.Selection.Find.Replacement.ClearFormatting();

            WordApp.Selection.Find.Text = numLetter;
            WordApp.Selection.Find.Forward = true;
            WordApp.Selection.Find.Wrap = WdFindWrap.wdFindContinue;
            WordApp.Selection.Find.Format = true;
            WordApp.Selection.Find.MatchByte = true;
            WordApp.Selection.Find.MatchCase = false;
            WordApp.Selection.Find.MatchWholeWord = false;
            WordApp.Selection.Find.CorrectHangulEndings = false;
            WordApp.Selection.Find.HanjaPhoneticHangul = false;
            WordApp.Selection.Find.MatchWildcards = false;
            WordApp.Selection.Find.MatchSoundsLike = false;
            WordApp.Selection.Find.MatchAllWordForms = false;

            WordApp.Selection.Find.Replacement.Text = "^&";
            WordApp.Selection.Find.Replacement.Font.NameAscii = fontName;

            bool ok = WordApp.Selection.Find.Execute(Replace: WdReplace.wdReplaceAll);

            WordApp.Selection.Find.ClearFormatting();
            WordApp.Selection.Find.Replacement.ClearFormatting();
            return ok;
        }

        private void FrmFontChangeDialog_Load(object sender, EventArgs e)
        {
            try
            {
                WordApp = Globals.ThisAddIn.Application;
                LoadFont(cobLetter);
                LoadFont(cobNumber);
                LoadFont(cobFont2);
                LoadFont(cobFont1);

                string letterFont = Properties.Settings.Default.英文字体;
                if (!string.IsNullOrEmpty(letterFont)) cobLetter.Text = letterFont;
                string numberFont = Properties.Settings.Default.数字字体;
                if (!string.IsNullOrEmpty(numberFont)) cobNumber.Text = numberFont;
            }
            catch (Exception ex)
            {
                Debug.WriteLine("FrmFontChangeDialog_Load: " + ex.Message);
            }
        }

        private void ChkNumber_CheckedChanged(object sender, EventArgs e)
        {
            btnOK.Enabled = chkboxFont.Checked || chkNumber.Checked || chkLetter.Checked;
            cobNumber.Enabled = chkNumber.Checked;
        }

        private void ChkLetter_CheckedChanged(object sender, EventArgs e)
        {
            btnOK.Enabled = chkboxFont.Checked || chkNumber.Checked || chkLetter.Checked;
            cobLetter.Enabled = chkLetter.Checked;
        }

        private void ChkboxFont_CheckedChanged(object sender, EventArgs e)
        {
            btnOK.Enabled = chkboxFont.Checked || chkNumber.Checked || chkLetter.Checked;
            cobFont1.Enabled = chkboxFont.Checked;
            cobFont2.Enabled = chkboxFont.Checked;
        }

        private void BtnOK_Click(object sender, EventArgs e)
        {
            if (WordApp == null) return;

            // 参数先全部校验完再动手：原先替换到一半才发现另一项没填，直接 return，
            // 文档已经改了、设置却没存，状态栏也不更新，用户看不出改到了哪一步。
            string oldFont = null, newFont = null, numberFont = null, letterFont = null;
            if (chkboxFont.Checked)
            {
                oldFont = cobFont1.Text?.Trim();
                newFont = cobFont2.Text?.Trim();
                if (string.IsNullOrEmpty(oldFont))
                {
                    MessageBox.Show("请选择或者输入被替换字体的名称!", this.Text);
                    return;
                }
                if (string.IsNullOrEmpty(newFont))
                {
                    MessageBox.Show("请选择或者输入要替换字体的名称!", this.Text);
                    return;
                }
            }
            if (chkNumber.Checked)
            {
                numberFont = cobNumber.Text?.Trim();
                if (string.IsNullOrEmpty(numberFont))
                {
                    MessageBox.Show("未指定数字字体!", this.Text);
                    return;
                }
            }
            if (chkLetter.Checked)
            {
                letterFont = cobLetter.Text?.Trim();
                if (string.IsNullOrEmpty(letterFont))
                {
                    MessageBox.Show("未指定字母字体!", this.Text);
                    return;
                }
            }

            string status = "";
            bool anyMatch = false;

            try
            {
                // 全文替换属于改动文档的操作，按仓库约定统一走 WithUndo：
                // 原先不包，一次点"确定"留下 N 个独立撤销单元，按一次 Ctrl+Z 只回退一小段；
                // 顺带拿到 ScreenUpdating 的异常恢复。
                Globals.Ribbons.Ribbon1.WithUndo("指定字体更改", () =>
                {
                    if (chkboxFont.Checked)
                    {
                        anyMatch = ReplaceFontByName(oldFont, newFont) || anyMatch;
                        status += " " + oldFont + "已改为:" + newFont;
                    }
                    if (chkNumber.Checked)
                    {
                        anyMatch = ChangeFont("^#", numberFont) || anyMatch;
                        Properties.Settings.Default.数字字体 = numberFont;
                        status += " 数字字体改为:" + numberFont;
                    }
                    if (chkLetter.Checked)
                    {
                        anyMatch = ChangeFont("^$", letterFont) || anyMatch;
                        Properties.Settings.Default.英文字体 = letterFont;
                        status += " 字母字体改为:" + letterFont;
                    }
                }, suspendScreen: true);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source,
                    "设置字体时出错", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                return;
            }

            // 写 user.config 失败和 Word 替换失败是两回事，原先共用一个 catch，
            // 结果文档已经改完却提示"设置字体时出错"，用户以为什么都没发生。
            try
            {
                Properties.Settings.Default.Save();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n字体已替换，但写入用户配置文件失败（user.config 可能被占用或已损坏）。",
                    "保存设置时出错", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }

            // 一个都没匹配上也算"执行成功"，原先照样报"数字字体改为:X"，
            // 用户以为全文都换了，其实文档里根本没有这类字符。
            if (!anyMatch && status.Length > 0)
                status += "（未找到匹配内容）";
            WordApp.StatusBar = status.TrimStart();
            this.Close();
        }

        /// <summary>按字体名整篇替换，返回是否真的替换到内容。</summary>
        private bool ReplaceFontByName(string oldFont, string newFont)
        {
            WordApp.Selection.Find.ClearFormatting();
            WordApp.Selection.Find.Replacement.ClearFormatting();

            WordApp.Selection.Find.Text = "";
            WordApp.Selection.Find.Replacement.Text = "";
            WordApp.Selection.Find.Forward = true;
            WordApp.Selection.Find.Wrap = WdFindWrap.wdFindContinue;
            WordApp.Selection.Find.Format = true;
            WordApp.Selection.Find.MatchByte = true;
            WordApp.Selection.Find.MatchCase = false;
            WordApp.Selection.Find.MatchWholeWord = false;
            WordApp.Selection.Find.CorrectHangulEndings = false;
            WordApp.Selection.Find.HanjaPhoneticHangul = false;
            WordApp.Selection.Find.MatchWildcards = false;
            WordApp.Selection.Find.MatchSoundsLike = false;
            WordApp.Selection.Find.MatchAllWordForms = false;

            WordApp.Selection.Find.Font.Name = oldFont;
            WordApp.Selection.Find.Replacement.Font.Name = newFont;

            bool ok = WordApp.Selection.Find.Execute(Replace: WdReplace.wdReplaceAll);

            WordApp.Selection.Find.ClearFormatting();
            WordApp.Selection.Find.Replacement.ClearFormatting();
            return ok;
        }
        private void CobFont1_HelpRequested(object sender, HelpEventArgs hlpevent)
        {
            Help.ShowPopup((Control)sender, "选择要更改的字体,如果本机不含该字体,也可以直接输入该字体正确的名称.", hlpevent.MousePos);
        }

        private void FrmFontChangeDialog_HelpButtonClicked(object sender, System.ComponentModel.CancelEventArgs e)
        {
            Help.ShowPopup(this, "点击帮助按钮后,再点击不懂的地方或控件,可以获得帮助.", MousePosition);
        }

        private void CobFont2_HelpRequested(object sender, HelpEventArgs hlpevent)
        {
            Help.ShowPopup((Control)sender, "在这里选择要替换的字体,你也可以输入字体的部分名称,助手会帮你找到类似字体.", hlpevent.MousePos);
        }

        private void CobNumber_HelpRequested(object sender, HelpEventArgs hlpevent)
        {
            Help.ShowPopup((Control)sender, "在这里指定数字要使用的字体,你可以输入字体的部分名称,助手会帮你找到类似字体", hlpevent.MousePos);
        }

        private void CobLetter_HelpRequested(object sender, HelpEventArgs hlpevent)
        {
            Help.ShowPopup((Control)sender, "在这里指定字母要使用的字体,你可以输入字体的部分名称,助手会帮你找到类似字体", hlpevent.MousePos);
        }

        private void ChkLetter_HelpRequested(object sender, HelpEventArgs hlpevent)
        {
            Help.ShowPopup((Control)sender, "要更改字母字体,请勾选此处", hlpevent.MousePos);
        }

        private void ChkNumber_HelpRequested(object sender, HelpEventArgs hlpevent)
        {
            Help.ShowPopup((Control)sender, "要更改数字字体,请勾选此处", hlpevent.MousePos);
        }

        private void ChkboxFont_HelpRequested(object sender, HelpEventArgs hlpevent)
        {
            Help.ShowPopup((Control)sender, "要替换指定的字体,请勾选此处", hlpevent.MousePos);
        }
    }
}