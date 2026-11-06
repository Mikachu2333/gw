using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Windows.Forms;
using MSWord = Microsoft.Office.Interop.Word;
using Microsoft.Office.Tools.Ribbon;

namespace gw_mika
{
    public partial class Ribbon1
    {
        /// <summary>
        /// 确保文档已保存到磁盘、且没有未保存的修改。返回 false 表示用户取消或保存失败。
        /// 原实现只判断 Path 非空——"存过位置"不等于"当前内容已落盘"：SaveDoc 用 SaveAs2
        /// 会把活动文档就地转成 .doc，随后再从磁盘重开原文件，未保存的改动就只剩在副本里。
        /// </summary>
        private bool EnsureDocumentSaved(string title)
        {
            MSWord.Document doc = WordApp.ActiveDocument;
            if (doc.Path.Length != 0 && doc.Saved) return true;

            string ask = doc.Path.Length == 0
                ? "生成副本前请先保存本文档,要保存文档吗?"
                : "本文档有未保存的修改,生成副本前需要先保存。\r\n要现在保存吗?";
            var dr = MessageBox.Show(ask, title,
                MessageBoxButtons.YesNo, MessageBoxIcon.Question);
            if (dr != DialogResult.Yes) return false;
            try
            {
                doc.Save();
                return true;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n由于文档未保存,生成副本操作被取消.", "生成副本失败",
                    MessageBoxButtons.OK, MessageBoxIcon.Stop);
                return false;
            }
        }

        private void SavePdf(string fileName)
        {
            WordApp.StatusBar = "正在生成 PDF 格式副本...";
            WordApp.ActiveDocument.ExportAsFixedFormat(fileName,
                MSWord.WdExportFormat.wdExportFormatPDF, true, 0, 0, 0, 0, 0, false, false,
                MSWord.WdExportCreateBookmarks.wdExportCreateHeadingBookmarks);
            WordApp.StatusBar = "已生成 PDF 格式副本:" + fileName;
        }

        /// <summary>
        /// SaveAs2 是 Word 2010 才加进来的成员，Word 2007 上调用会抛“成员不存在”。
        /// 参数顺序两代一致，按宿主版本二选一。
        /// </summary>
        private void SaveAsCompat(MSWord.Document doc, string fileName, MSWord.WdSaveFormat format)
        {
            if (hostVersion.StartsWith("12.")) doc.SaveAs(fileName, format);
            else doc.SaveAs2(fileName, format);
        }

        private void SaveDoc(string fileName, string oldFile)
        {
            WordApp.StatusBar = "正在生成 Word97-2003 格式副本...";
            // SaveAs2 不是"另存副本"：它把活动文档就地变成这个 .doc 文件。
            // 原先只补了一句 Documents.Open(oldFile) 再用 Windows[w-1] 激活——
            // Windows 集合是 1 基的，w-1 取到的是倒数第二个窗口而不是刚打开的原文档，
            // 于是用户以为自己在原文档上继续编辑，实际一直在 .doc 副本上改。
            MSWord.Document copyDoc = WordApp.ActiveDocument;
            SaveAsCompat(copyDoc, fileName, MSWord.WdSaveFormat.wdFormatDocument97);

            // 副本已经落盘，接下来只负责把原文档重新打开并激活。
            // 打开失败时绝不能关掉副本：那是用户此刻唯一还开着的窗口。
            MSWord.Document original;
            try
            {
                original = WordApp.Documents.Open(oldFile);
            }
            catch (Exception ex)
            {
                WordApp.StatusBar = "副本已生成,但原文档未能重新打开:" + fileName;
                MessageBox.Show("已生成 Word97-2003 格式副本:\r\n" + fileName +
                    "\r\n\r\n原文档未能重新打开,当前窗口是副本,请自行另存。\r\n\r\n" +
                    ex.Message, "原文档打开失败", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            copyDoc.Close(false);       // 副本已落盘，不必留在编辑器里占着一个窗口
            original.Activate();

            WordApp.StatusBar = "已生成 Word97-2003 格式副本:" + fileName;
        }

        private void btnSaveAsPDF_Click(object sender, RibbonControlEventArgs e)
        {
            if (!EnsureDocumentSaved("生成PDF副本提示")) return;
            try
            {
                string fp = WordApp.ActiveDocument.Path;
                string fn = Path.GetFileNameWithoutExtension(WordApp.ActiveDocument.Name);
                string outFile = Path.Combine(fp, fn + ".pdf");

                if (File.Exists(outFile))
                {
                    var drr = MessageBox.Show(
                        "文件 \r\n" + outFile + "\r\n已存在! " +
                        "\r\n点击\"是\"将覆盖同名文件.\r\n点击\"否\"将打开保存对话框更改路径或文件名.\r\n点击\"取消\"将取消生成副本.",
                        "生成副本时发现同名文件", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Question);
                    if (drr == DialogResult.No)
                    {
                        using (var sfd = new SaveFileDialog())
                        {
                            sfd.AddExtension = true;
                            sfd.DefaultExt = "pdf";
                            sfd.Filter = "PDF 文件 (*.pdf)|*.pdf|所有文件 (*.*)|*.*";
                            sfd.InitialDirectory = fp;
                            sfd.FileName = outFile;
                            if (sfd.ShowDialog() == DialogResult.OK) SavePdf(sfd.FileName);
                        }
                    }
                    else if (drr == DialogResult.Yes) SavePdf(outFile);
                }
                else SavePdf(outFile);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "生成pdf副本时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void btnSaveAsDoc_Click(object sender, RibbonControlEventArgs e)
        {
            if (!EnsureDocumentSaved("生成DOC副本提示")) return;
            try
            {
                string fp = WordApp.ActiveDocument.Path;
                string fn = WordApp.ActiveDocument.Name;
                string oldFile = Path.Combine(fp, fn);
                string baseName = Path.GetFileNameWithoutExtension(fn);
                string outFile = Path.Combine(fp, baseName + ".doc");

                // 源文档本身就是 .doc 时，outFile 与 oldFile 是同一个文件：
                // SaveAs2 会就地改写它，之后再 Open(oldFile) 打开的已经是转换后的副本。
                if (string.Equals(outFile, oldFile, StringComparison.OrdinalIgnoreCase))
                    outFile = Path.Combine(fp, baseName + "_副本.doc");

                if (File.Exists(outFile))
                {
                    var drr = MessageBox.Show(
                        "文件 \r\n" + outFile + "\r\n已存在! " +
                        "\r\n点击\"是\"将覆盖同名文件.\r\n点击\"否\"将打开保存对话框更改路径或文件名.\r\n点击\"取消\"将取消生成副本.",
                        "生成副本时发现同名文件", MessageBoxButtons.YesNoCancel, MessageBoxIcon.Question);
                    if (drr == DialogResult.No)
                    {
                        using (var sfd = new SaveFileDialog())
                        {
                            sfd.AddExtension = true;
                            sfd.DefaultExt = "doc";
                            sfd.Filter = "Word97-2003格式文档(*.doc)|*.doc|所有文件 (*.*)|*.*";
                            sfd.InitialDirectory = fp;
                            sfd.FileName = outFile;
                            if (sfd.ShowDialog() == DialogResult.OK) SaveDoc(sfd.FileName, oldFile);
                        }
                    }
                    else if (drr == DialogResult.Yes) SaveDoc(outFile, oldFile);
                }
                else SaveDoc(outFile, oldFile);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "生成doc副本时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void btnSaveAsPic_Click(object sender, RibbonControlEventArgs e)
        {
            if (!EnsureDocumentSaved("生成PNG副本提示")) return;
            int done = 0;
            try
            {
                string fp = WordApp.ActiveDocument.Path;
                string baseName = Path.GetFileNameWithoutExtension(WordApp.ActiveDocument.Name);
                MSWord.Pages pages = WordApp.ActiveDocument.ActiveWindow.ActivePane.Pages;

                for (int i = 1; i <= pages.Count; i++)
                {
                    WordApp.StatusBar = "正在将页面转换成图片 " + i + "...";
                    MSWord.Page page = pages[i];
                    using (var st = new MemoryStream((byte[])(page.EnhMetaFileBits)))
                    using (var img = Image.FromStream(st))
                    using (var bmp = img.Width > img.Height ? new Bitmap(img, 1754, 1240) : new Bitmap(img, 1240, 1754))
                    {
                        // 用不含扩展名的 baseName，否则会导出成 “报告.docx_1.png”
                        bmp.Save(Path.Combine(fp, baseName + "_" + i + ".png"), ImageFormat.Png);
                        done++;
                    }
                }
                WordApp.StatusBar = "文字转图片已完成,请在打开的文件夹中查看";
                System.Diagnostics.Process.Start(fp);
            }
            catch (Exception ex)
            {
                // 原先只把错误写进状态栏：状态栏会被后续操作覆盖，
                // 用户往往以为整批完成了，实际只导出了一部分页面
                MessageBox.Show(ex.Message + Environment.NewLine + Environment.NewLine +
                    "已导出 " + done + " 页，本次转换中断。",
                    "文字转图片失败", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void BtnSaveAsJPG_Click(object sender, RibbonControlEventArgs e)
        {
            float dpi = 150;
            try { dpi = Properties.Settings.Default.DPI; } catch { }
            if (dpi <= 0) dpi = 150;   // 设置被改成 0 时 SetResolution 会抛 ArgumentException

            if (!EnsureDocumentSaved("生成JPG副本提示")) return;
            int done = 0;
            try
            {
                string fp = WordApp.ActiveDocument.Path;
                string baseName = Path.GetFileNameWithoutExtension(WordApp.ActiveDocument.Name);
                MSWord.Pages pages = WordApp.ActiveDocument.ActiveWindow.ActivePane.Pages;

                for (int i = 1; i <= pages.Count; i++)
                {
                    WordApp.StatusBar = "正在将页面转换成图片 " + i + "...";
                    MSWord.Page page = pages[i];
                    using (var st = new MemoryStream((byte[])(page.EnhMetaFileBits)))
                    using (var img = Image.FromStream(st))
                    {
                        int w = img.Width > img.Height ? 1754 : 1240;
                        int h = img.Width > img.Height ? 1240 : 1754;
                        using (var b = new Bitmap(w, h))
                        {
                            b.SetResolution(dpi, dpi);
                            using (var g = Graphics.FromImage(b))
                            {
                                g.Clear(Color.White);
                                g.DrawImage(img, 0, 0, w, h);
                            }
                            b.Save(Path.Combine(fp, baseName + "_" + i + ".jpg"), ImageFormat.Jpeg);
                            done++;
                        }
                    }
                }
                WordApp.StatusBar = "文字转图片已完成,请在打开的文件夹中查看";
                System.Diagnostics.Process.Start(fp);
            }
            catch (Exception ex)
            {
                // 原先只把错误写进状态栏：状态栏会被后续操作覆盖，
                // 用户往往以为整批完成了，实际只导出了一部分页面
                MessageBox.Show(ex.Message + Environment.NewLine + Environment.NewLine +
                    "已导出 " + done + " 页，本次转换中断。",
                    "文字转图片失败", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void btnSaveAsPicAt_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                using (var sfd = new SaveFileDialog())
                {
                    sfd.AddExtension = true;
                    sfd.Title = "将当前页面保存为图片,您可以根据需求选择图片格式.";
                    sfd.FileName = DateTime.Now.ToString("yyyyMMdd-hhmmss");
                    sfd.DefaultExt = "png";
                    sfd.Filter = "A4尺寸网络交换图片(*.png)|*.png|原始尺寸网络交换图片(*.png)|*.png|原始尺寸有损压缩图片(*.jpg)|*.jpg|原始尺寸高精度文档图片(*.tiff)|*.tiff|所有文件(*.*)|*.*";
                    if (sfd.ShowDialog() != DialogResult.OK) return;
                    // 第 5 项是“所有文件”，没有对应的保存分支，继续走下去只会静默成功
                    if (sfd.FilterIndex > 4)
                    {
                        MessageBox.Show("请从列表中选择具体的图片格式。", "页面保存图片",
                            MessageBoxButtons.OK, MessageBoxIcon.Information);
                        return;
                    }

                    WordApp.StatusBar = "正在将当前页面保存成图片... ";
                    int i = WordApp.Selection.Information[MSWord.WdInformation.wdActiveEndPageNumber];
                    MSWord.Page page = WordApp.ActiveDocument.ActiveWindow.ActivePane.Pages[i];

                    using (var sr = new MemoryStream((byte[])(page.EnhMetaFileBits)))
                    using (var img = Image.FromStream(sr))
                    {
                        switch (sfd.FilterIndex)
                        {
                            case 1:
                                using (var png = img.Width > img.Height ? new Bitmap(img, 1754, 1240) : new Bitmap(img, 1240, 1754))
                                    png.Save(sfd.FileName, ImageFormat.Png);
                                break;
                            case 2:
                                img.Save(sfd.FileName, ImageFormat.Png);
                                break;
                            case 3:
                                using (var b = new Bitmap(img.Width, img.Height))
                                {
                                    // 元文件可能没有分辨率信息，SetResolution(0) 会抛 ArgumentException
                                    float dpiX = img.HorizontalResolution > 0 ? img.HorizontalResolution : 96;
                                    float dpiY = img.VerticalResolution > 0 ? img.VerticalResolution : 96;
                                    b.SetResolution(dpiX, dpiY);
                                    using (var g = Graphics.FromImage(b))
                                    {
                                        g.Clear(Color.White);
                                        g.DrawImageUnscaled(img, 0, 0);
                                    }
                                    b.Save(sfd.FileName, ImageFormat.Jpeg);
                                }
                                break;
                            case 4:
                                img.Save(sfd.FileName, ImageFormat.Tiff);
                                break;
                        }
                    }
                    WordApp.StatusBar = "页面保存图片成功!";
                    System.Diagnostics.Process.Start(sfd.FileName);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
                WordApp.StatusBar = "页面保存图片失败.";
            }
        }

        private void GlyBak_Click(object sender, RibbonControlEventArgs e)
        {
            switch (glyBak.SelectedItemIndex)
            {
                case 0: btnSaveAsPDF_Click(sender, e); break;
                case 1: btnSaveAsDoc_Click(sender, e); break;
                case 2: btnSaveAsPic_Click(sender, e); break;
                case 3: BtnSaveAsJPG_Click(sender, e); break;
            }
        }

        private void GlyBak_ItemsLoading(object sender, RibbonControlEventArgs e)
        {
            // WPS 下如需动态图标可在此处理
        }
    }
}