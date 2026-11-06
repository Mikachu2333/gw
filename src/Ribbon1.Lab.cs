using System;
using System.Diagnostics;
using System.Windows.Forms;
using Microsoft.Office.Tools.Ribbon;
using MSWord = Microsoft.Office.Interop.Word;

namespace gw_mika
{
    public partial class Ribbon1
    {
        private void Button2_Click(object sender, RibbonControlEventArgs e)
        {
            // 该按钮标签为"列出编号库"，原先却调用 clearVBA()——会删除文档中全部宏。
            // ShowAllNumber() 才是与标签对应的实现（此前是无人调用的死码）。
            try { ShowAllNumber(); }
            catch (Exception ex) { Debug.WriteLine("Button2_Click: " + ex.Message); }
        }

        private void Button3_Click(object sender, RibbonControlEventArgs e)
        {
            // 这个调试按钮原先既不包撤销单元也没有 try/catch：中途抛异常会把异常抛给
            // VSTO 运行时（用户会被建议禁用插件），而文档里已经留下几百行半截调试文本、
            // 被记成几百个独立撤销步骤，基本没法恢复。
            WithUndo("列出内置对话框与任务面板(调试)", () =>
            {
                WordApp.Selection.TypeText("===========所有内置对话框 ===========\r\n");
                ShwoAllDialog();
                WordApp.Selection.TypeText("===========所有任务面板 ===========\r\n");
                ShowAllPanes();
            }, suspendScreen: true);
        }

        private void ShowAllNumber()
        {
            // 手写 StartCustomRecord/EndCustomRecord 绕开了 WithUndo 的屏幕刷新恢复；
            // 更要紧的是原先每轮循环都对 ActiveDocument.Content 做一次 ConvertNumbersToText，
            // 等于把用户文档里所有真实的自动编号都拍成文字，跟这段探针文本毫无关系。
            MSWord.Document doc = WordApp.ActiveDocument;
            int probeStart = WordApp.Selection.Start;
            int lengthBefore = doc.Content.End;

            WithUndo("列出编号库(调试)", () =>
            {
                MSWord.ListTemplate myTemplate = doc.ListTemplates.Add();
                myTemplate.ListLevels[1].TrailingCharacter = MSWord.WdTrailingCharacter.wdTrailingNone;
                myTemplate.ListLevels[1].TextPosition = 0;
                myTemplate.ListLevels[1].NumberPosition = 0;
                myTemplate.ListLevels[1].StartAt = 1;

                foreach (int myCode in Enum.GetValues(typeof(MSWord.WdListNumberStyle)))
                {
                    string strName = Enum.GetName(typeof(MSWord.WdListNumberStyle), myCode);
                    WordApp.Selection.TypeText(strName + "   " + myCode + "\r\n");
                    try
                    {
                        myTemplate.ListLevels[1].NumberStyle = (MSWord.WdListNumberStyle)myCode;
                        WordApp.Selection.Range.ListFormat.ApplyListTemplate(myTemplate);
                    }
                    catch { }
                    WordApp.Selection.TypeText("\r\n");
                }

                // 只把探针写出来的那一段转成文字，且只做一次
                MSWord.Range probe = doc.Range(probeStart, probeStart + (doc.Content.End - lengthBefore));
                probe.ListFormat.ConvertNumbersToText();
            }, suspendScreen: true);
        }

        private void ShwoAllDialog()
        {
            foreach (int myCode in Enum.GetValues(typeof(MSWord.WdWordDialog)))
            {
                string strName = Enum.GetName(typeof(MSWord.WdWordDialog), myCode);
                WordApp.Selection.TypeText(strName + "   " + myCode + "\r\n");
            }
        }

        private void ShowAllPanes()
        {
            foreach (int myCode in Enum.GetValues(typeof(MSWord.WdTaskPanes)))
            {
                string strName = Enum.GetName(typeof(MSWord.WdTaskPanes), myCode);
                WordApp.Selection.TypeText(strName + "   " + myCode + "\r\n");
            }
        }

        private void group5_DialogLauncherClick(object sender, RibbonControlEventArgs e)
        {
            try
            {
                if (IsWps) WordApp.ListCommands(false);
                else WordApp.Dialogs[MSWord.WdWordDialog.wdDialogListCommands].Show();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "打开Word内置对话框时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void group6_DialogLauncherClick(object sender, RibbonControlEventArgs e)
        {
            try { WordApp.Dialogs[MSWord.WdWordDialog.wdDialogFileSummaryInfo].Show(); }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "打开Word内置对话框时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }
    }
}