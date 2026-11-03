using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Windows.Forms;
using MSWord = Microsoft.Office.Interop.Word;
using Microsoft.Office.Tools.Ribbon;

namespace 公文排版
{
    public partial class Ribbon1
    {
        private void selectCurrentPage()
        {
            try
            {
                WordApp.ActiveWindow.ActivePane.View.SeekView = MSWord.WdSeekView.wdSeekMainDocument;
                WordApp.ActiveDocument.Bookmarks["\\page"].Range.Select();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "选择整页时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void SelectShape()
        {
            try
            {
                if (WordApp.ActiveDocument != null)
                    WordApp.ActiveDocument.Shapes.SelectAll();
            }
            catch (Exception ex) { WordApp.StatusBar = ex.Message; }
        }

        private void ConverSharp(int type = 1)
        {
            try
            {
                int i = 0;
                WithUndo("转换图片环绕方式", () =>
                {
                    // ConvertToShape 会把该图形从 InlineShapes 实时集合中移除，
                    // 边遍历边转换会隔项漏转：先快照，再从后往前处理
                    var targets = new List<MSWord.InlineShape>();
                    foreach (MSWord.InlineShape shape in WordApp.ActiveDocument.InlineShapes)
                        targets.Add(shape);

                    for (int k = targets.Count - 1; k >= 0; k--)
                    {
                        MSWord.InlineShape shape = targets[k];
                        switch (type)
                        {
                            case 1: shape.ConvertToShape(); i++; break;
                            case 2: shape.ConvertToShape().WrapFormat.Type = MSWord.WdWrapType.wdWrapSquare; i++; break;
                            case 3: shape.ConvertToShape().WrapFormat.Type = MSWord.WdWrapType.wdWrapTopBottom; i++; break;
                        }
                    }
                });
                WordApp.StatusBar = "已转换 " + i + "个图形!";
            }
            catch (Exception ex) { MessageBox.Show(ex.Message); }
        }

        private void ConverUnderShape()
        {
            int i = 0;
            try
            {
                // 原实现在这里只调了 StartCustomRecord，从未 EndCustomRecord：
                // 每次点击都在撤销栈上留下一条永不闭合的记录，之后的编辑都被并进它。
                WithUndo("转换衬于文字下图片", () =>
                {
                    foreach (MSWord.Shape shape in WordApp.ActiveDocument.Shapes)
                    {
                        if (shape.WrapFormat.Type == MSWord.WdWrapType.wdWrapBehind)
                        {
                            shape.WrapFormat.Type = MSWord.WdWrapType.wdWrapFront;
                            i++;
                        }
                    }
                });
            }
            catch (Exception ex) { WordApp.StatusBar = ex.Message; }
            finally
            {
                MessageBox.Show("共转换 " + i + "个衬于文字下方的图形为浮于文字上方!", "小恐龙公文排版助手");
            }
        }

        private void delPageHeader()
        {
            try
            {
                WithUndo("删除页眉", () =>
                {
                    WordApp.ScreenUpdating = false;
                    if (WordApp.ActiveWindow.ActivePane.View.SeekView != MSWord.WdSeekView.wdSeekCurrentPageHeader)
                                        WordApp.ActiveWindow.ActivePane.View.SeekView = MSWord.WdSeekView.wdSeekCurrentPageHeader;
                    WordApp.Selection.WholeStory();
                    WordApp.Selection.Delete();
                    WordApp.Selection.ClearFormatting();

                    var style = WordApp.ActiveDocument.Styles.Add("公文:页眉", MSWord.WdStyleType.wdStyleTypeParagraph);
                    style.set_BaseStyle("");
                    WordApp.Selection.set_Style(style);

                    WordApp.ActiveWindow.ActivePane.View.SeekView = MSWord.WdSeekView.wdSeekMainDocument;
                });
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "删除页面横线失败",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
            finally { WordApp.ScreenUpdating = true; }
        }

        private void BtnSelectSharp_Click(object sender, RibbonControlEventArgs e)
        {
            SelectShape();
            Globals.Ribbons.Ribbon1.Tabs[0].RibbonUI.ActivateTabMso("TabPictureToolsFormat");
        }

        private void BtnSelectTables_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                if (WordApp.ActiveDocument.ProtectionType >= 0)
                {
                    WordApp.StatusBar = "文档受到保护,无法选择!";
                    return;
                }
                if (WordApp.ActiveDocument != null)
                {
                    WordApp.Selection.Collapse(MSWord.WdCollapseDirection.wdCollapseEnd);
                    foreach (MSWord.Table table in WordApp.ActiveDocument.Tables)
                        table.Range.Editors.Add(-1);
                    WordApp.ActiveDocument.SelectAllEditableRanges(-1);
                    WordApp.ActiveDocument.DeleteAllEditableRanges(-1);
                    WordApp.ActiveWindow.View.ShadeEditableRanges = 0;
                    Globals.Ribbons.Ribbon1.Tabs[0].RibbonUI.ActivateTabMso("TabTableToolsDesign");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n" + ex.Source, "选择所有表格时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void btnSelectCurrentPage_Click(object sender, RibbonControlEventArgs e) => selectCurrentPage();
        private void BtnHeadDelete_Click(object sender, RibbonControlEventArgs e) => delPageHeader();
        private void btnSharp2Top_Click(object sender, RibbonControlEventArgs e) => ConverUnderShape();
        private void btnSharp2OnText_Click(object sender, RibbonControlEventArgs e) => ConverSharp();
        private void btnSharp2Wrapping_Click(object sender, RibbonControlEventArgs e) => ConverSharp(2);
        private void btnSharp2TopBonttom_Click(object sender, RibbonControlEventArgs e) => ConverSharp(3);

        private void groupTest_DialogLauncherClick(object sender, RibbonControlEventArgs e)
        {
            try
            {
                MSWord.Document doc = WordApp.ActiveDocument;
                // 判据是"有没有落盘位置"，不是"有没有改动"：改过内容的已保存文档同样 !Saved，
                // 原先会被直接挡掉，而且一声不响。
                if (string.IsNullOrEmpty(doc.Path))
                {
                    MessageBox.Show("文档还没有保存，没有可以定位的文件夹。", "打开文档所在文件夹",
                        MessageBoxButtons.OK, MessageBoxIcon.Information);
                    return;
                }
                string docPath = doc.FullName;
                var uriFile = new Uri(docPath);
                if (uriFile.IsFile)
                {
                    Process.Start("explorer.exe", "/select,\"" + docPath + "\"");
                    return;
                }

                // 网上位置（OneDrive/SharePoint）：去掉 scheme、主机、账号段后映射到本地同步目录
                string oneDriveRoot = Environment.GetEnvironmentVariable("OneDrive");
                if (string.IsNullOrEmpty(oneDriveRoot))
                {
                    MessageBox.Show("文档位于网上位置，但本机没有 OneDrive 同步目录，无法定位。\r\n" + docPath,
                        "打开文档所在文件夹", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                    return;
                }
                string shortName = docPath;
                for (int i = 0; i < 4; i++)
                {
                    int index = shortName.IndexOf('/');
                    if (index < 0) break;
                    shortName = shortName.Substring(index + 1);
                }
                string localPath = System.IO.Path.Combine(oneDriveRoot, shortName.Replace('/', '\\'));
                // URL 层数与本地目录不是永远一一对应，对不上时说明清楚，别让资源管理器打开一个不相干的文件夹
                if (!System.IO.File.Exists(localPath))
                {
                    MessageBox.Show("未能在本机 OneDrive 目录中找到该文档的本地副本，无法定位。\r\n" + localPath,
                        "打开文档所在文件夹", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                    return;
                }
                Process.Start("explorer.exe", "/select,\"" + localPath + "\"");
            }
            catch (UriFormatException ex)
            {
                WordApp.StatusBar = ex.Message + "\r\n\r\n" + ex.Source;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "打开文档所在文件夹时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void btnSelectObject_Click(object sender, RibbonControlEventArgs e)
        {
            try { WordApp.Run("SelectDrawingObjects"); }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "选择对象",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }
    }
}