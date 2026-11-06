using System;
using System.Windows.Forms;
using Microsoft.Office.Tools.Ribbon;
using MSWord = Microsoft.Office.Interop.Word;

namespace gw_mika
{
    public partial class Ribbon1
    {
        /// <summary>设置页码位置: 0 居中, 1 外侧, 2 居右</summary>
        private void PageNumberAligment(int position)
        {
            try
            {
                if (WordApp.ActiveWindow.ActivePane.View.Type == MSWord.WdViewType.wdNormalView ||
                    WordApp.ActiveWindow.ActivePane.View.Type == MSWord.WdViewType.wdOutlineView)
                {
                    WordApp.ActiveWindow.ActivePane.View.Type = MSWord.WdViewType.wdPrintView;
                }
                // 屏幕刷新由调用方的 WithUndo(..., suspendScreen: true) 统一开关，
                // 这里不再自己置位：两处都管会在异常路径上互相覆盖。
                switch (position)
                {
                    case 0:
                        foreach (MSWord.Section s in WordApp.ActiveDocument.Sections)
                        {
                            s.PageSetup.OddAndEvenPagesHeaderFooter = 0;
                            s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterPrimary].Range.ParagraphFormat.Alignment = MSWord.WdParagraphAlignment.wdAlignParagraphCenter;
                            s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterEvenPages].Range.ParagraphFormat.Alignment = MSWord.WdParagraphAlignment.wdAlignParagraphCenter;
                            s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterFirstPage].Range.ParagraphFormat.Alignment = MSWord.WdParagraphAlignment.wdAlignParagraphCenter;

                            // 只写第 1 节和断开链接的节，链接到前一节的页脚与前一节共用内容，
                            // 逐节重复写会在同一份页脚里叠加多个页码
                            MSWord.HeaderFooter primary = s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterPrimary];
                            if (s.Index == 1 || !primary.LinkToPrevious)
                                AppendPageNumber(primary, MSWord.WdParagraphAlignment.wdAlignParagraphCenter);
                            if (s.PageSetup.DifferentFirstPageHeaderFooter != 0)
                                AppendPageNumber(s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterFirstPage], MSWord.WdParagraphAlignment.wdAlignParagraphCenter);
                        }
                        break;

                    case 1:
                        if (WordApp.ActiveWindow.Panes[1].Pages.Count <= 1)
                        {
                            MessageBox.Show("文档仅为1页时,无法设置外侧页码.", "插入页码",
                                MessageBoxButtons.OK, MessageBoxIcon.Error);
                            return;
                        }
                        if (FooterHasContent() &&
                            MessageBox.Show("外侧页码会整段替换页脚,页脚里已有的文字将被清除(可用撤销恢复)。\r\n确定继续吗?",
                                "插入页码", MessageBoxButtons.YesNo, MessageBoxIcon.Warning) != DialogResult.Yes)
                        {
                            return;
                        }
                        if (IsWps)
                        {
                            WordApp.ActiveDocument.PageSetup.OddAndEvenPagesHeaderFooter = -1;
                            WordApp.ActiveWindow.ActivePane.View.SeekView = MSWord.WdSeekView.wdSeekPrimaryFooter;
                            WordApp.Selection.ParagraphFormat.CharacterUnitRightIndent = 1;
                            WordApp.Selection.ParagraphFormat.Alignment = MSWord.WdParagraphAlignment.wdAlignParagraphRight;
                            InsertNumber();
                            WordApp.ActiveWindow.ActivePane.View.SeekView = MSWord.WdSeekView.wdSeekMainDocument;
                            WordApp.ActiveWindow.ActivePane.View.SeekView = MSWord.WdSeekView.wdSeekEvenPagesFooter;
                            WordApp.Selection.ParagraphFormat.CharacterUnitFirstLineIndent = 1;
                            WordApp.Selection.ParagraphFormat.Alignment = MSWord.WdParagraphAlignment.wdAlignParagraphLeft;
                            InsertNumber();
                            WordApp.ActiveWindow.ActivePane.View.SeekView = MSWord.WdSeekView.wdSeekMainDocument;
                        }
                        else
                        {
                            foreach (MSWord.Section s in WordApp.ActiveDocument.Sections)
                            {
                                s.PageSetup.OddAndEvenPagesHeaderFooter = -1;
                                MSWord.Range r;

                                // 链接到前一节的页脚与前一节共用内容，跳过以免叠加
                                if (s.Index > 1 && s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterPrimary].LinkToPrevious)
                                    continue;

                                r = s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterPrimary].Range;
                                r.Font.Size = (float)Math.Round(iniPageNumber.SizeInPoints, 1);
                                r.Font.Name = iniPageNumber.Name;
                                r.Font.Bold = iniPageNumber.Bold ? 1 : 0;
                                r.Font.Italic = iniPageNumber.Italic ? 1 : 0;
                                r.ParagraphFormat.Alignment = MSWord.WdParagraphAlignment.wdAlignParagraphRight;
                                r.Text = "— ";
                                r.Collapse(MSWord.WdCollapseDirection.wdCollapseEnd);
                                r.Fields.Add(r, MSWord.WdFieldType.wdFieldEmpty, "PAGE \\* Arabic");
                                r = s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterPrimary].Range;
                                r.Collapse(MSWord.WdCollapseDirection.wdCollapseEnd);
                                r.Text = " —";
                                r.ParagraphFormat.CharacterUnitRightIndent = 1;

                                r = s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterEvenPages].Range;
                                r.Font.Size = (float)Math.Round(iniPageNumber.SizeInPoints, 1);
                                r.Font.Name = iniPageNumber.Name;
                                r.Font.Bold = iniPageNumber.Bold ? 1 : 0;
                                r.Font.Italic = iniPageNumber.Italic ? 1 : 0;
                                r.ParagraphFormat.Alignment = MSWord.WdParagraphAlignment.wdAlignParagraphLeft;
                                r.Text = "— ";
                                r.Collapse(MSWord.WdCollapseDirection.wdCollapseEnd);
                                r.Fields.Add(r, MSWord.WdFieldType.wdFieldEmpty, "PAGE \\* Arabic");
                                r = s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterEvenPages].Range;
                                r.Collapse(MSWord.WdCollapseDirection.wdCollapseEnd);
                                r.Text = " —";
                                r.ParagraphFormat.CharacterUnitFirstLineIndent = 1;
                            }
                        }
                        break;

                    case 2:
                        foreach (MSWord.Section s in WordApp.ActiveDocument.Sections)
                        {
                            s.PageSetup.OddAndEvenPagesHeaderFooter = 0;
                            s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterPrimary].Range.ParagraphFormat.Alignment = MSWord.WdParagraphAlignment.wdAlignParagraphRight;
                            s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterEvenPages].Range.ParagraphFormat.Alignment = MSWord.WdParagraphAlignment.wdAlignParagraphRight;
                            s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterFirstPage].Range.ParagraphFormat.Alignment = MSWord.WdParagraphAlignment.wdAlignParagraphRight;

                            MSWord.HeaderFooter primary = s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterPrimary];
                            if (s.Index == 1 || !primary.LinkToPrevious)
                                AppendPageNumber(primary, MSWord.WdParagraphAlignment.wdAlignParagraphRight);
                            if (s.PageSetup.DifferentFirstPageHeaderFooter != 0)
                                AppendPageNumber(s.Footers[MSWord.WdHeaderFooterIndex.wdHeaderFooterFirstPage], MSWord.WdParagraphAlignment.wdAlignParagraphRight);
                        }
                        break;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "PageNumberAligment 方法出错");
            }
        }

        // 外侧页码用 Range.Text 整段替换页脚，页脚里原有的文字会被直接抹掉，
        // 所以动手前先探测有没有东西会被吃掉。页脚末尾的段落标记不算内容。
        private bool FooterHasContent()
        {
            foreach (MSWord.Section s in WordApp.ActiveDocument.Sections)
            {
                MSWord.WdHeaderFooterIndex[] indexes =
                {
                    MSWord.WdHeaderFooterIndex.wdHeaderFooterPrimary,
                    MSWord.WdHeaderFooterIndex.wdHeaderFooterEvenPages
                };
                foreach (MSWord.WdHeaderFooterIndex idx in indexes)
                {
                    string text = s.Footers[idx].Range.Text;
                    if (string.IsNullOrEmpty(text)) continue;
                    if (text.Trim('\r', '\n', '\a', '\t', ' ').Length > 0) return true;
                }
            }
            return false;
        }

        /// <summary>在页脚末尾追加 “— 1 —” 形式的页码，页脚已有内容则跳过</summary>
        private void AppendPageNumber(MSWord.HeaderFooter footer, MSWord.WdParagraphAlignment alignment)
        {
            MSWord.Range r = footer.Range;
            // 页脚末尾总带一个段落标记，去掉后才是真正的内容
            string text = r.Text ?? "";
            if (text.Trim('\r', '\n', '\a', '\t', ' ').Length > 0 || r.Fields.Count > 0)
                return;

            r.Font.Size = (float)Math.Round(iniPageNumber.SizeInPoints, 1);
            r.Font.Name = iniPageNumber.Name;
            r.Font.Bold = iniPageNumber.Bold ? 1 : 0;
            r.Font.Italic = iniPageNumber.Italic ? 1 : 0;
            r.ParagraphFormat.Alignment = alignment;
            r.Text = "— ";
            r.Collapse(MSWord.WdCollapseDirection.wdCollapseEnd);
            r.Fields.Add(r, MSWord.WdFieldType.wdFieldEmpty, "PAGE \\* Arabic");
            r = footer.Range;
            r.Collapse(MSWord.WdCollapseDirection.wdCollapseEnd);
            r.Text = " —";
        }

        /// <summary>插入页码,格式为 — 1 —</summary>
        private void InsertNumber()
        {
            try
            {
                WordApp.Selection.Font.Size = (float)Math.Round(iniPageNumber.SizeInPoints, 1);
                WordApp.Selection.Font.Name = iniPageNumber.Name;
                WordApp.Selection.Font.Bold = iniPageNumber.Bold ? 1 : 0;
                WordApp.Selection.Font.Italic = iniPageNumber.Italic ? 1 : 0;
                WordApp.Selection.TypeText("— ");
                WordApp.Selection.Fields.Add(WordApp.Selection.Range, MSWord.WdFieldType.wdFieldEmpty, "PAGE \\* Arabic");
                WordApp.Selection.TypeText(" —");
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "InsertNumber 方法出错");
            }
        }

        private void btnNumberCenter_Click(object sender, RibbonControlEventArgs e)
        {
            WithUndo("插入居中页码", () =>
            {
                PageNumberAligment(0);
            }, suspendScreen: true);
        }

        private void BtnNumberRight_Click(object sender, RibbonControlEventArgs e)
        {
            WithUndo("插入右侧页码", () =>
            {
                PageNumberAligment(2);
            }, suspendScreen: true);
        }

        private void btnNumberOutside_Click(object sender, RibbonControlEventArgs e)
        {
            WithUndo("插入外侧页码", () =>
            {
                PageNumberAligment(1);
            }, suspendScreen: true);
        }

        private void BtnNumberOnLocation_Click(object sender, RibbonControlEventArgs e)
        {
            WithUndo("光标处插入页码", () =>
            {
                InsertNumber();
            }, suspendScreen: true);
        }
    }
}