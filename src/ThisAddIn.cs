using System;
using MSWord = Microsoft.Office.Interop.Word;
using MSOffice = Microsoft.Office.Core;
using Microsoft.Office.Tools.Word;
using Microsoft.Office.Tools;
using System.Windows.Forms;
using System.Diagnostics;

namespace gw_mika
{
    public partial class ThisAddIn
    {
        private void ThisAddIn_Startup(object sender, System.EventArgs e)
        {
            this.Application.WindowSelectionChange += Application_WindowSelectionChange;
        }

        /// <summary>
        /// 主处理器：只负责根据文档保护状态启用/禁用功能区控件。
        /// Ribbon 自身状态（着重号、隐藏文字、选定内容按钮）由 Ribbon1.WordApp_WindowSelectionChange 负责。
        /// </summary>
        private void Application_WindowSelectionChange(MSWord.Selection Sel)
        {
            try
            {
                if (Sel == null) return;
                bool editable = !Sel.Document.ReadOnly
                    && Sel.Document.ProtectionType == MSWord.WdProtectionType.wdNoProtection;
                ControlEnable(editable);
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Application_WindowSelectionChange: " + ex.Message);
                try { this.Application.StatusBar = ex.Message; } catch { }
            }
        }

        /// <summary>
        /// 让功能区重新按当前文档的保护状态取用控件。
        /// Word 没有"保护状态变化"事件，所以任何在功能区里就地改变保护状态的操作
        /// （比如"限制编辑"对话框）结束后必须手动补一次，否则所有改动型按钮会一直
        /// 停在启用状态，用户点下去才吃到 COM 报错，文档也可能已经被改了一半。
        /// </summary>
        internal void RefreshControlEnable()
        {
            try
            {
                MSWord.Document doc = this.Application.ActiveDocument;
                ControlEnable(!doc.ReadOnly && doc.ProtectionType
                    == MSWord.WdProtectionType.wdNoProtection);
            }
            catch (Exception ex)
            {
                Debug.WriteLine("RefreshControlEnable: " + ex.Message);
            }
        }

        private void ThisAddIn_Shutdown(object sender, System.EventArgs e)
        {
            try
            {
                this.Application.WindowSelectionChange -= Application_WindowSelectionChange;
                this.Application.DocumentOpen -= Application_DocumentOpen;
                this.Application.WindowActivate -= Application_WindowActivate;
                this.Application.DocumentBeforeClose -= Application_DocumentBeforeClose;
                this.Application.ProtectedViewWindowActivate -= Application_ProtectedViewWindowActivate;
                ((MSWord.ApplicationEvents4_Event)this.Application).NewDocument -= ThisAddIn_NewDocument;
            }
            catch (Exception ex)
            {
                Debug.WriteLine("Shutdown: " + ex.Message);
            }
        }

        #region VSTO 生成的代码

        private void InternalStartup()
        {
            this.Startup += new System.EventHandler(ThisAddIn_Startup);
            this.Shutdown += new System.EventHandler(ThisAddIn_Shutdown);

            this.Application.DocumentOpen += Application_DocumentOpen;
            ((MSWord.ApplicationEvents4_Event)this.Application).NewDocument += ThisAddIn_NewDocument;
            this.Application.WindowActivate += Application_WindowActivate;
            this.Application.DocumentBeforeClose += Application_DocumentBeforeClose;
            this.Application.ProtectedViewWindowActivate += Application_ProtectedViewWindowActivate;
        }

        private void Application_ProtectedViewWindowActivate(MSWord.ProtectedViewWindow PvWindow)
        {
            try
            {
                ControlEnable(false);
                if (Globals.Ribbons.Ribbon1 != null)
                {
                    // 受保护视图下只保留"朗读"：它只读取文本，不写盘也不改文档。
                    // 原来还把 glyBak（生成 PDF/DOC/图片副本）打开，而受保护视图禁止保存与导出，
                    // 用户点了只会得到一条错误，等于给一个必然失败的按钮放行。
                    Globals.Ribbons.Ribbon1.btnSpeak.Enabled = Globals.Ribbons.Ribbon1.sp != null;
                }
            }
            catch (Exception ex) { Debug.WriteLine(ex.Message); }
        }

        private void Application_DocumentBeforeClose(MSWord.Document Doc, ref bool Cancel)
        {
            try
            {
                // 关闭时不必强制禁用；如果有其他文档激活，WindowActivate 会重新判断
                if (this.Application.Documents.Count <= 1)
                    ControlEnable(false);
            }
            catch (Exception ex) { Debug.WriteLine(ex.Message); }
        }

        private void Application_WindowActivate(MSWord.Document Doc, MSWord.Window Wn)
        {
            try
            {
                if (Doc == null) return;
                bool editable = !Doc.ReadOnly && Doc.ProtectionType == MSWord.WdProtectionType.wdNoProtection;
                ControlEnable(editable);
            }
            catch (Exception ex)
            {
                Debug.WriteLine("WindowActivate: " + ex.Message);
                try { this.Application.StatusBar = "无法获取文档保护状态,请检查Office完整性."; } catch { }
            }
        }

        /// <summary>
        /// 功能区控件是否可用.
        /// </summary>
        internal void ControlEnable(bool enable = true)
        {
            Ribbon1 rb = Globals.Ribbons.Ribbon1;
            if (rb == null) return;

            rb.btnFoot.Enabled = enable;
            rb.btnDate.Enabled = enable;
            rb.btnHead.Enabled = enable;
            rb.btnHeadNoLine.Enabled = enable;
            rb.btnInsert2.Enabled = enable;
            rb.btnInsertPaper.Enabled = enable;
            rb.btnLeft.Enabled = enable;
            rb.btnName.Enabled = enable;

            rb.glyBak.Enabled = enable;
            rb.btnSaveImagePdf.Enabled = enable;
            rb.glyFormat.Enabled = enable;
            rb.glyFoot.Enabled = enable;
            rb.glyFont.Enabled = enable;
            rb.glyPassword.Enabled = enable;
            rb.glySymbol.Enabled = enable;

            rb.btnNormal.Enabled = enable;
            rb.btnNum2Txt.Enabled = enable;
            rb.btnPaper.Enabled = enable;
            // 语音模块初始化失败时 Ribbon1_Load 会禁用朗读按钮；这里若无条件按 enable 覆盖，
            // 切换文档就会把一个必然失败的按钮重新打开
            rb.btnSpeak.Enabled = enable && rb.sp != null;
            rb.btnStyle.Enabled = enable;
            // 恢复样式会删掉全部自定义样式，受保护文档下必须一并禁用
            rb.btnStyleR.Enabled = enable;

            rb.mnuTitle1.Enabled = enable;
            rb.mnuTitle2.Enabled = enable;
            rb.mnuTitle3.Enabled = enable;
            rb.mnuTitle4.Enabled = enable;

            rb.btnTitleHei.Enabled = enable;
            rb.btnUnderDot.Enabled = enable;
            rb.buttonGroup1.Enabled = enable;
            rb.cobFonts.Enabled = enable;
            rb.btnHideFont.Enabled = enable;
            rb.btnInsertSignPic.Enabled = enable;
            rb.btnInsertSignPicLink.Enabled = enable;
            rb.btnInsertSignPicSave.Enabled = enable;

            rb.mnuInsertGWObject.Enabled = enable;

            rb.mnuSelect.Enabled = enable;
            rb.mnuConvert.Enabled = enable;
            rb.btnAI.Enabled = enable;

            // VBA 注入不受文档保护约束：注入的宏可以调用 Document.Unprotect（无口令保护时
            // 直接成功），等于绕过"只读/限制编辑"。受保护或只读文档必须一并关掉这些入口。
            // 拆分按钮和两个独立脚本菜单都要门控，不能只禁用容器中的某一项。
            rb.btnVBA.Enabled = enable;
            rb.btnClearVBA.Enabled = enable;
            rb.mnuVBA.Enabled = enable;
            rb.mnuScript.Enabled = enable;
        }

        private void ThisAddIn_NewDocument(MSWord.Document Doc)
        {
            try
            {
                if (Doc != null)
                    ControlEnable(!Doc.ReadOnly && Doc.ProtectionType == MSWord.WdProtectionType.wdNoProtection);
            }
            catch (Exception ex) { Debug.WriteLine(ex.Message); }
        }

        private void Application_DocumentOpen(MSWord.Document Doc)
        {
            try
            {
                if (Doc == null) return;
                bool editable = !Doc.ReadOnly && Doc.ProtectionType == MSWord.WdProtectionType.wdNoProtection;
                ControlEnable(editable);
            }
            catch (Exception ex)
            {
                Debug.WriteLine("DocumentOpen: " + ex.Message);
            }
        }

        #endregion
    }
}
