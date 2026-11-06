using System;
using System.Drawing;
using System.Windows.Forms;
using MSWord = Microsoft.Office.Interop.Word;
using MSOffice = Microsoft.Office.Core;
using Microsoft.Office.Tools.Ribbon;

namespace gw_mika
{
    public partial class Ribbon1
    {
        /// <summary>设置 Word 所选文字字体(名称、大小、粗体、斜体)</summary>
        internal void SetFont(Font myFont)
        {
            if (myFont == null) return;
            try
            {
                WordApp.Selection.Font.Name = myFont.Name;
                WordApp.Selection.Font.Size = myFont.SizeInPoints;
                // 粗/斜只在配置本身为真时才赋值，会让原来的粗体残留下来（"设为正文"去不掉粗体）
                WordApp.Selection.Font.Bold = myFont.Bold ? 1 : 0;
                WordApp.Selection.Font.Italic = myFont.Italic ? 1 : 0;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "设置字体时出错");
            }
        }

        /// <summary>设置标题编号</summary>
        private void SetTitle(object sender, int index = 1)
        {
            try
            {
                int at = Convert.ToInt32(((RibbonButton)sender).Tag);
                if (at <= 0) at = 1;

                string numberFormat;
                MSWord.WdListNumberStyle numberStyle;
                MSWord.WdOutlineLevel outlineLevel;
                switch (index)
                {
                    case 2:
                        numberStyle = MSWord.WdListNumberStyle.wdListNumberStyleSimpChinNum3;
                        numberFormat = "（%1）";
                        outlineLevel = MSWord.WdOutlineLevel.wdOutlineLevel2;
                        break;
                    case 3:
                        numberStyle = MSWord.WdListNumberStyle.wdListNumberStyleArabic;
                        numberFormat = "%1．";
                        outlineLevel = MSWord.WdOutlineLevel.wdOutlineLevel3;
                        break;
                    case 4:
                        numberStyle = MSWord.WdListNumberStyle.wdListNumberStyleArabic;
                        numberFormat = "（%1）";
                        outlineLevel = MSWord.WdOutlineLevel.wdOutlineLevel4;
                        break;
                    default:
                        numberStyle = MSWord.WdListNumberStyle.wdListNumberStyleSimpChinNum3;
                        numberFormat = "%1、";
                        outlineLevel = MSWord.WdOutlineLevel.wdOutlineLevel1;
                        break;
                }

                // 原先每次点击都 ListTemplates.Add()：文档里的列表模板只增不减，
                // 反复编号几十次后文件明显变大。定义相同的模板直接复用。
                MSWord.ListTemplate myTemplate = null;
                foreach (MSWord.ListTemplate t in WordApp.ActiveDocument.ListTemplates)
                {
                    MSWord.ListLevel lvl = t.ListLevels[1];
                    if (lvl.NumberFormat == numberFormat && lvl.StartAt == at && lvl.NumberStyle == numberStyle &&
                        lvl.TrailingCharacter == MSWord.WdTrailingCharacter.wdTrailingNone &&
                        lvl.TextPosition == 0 && lvl.NumberPosition == 0)
                    {
                        myTemplate = t;
                        break;
                    }
                }

                if (myTemplate == null)
                {
                    myTemplate = WordApp.ActiveDocument.ListTemplates.Add();
                    myTemplate.ListLevels[1].TrailingCharacter = MSWord.WdTrailingCharacter.wdTrailingNone;
                    myTemplate.ListLevels[1].TextPosition = 0;
                    myTemplate.ListLevels[1].NumberPosition = 0;
                    myTemplate.ListLevels[1].StartAt = at;
                    myTemplate.ListLevels[1].NumberStyle = numberStyle;
                    myTemplate.ListLevels[1].NumberFormat = numberFormat;
                }

                WordApp.Selection.ParagraphFormat.OutlineLevel = outlineLevel;
                WordApp.Selection.Range.ListFormat.ApplyListTemplate(myTemplate);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "设置标题格式时出错!",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void MnuTitle4_item_Click(object sender, RibbonControlEventArgs e)
        {
            WithUndo("所选文字设为四级标题", () =>
            {
                SetFont(iniTitle4);
                SetTitle(sender, 4);
            });
        }

        private void MnuTitle3_item_Click(object sender, RibbonControlEventArgs e)
        {
            WithUndo("所选文字设为三级标题", () =>
            {
                SetFont(iniTitle3);
                SetTitle(sender, 3);
            });
        }

        private void MnuTitle2_item_Click(object sender, RibbonControlEventArgs e)
        {
            WithUndo("所选文字设为二级标题", () =>
            {
                SetFont(iniTitle2);
                SetTitle(sender, 2);
            });
        }

        private void MnuTitle1_item_Click(object sender, RibbonControlEventArgs e)
        {
            WithUndo("所选文字设为一级标题", () =>
            {
                SetFont(iniTitle1);
                SetTitle(sender, 1);
            });
        }

        private void BtnNormal_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                WithUndo("所选文字设为公文:正文", () => SetFont(iniNormal));
                WithUndo("所选文字取消编号、大纲级别并首行缩进2字符", () =>
                {
                    WordApp.Selection.Range.ListFormat.RemoveNumbers(MSWord.WdNumberType.wdNumberAllNumbers);
                    WordApp.Selection.ParagraphFormat.OutlineLevel = MSWord.WdOutlineLevel.wdOutlineLevelBodyText;
                    // 公文正文规范：首行缩进 2 字符
                    WordApp.Selection.ParagraphFormat.CharacterUnitFirstLineIndent = 2;
                });
            }
            catch (Exception ex) { MessageBox.Show(ex.Message); }
        }

        private void btnTitleHei_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                WithUndo("所选文字设为公文:标题", () => SetFont(iniTitle));
                WithUndo("设置标题居中", () =>
                {
                    WordApp.Selection.ParagraphFormat.Alignment = MSWord.WdParagraphAlignment.wdAlignParagraphCenter;
                });
            }
            catch (Exception ex) { MessageBox.Show(ex.Message); }
        }

        private void cobFonts_TextChanged(object sender, RibbonControlEventArgs e)
        {
            string fontName = cobFonts.Text;
            // RibbonComboBox 只有 TextChanged：手打时每个字符都进来一次，会把选区改成半个字体名，故只认列表里的完整名字
            if (!IsFontListItem(fontName)) return;
            try
            {
                WithUndo("所选文字设为二号" + fontName, () =>
                {
                    WordApp.Selection.Font.Name = fontName;
                    WordApp.Selection.Font.Size = 22;
                });
                WithUndo("设置标题居中", () =>
                {
                    WordApp.Selection.ParagraphFormat.Alignment = MSWord.WdParagraphAlignment.wdAlignParagraphCenter;
                });
            }
            catch (Exception ex) { MessageBox.Show(ex.Message); }
        }

        private bool IsFontListItem(string label)
        {
            if (string.IsNullOrEmpty(label)) return false;
            foreach (var item in cobFonts.Items)
            {
                if (string.Equals(item.Label, label, StringComparison.Ordinal)) return true;
            }
            return false;
        }

        private void btnHead_Click(object sender, RibbonControlEventArgs e)
        {
            WithUndo("设置所选字体", () =>
            {
                SetFont(iniHead);
            });
        }

        private void btnName_Click(object sender, RibbonControlEventArgs e)
        {
            WithUndo("设置所选字体", () =>
            {
                SetFont(iniName);
            });
        }

        private void btnFoot_Click(object sender, RibbonControlEventArgs e)
        {
            WithUndo("设置所选字体", () =>
            {
                SetFont(iniFoot);
            });
        }

        private void btnUnderDot_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                WithUndo("着重号", () =>
                {
                    if (WordApp.Selection.Font.EmphasisMark != MSWord.WdEmphasisMark.wdEmphasisMarkUnderSolidCircle)
                                        WordApp.Selection.Font.EmphasisMark = MSWord.WdEmphasisMark.wdEmphasisMarkUnderSolidCircle;
                    else
                                        WordApp.Selection.Font.EmphasisMark = MSWord.WdEmphasisMark.wdEmphasisMarkNone;
                });
            }
            catch (Exception ex) { MessageBox.Show(ex.Message); }
        }

        private void btnHideFont_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                WithUndo("隐藏", () =>
                {
                    int hide = WordApp.Selection.Font.Hidden;
                    WordApp.Selection.Font.Hidden = hide == -1 ? 0 : -1;
                });
            }
            catch (Exception ex) { MessageBox.Show(ex.Message); }
        }

        private void BtnFontChangeDialog_Click(object sender, RibbonControlEventArgs e)
        {
            using (var f = new FrmFontChangeDialog())
                f.ShowDialog();
        }

        private void btnFontFSgb2312_Click(object sender, RibbonControlEventArgs e) => FontSwitch("仿宋_GB2312", "仿宋");
        private void btnFontKTgb2312_Click(object sender, RibbonControlEventArgs e) => FontSwitch("楷体_GB2312", "楷体");
        private void btnFontKT_Click(object sender, RibbonControlEventArgs e) => FontSwitch("楷体", "楷体_GB2312");
        private void btnFontFS_Click(object sender, RibbonControlEventArgs e) => FontSwitch("仿宋", "仿宋_GB2312");

        private void btnFontBS2HT_Click(object sender, RibbonControlEventArgs e)
        {
            FontSwitch("方正小标宋_GBK", "黑体");
            FontSwitch("方正小标宋简体", "黑体");
            FontSwitch("方正小标宋", "黑体");
        }

        private void btnFontHT2BS_Click(object sender, RibbonControlEventArgs e) => FontSwitch("黑体", "方正小标宋_GBK");

        /// <summary>方正小标宋(简体) → 方正小标宋_GBK</summary>
        private void btnFontBS2GBK_Click(object sender, RibbonControlEventArgs e)
        {
            // 不同来源的文档里该字体可能写作"方正小标宋简体"或"方正小标宋"，两种都要替换
            FontSwitch("方正小标宋简体", "方正小标宋_GBK");
            FontSwitch("方正小标宋", "方正小标宋_GBK");
        }

        /// <summary>方正小标宋_GBK → 方正小标宋(简体)</summary>
        private void btnFontGBK2BS_Click(object sender, RibbonControlEventArgs e)
        {
            FontSwitch("方正小标宋_GBK", "方正小标宋简体");
            FontSwitch("方正小标宋GBK", "方正小标宋简体");
        }

        private static System.Collections.Generic.HashSet<string> installedFontNames;

        /// <summary>字体是否已安装（枚举字体集合较慢，结果缓存）</summary>
        private static bool IsFontInstalled(string fontName)
        {
            if (installedFontNames == null)
            {
                var names = new System.Collections.Generic.HashSet<string>(StringComparer.OrdinalIgnoreCase);
                using (var collection = new System.Drawing.Text.InstalledFontCollection())
                {
                    foreach (System.Drawing.FontFamily family in collection.Families)
                        names.Add(family.Name);
                }
                installedFontNames = names;
            }
            return installedFontNames.Contains(fontName);
        }

        private void FontSwitch(string oldFont, string newFont)
        {
            try
            {
                // Find.Execute 找不到目标时返回 false 且不报错，
                // 原先无条件提示“已替换”，用户会以为字体改过了
                bool replaced = false;
                // 全文替换字体一次涉及成百上千处，不进撤销记录用户只能一处一处回退
                WithUndo("替换字体：" + oldFont + " → " + newFont, () =>
                {
                    WordApp.Selection.Find.ClearFormatting();
                    WordApp.Selection.Find.Font.NameFarEast = oldFont;
                    WordApp.Selection.Find.Replacement.ClearFormatting();
                    WordApp.Selection.Find.Replacement.Font.NameFarEast = newFont;
                    replaced = WordApp.Selection.Find.Execute("", false, false, false, false, false, true,
                        MSWord.WdFindWrap.wdFindContinue, true, "", MSWord.WdReplace.wdReplaceAll);
                });

                if (!replaced)
                {
                    WordApp.StatusBar = String.Format("文档中未找到字体{0},未做替换.", oldFont);
                    return;
                }
                if (!IsFontInstalled(newFont))
                {
                    WordApp.StatusBar = String.Format("字体{0}已替换为{1},但本机未安装该字体,显示会回退到其它字体.", oldFont, newFont);
                    return;
                }
                WordApp.StatusBar = String.Format("字体{0}已替换为{1}.", oldFont, newFont);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "替换字体时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }
    }
}