using System;
using System.Windows.Forms;
using MSWord = Microsoft.Office.Interop.Word;
using Microsoft.Office.Tools.Ribbon;

namespace 公文排版
{
    public partial class Ribbon1
    {
        // 口令改动只作用于打开中的文档，必须保存才会写进文件；不提示的话用户会以为文件已经不带口令了
        private void ClearDocumentPassword(bool openPassword)
        {
            string which = openPassword ? "打开密码" : "修改密码";
            var dr = MessageBox.Show("你确定要清除本文档的\"" + which + "\"吗?\r\n 点击确定将直接清除密码.",
                "文档加密", MessageBoxButtons.OKCancel, MessageBoxIcon.Warning);
            if (dr != DialogResult.OK) return;
            try
            {
                MSWord.Document doc = WordApp.ActiveDocument;

                // 原先不判断文档到底有没有口令：没设口令时赋值是空操作，却照样报告
                // "已被清除"，还要用户去保存一个根本没改过的文件。
                // 注意 PIA 把 HasPassword 投影成了无参 Boolean（只反映打开口令），
                // 所以只能在这条分支上用它；修改密码那条改用 ReadOnly 兜住真实的失败点。
                if (openPassword && !doc.HasPassword)
                {
                    MessageBox.Show("本文档未设置“" + which + "”，无需清除。", "文档加密",
                        MessageBoxButtons.OK, MessageBoxIcon.Information);
                    return;
                }

                // 只读打开时改动只存在于内存，后面的 Save() 必然失败，先把话说在前面，
                // 免得用户以为文件里的口令已经去掉。受保护视图不用重复判断：
                // ThisAddIn 在那种状态下已经把这两个按钮禁掉了。
                if (doc.ReadOnly)
                {
                    MessageBox.Show("文档是以只读方式打开的，清除" + which + "前请先另存为可写副本。",
                        "文档加密", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                    return;
                }

                if (openPassword) doc.Password = "";
                else doc.WritePassword = "";
                WordApp.StatusBar = "警告:文档" + which + "已被清除!";

                if (MessageBox.Show(which + "已在打开的文档中清除,只有保存后才会写入文件。\r\n现在保存吗?",
                    "文档加密", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.Yes)
                {
                    doc.Save();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message + "\r\n\r\n" + ex.Source, "清除文档" + which + "时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void btnProtectDoc_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                WordApp.TaskPanes[MSWord.WdTaskPanes.wdTaskPaneDocumentProtection].Visible = true;
                if (WordApp.ActiveDocument.ProtectionType == MSWord.WdProtectionType.wdNoProtection)
                {
                    WordApp.Dialogs[MSWord.WdWordDialog.wdDialogToolsProtectDocument].Show();
                }

                // Word 不提供"保护状态变化"事件，用户在对话框里点完"确定"后必须自己补一次评估：
                // 否则所有改动型按钮仍停在启用状态，用户接着点正文/页码才会吃到 COM 报错，
                // 文档也可能已经被改了一半。按钮的勾选态同样只能按实际保护状态回读。
                MSWord.WdProtectionType protection = WordApp.ActiveDocument.ProtectionType;
                btnProtectDoc.Checked = protection != MSWord.WdProtectionType.wdNoProtection;
                Globals.ThisAddIn.RefreshControlEnable();
            }
            catch (Exception ex)
            {
                WordApp.StatusBar = ex.Message;
            }
        }

        private void btnSetPW_Click(object sender, RibbonControlEventArgs e)
        {
            try
            {
                WordApp.Dialogs[MSWord.WdWordDialog.wdDialogToolsOptionsSecurity].Show();
            }
            catch (Exception ex)
            {
                // 这里原先还有一段 IsWps 分支：ApplyWpsImages() 已经把 btnSetPW 整个隐藏，
                // WPS 下点不到这个按钮，那段分支永远不会执行，所以删掉。
                MessageBox.Show(ex.Message);
            }
        }

        private void btnClaerPW_Click(object sender, RibbonControlEventArgs e) => ClearDocumentPassword(true);

        private void btnClearProtectPW_Click(object sender, RibbonControlEventArgs e) => ClearDocumentPassword(false);
    }
}