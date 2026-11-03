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
                btnProtectDoc.Checked = false;
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
                if (IsWps)
                {
                    MessageBox.Show("对不起,您的WPS暂时还不兼容这一调用内置对话框的方法!", "打开内置对话框时出错");
                    btnSetPW.Enabled = false;
                }
                MessageBox.Show(ex.Message);
            }
        }

        private void btnClaerPW_Click(object sender, RibbonControlEventArgs e) => ClearDocumentPassword(true);

        private void btnClearProtectPW_Click(object sender, RibbonControlEventArgs e) => ClearDocumentPassword(false);
    }
}