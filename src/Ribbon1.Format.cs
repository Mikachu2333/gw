using System;
using System.Collections.Generic;
using System.Windows.Forms;
using Microsoft.Office.Tools.Ribbon;
using MSWord = Microsoft.Office.Interop.Word;

namespace 公文排版
{
    public partial class Ribbon1
    {
        /// <summary>查找替换</summary>
        private void WordReplace(bool wildcard, string findString, string replaceString, bool range = false)
        {
            try
            {
                WordApp.Selection.Find.ClearFormatting();
                WordApp.Selection.Find.Replacement.ClearFormatting();
                if (range)
                {
                    WordApp.Selection.Find.Execute(findString, false, false, wildcard, false, false, true,
                        MSWord.WdFindWrap.wdFindStop, false, replaceString, MSWord.WdReplace.wdReplaceAll);
                }
                else
                {
                    WordApp.Selection.Find.Execute(findString, false, false, wildcard, false, false, true,
                        MSWord.WdFindWrap.wdFindContinue, false, replaceString, MSWord.WdReplace.wdReplaceAll);
                }
                WordApp.Selection.Find.ClearFormatting();
                WordApp.Selection.Find.Replacement.ClearFormatting();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "排版替换功能出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        /// <summary>
        /// 确定操作范围。返回 false 表示用户取消；hasSelection 为 true 时只处理选区，
        /// 为 false 表示用户已确认执行全局操作。
        /// 原实现把这两种情况都返回 true，调用方无法区分，导致"全局操作"实际按选区执行。
        /// </summary>
        private bool TryGetScope(string title, out bool hasSelection)
        {
            hasSelection = WordApp.Selection.Characters.Count > 1;
            if (hasSelection) return true;
            var dr = MessageBox.Show("您未选定范围,将执行全局操作!", title,
                MessageBoxButtons.OKCancel, MessageBoxIcon.Warning);
            return dr != DialogResult.Cancel;
        }

        private void btnFormatFullLine_Click(object sender, RibbonControlEventArgs e)
        {
            bool s;
            if (!TryGetScope("断句重排", out s)) return;
            WithUndo("断句重排", () => WordReplace(true, "([!。：！？])^13@", "\\1", s), suspendScreen: true);
        }

        private void btnFormatDelEmptyLine_Click(object sender, RibbonControlEventArgs e)
        {
            int n = 0;
            try
            {
                MSWord.Paragraphs p = WordApp.Selection.Paragraphs;
                if (WordApp.Selection.Characters.Count <= 1)
                {
                    var dr = MessageBox.Show("您未选定范围,将执行全局操作!", "删除空行",
                        MessageBoxButtons.OKCancel, MessageBoxIcon.Warning);
                    if (dr == DialogResult.Cancel) return;
                    p = WordApp.ActiveDocument.Paragraphs;
                }
                WithUndo("删除空行", () =>
                {
                    // Paragraphs 是实时集合，边遍历边 Delete 会跳过段落甚至直接抛错：
                    // 先快照出目标 Range，再从文档末尾往前删，前面的位置不受影响
                    var empty = new List<MSWord.Range>();
                    foreach (MSWord.Paragraph i in p)
                    {
                        if (i.Range.Text.Trim().Length <= 0 && i.Range.ShapeRange.Count == 0)
                            empty.Add(i.Range);
                    }
                    for (int k = empty.Count - 1; k >= 0; k--)
                    {
                        empty[k].Delete();
                        n++;
                    }
                }, suspendScreen: true);
                WordApp.StatusBar = "已删除 " + n + " 个空行!";
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "删除空行时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void btnFormatDelSelectEmptyLine_Click(object sender, RibbonControlEventArgs e)
        {
            int n = 0;
            try
            {
                MSWord.Paragraphs p = WordApp.Selection.Paragraphs;
                WithUndo("删除选区空行", () =>
                {
                    // Paragraphs 是实时集合，边遍历边 Delete 会跳过段落甚至直接抛错：
                    // 先快照出目标 Range，再从文档末尾往前删，前面的位置不受影响
                    var empty = new List<MSWord.Range>();
                    foreach (MSWord.Paragraph i in p)
                    {
                        if (i.Range.Text.Trim().Length <= 0 && i.Range.ShapeRange.Count == 0)
                            empty.Add(i.Range);
                    }
                    for (int k = empty.Count - 1; k >= 0; k--)
                    {
                        empty[k].Delete();
                        n++;
                    }
                }, suspendScreen: true);
                WordApp.StatusBar = "已删除 " + n + " 个空行!";
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "删除空行时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void btnFormatDelSpace_Click(object sender, RibbonControlEventArgs e)
        {
            bool s;
            if (!TryGetScope("删除空白", out s)) return;
            WithUndo("删除空白", () =>
            {
                WordReplace(false, "^w", "", s);
                WordReplace(false, "　", "", s);
            }, suspendScreen: true);
        }

        private void btnFormatR2N_Click(object sender, RibbonControlEventArgs e)
        {
            bool s;
            if (!TryGetScope("换行符转回车", out s)) return;
            WithUndo("换行符转回车", () => WordReplace(false, "^l", "^p", s), suspendScreen: true);
        }

        private void btnFormatDelGraphic_Click(object sender, RibbonControlEventArgs e)
        {
            bool s;
            if (!TryGetScope("删除图形", out s)) return;
            WithUndo("删除图形", () => WordReplace(false, "^g", "", s), suspendScreen: true);
        }

        private void btnFormatRemoveURL_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                bool s;
                if (!TryGetScope("移走链接", out s)) return;
                WithUndo("移走链接", () =>
                {
                    if (s) WordApp.Selection.Fields.Unlink();
                    else WordApp.ActiveDocument.Fields.Unlink();
                }, suspendScreen: true);
            }
            catch (Exception ex) { MessageBox.Show(ex.Message); }
        }

        private void btnFormatDelSelectSpace_Click(object sender, RibbonControlEventArgs e)
        {
            bool s;
            if (!TryGetScope("删除半角空格", out s)) return;
            WithUndo("删除半角空格", () => WordReplace(false, " ", "", s), suspendScreen: true);
        }

        private void btnFormatAddSpace_Click(object sender, RibbonControlEventArgs e)
        {
            bool s;
            if (!TryGetScope("中英文之间加空格", out s)) return;
            WithUndo("中英文之间加空格", () =>
            {
                WordReplace(true, "([A-Za-z])([㐀-﨩])", "\\1 \\2", s);
                WordReplace(true, "([㐀-﨩])([A-Za-z])", "\\1 \\2", s);
            }, suspendScreen: true);
        }

        private void btnFormatE2C_Click(object sender, RibbonControlEventArgs e)
        {
            bool s;
            if (!TryGetScope("标点符号(英转中)", out s)) return;
            WithUndo("标点符号(英转中)", () =>
            {
                string strFind = "([!0-9])\\.([!0-9])";
                string strRep = "\\1。\\2";
                WordReplace(true, strFind, strRep, s);

                string[] eArray = { ",", ";", ":", "?", "!", "-", "~", "(", ")", "[", "]" };
                string[] cArray = { "，", "；", "：", "？", "！", "—", "～", "（", "）", "［", "］" };
                for (int i = 0; i < eArray.Length; i++)
                    WordReplace(false, eArray[i], cArray[i], s);

                // WPS 的查找替换对成对引号处理不同，跳过以免误替换
                if (!IsWps)
                {
                    strFind = "\"(*)\"";
                    strRep = "“\\1”";
                    WordReplace(true, strFind, strRep, s);
                }
            }, suspendScreen: true);
        }

        private void btnFormatC2E_Click(object sender, RibbonControlEventArgs e)
        {
            // 临时关闭的自动更正选项必须在转换结束后恢复，否则用户的全局设置被永久改掉
            bool quotesChanged = false;
            if (WordApp.Options.AutoFormatAsYouTypeReplaceQuotes)
            {
                string text = "Word自动更正选项中,已开启输入直引号自动更正为弯引号." +
                    "\r\n此功能将影响中文引号的转换.要关闭此选项并开始转换吗?" +
                    "\r\n\r\n点击\"是\"将临时关闭该自动更正选项并转换,转换完成后自动恢复.\r\n点击\"否\"将直接转换,引号可能被Word自动更正." +
                    "\r\n点击\"取消\"退出该操作.";
                var dr = MessageBox.Show(text, "中文标点符号转为英文", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Question);
                if (dr == DialogResult.Yes)
                {
                    WordApp.Options.AutoFormatAsYouTypeReplaceQuotes = false;
                    quotesChanged = true;
                }
                else if (dr == DialogResult.Cancel) return;
            }

            bool s;
            if (!TryGetScope("标点符号(中转英)", out s))
            {
                if (quotesChanged) WordApp.Options.AutoFormatAsYouTypeReplaceQuotes = true;
                return;
            }

            try
            {
                WithUndo("标点符号(中转英)", () =>
                {
                    string[] cArray = { "。", "，", "；", "：", "？", "！", "—", "～", "（", "）", "［", "］", "“", "”", "‘", "’" };
                    string[] eArray = { ".", ",", ";", ":", "?", "!", "-", "~", "(", ")", "[", "]", "\"", "\"", "'", "'" };
                    for (int i = 0; i < cArray.Length; i++)
                        WordReplace(false, cArray[i], eArray[i], s);
                }, suspendScreen: true);
            }
            finally
            {
                if (quotesChanged) WordApp.Options.AutoFormatAsYouTypeReplaceQuotes = true;
            }
        }

        private void btnFormatFrame2txt_Click(object sender, RibbonControlEventArgs e) => Frame2txt();

        private void Frame2txt()
        {
            WithUndo("文本框转文字", () =>
            {
                if (WordApp.Selection.ShapeRange.Count > 0)
                {
                    MSWord.Shape sh = WordApp.Selection.ShapeRange[1];
                    // 线条、图片等形状没有文字，直接读 TextRange 会抛错
                    if (sh.TextFrame != null && sh.TextFrame.HasText != 0)
                    {
                        string t = sh.TextFrame.TextRange.Text;
                        sh.Delete();
                        WordApp.Selection.TypeText(t);
                    }
                }
            });
        }

        private void btnFormatParaPage_Click(object sender, RibbonControlEventArgs e)
        {
            try { WordApp.Run("ParaPageBreakBefore"); }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source +
                    "\r\n\r\n本插件不自带 ParaPageBreakBefore 宏，请先在文档中定义该宏。",
                    "所选段落另起一页", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }
    }
}