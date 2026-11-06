using System;
using System.Windows.Forms;
using MSWord = Microsoft.Office.Interop.Word;
using Microsoft.Office.Tools.Ribbon;

namespace gw_mika
{
    public partial class Ribbon1
    {
        // fp 建立时所用的文档窗口句柄，用于判断 Owner 是否已经过期（见 btnPaper_Click）。
        private int fpOwnerHwnd;

        /// <summary>显示/切换页面设置对话框</summary>
        private void btnPaper_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                // Word 2007/2010 走模态对话框，避免 Ribbon 状态与窗体生命周期冲突
                if (IsLegacyHost)
                {
                    using (var dlg = new frmPaperSetup())
                        dlg.ShowDialog();
                    btnPaper.Checked = false;
                    return;
                }

                int ownerHwnd = WordApp.ActiveWindow.Hwnd;
                // fp 是按"当时那个文档窗口"当 Owner 建的。切到别的文档窗口后原句柄可能已经失效
                // （Word 复用同一个数值时，窗体关闭还会把启用状态还给错误的窗口），而 WinForms
                // 不允许改已显示窗体的 Owner，只能重建。
                if (fp == null || fp.IsDisposed || fpOwnerHwnd != ownerHwnd)
                {
                    if (fp != null && !fp.IsDisposed) fp.Dispose();
                    fp = new frmPaperSetup();
                    // 用户点窗体右上角关闭时不会经过 btnPaper_Click，不订阅就会一直显示“按下”
                    fp.FormClosed += (s, args) => btnPaper.Checked = false;
                    fpOwnerHwnd = ownerHwnd;
                    var clsWinWrap = new ClsWinWrap(ownerHwnd);
                    clsWinWrap.Show(fp);
                    btnPaper.Checked = true;
                }
                else
                {
                    WordApp.StatusBar = "页面设置对话框已打开";
                    fp.Activate();
                    btnPaper.Checked = true;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source,
                    "打开页面设置时出错", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                btnPaper.Checked = false;
            }
        }

        /// <summary>中文缩进：首行缩进 2 字符</summary>
        private void btnInsert2_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                WithUndo("首行缩进2字符", () =>
                {
                    WordApp.Selection.ParagraphFormat.CharacterUnitFirstLineIndent = 2;
                });
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "中文缩进时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        /// <summary>段落顶格：清除首行缩进、左缩进</summary>
        private void btnLeft_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                WithUndo("段落顶格", () =>
                {
                    WordApp.Selection.ParagraphFormat.CharacterUnitFirstLineIndent = 0;
                    WordApp.Selection.ParagraphFormat.FirstLineIndent = 0;
                    WordApp.Selection.ParagraphFormat.LeftIndent = 0;
                    WordApp.Selection.ParagraphFormat.CharacterUnitLeftIndent = 0;
                });
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "段落顶格时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        /// <summary>删除当前页页眉横线</summary>
        private void btnHeadNoLine_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                WithUndo("删除页眉横线", () =>
                {
                    var view = WordApp.ActiveWindow.ActivePane.View;
                    bool enteredHeader = view.SeekView != MSWord.WdSeekView.wdSeekCurrentPageHeader;
                    try
                    {
                        if (enteredHeader)
                            view.SeekView = MSWord.WdSeekView.wdSeekCurrentPageHeader;

                        WordApp.Selection.WholeStory();
                        WordApp.Selection.Borders[MSWord.WdBorderType.wdBorderBottom].LineStyle = MSWord.WdLineStyle.wdLineStyleNone;
                    }
                    finally
                    {
                        // 中途抛异常时也必须离开页眉视图，否则用户会停在页眉里继续编辑
                        if (enteredHeader && view.SeekView != MSWord.WdSeekView.wdSeekMainDocument)
                        {
                            try { view.SeekView = MSWord.WdSeekView.wdSeekMainDocument; }
                            catch (Exception ex) { System.Diagnostics.Debug.WriteLine("恢复主文档视图失败: " + ex.Message); }
                        }
                    }
                }, suspendScreen: true);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "删除页眉横线失败",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        /// <summary>编号转文字（全文转换）</summary>
        private void BtnNum2Txt_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                var dr = MessageBox.Show(
                    "编号转换为文字后,现有的项目将无法自动编号.\r\n你确定要继续吗?",
                    "编号转为文字", MessageBoxButtons.OKCancel, MessageBoxIcon.Question);
                if (dr != DialogResult.OK) return;

                WithUndo("编号转为文字", () =>
                {
                    WordApp.ActiveDocument.Content.ListFormat.ConvertNumbersToText();
                });
                WordApp.StatusBar = "编号已全部转为文字形式!";
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "编号转文字时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }
    }
}