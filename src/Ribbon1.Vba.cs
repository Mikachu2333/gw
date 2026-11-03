using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Diagnostics;
using System.IO;
using System.Runtime.InteropServices;
using System.Text;
using System.Windows.Forms;
using Microsoft.Office.Tools.Ribbon;
using Microsoft.Vbe.Interop;
using MSWord = Microsoft.Office.Interop.Word;
using MSOffice = Microsoft.Office.Core;

namespace 公文排版
{
    public partial class Ribbon1
    {
        private const string VbaModuleName = "小恐龙公文排版助手";

        /// <summary>
        /// 把 .vba 文件注入活动文档、执行其首个过程，并在结束时移除注入的模块。
        /// OpenVba（文件对话框）与 RunVBA（菜单/历史）共用此实现。
        /// </summary>
        private bool RunVbaFile(string vbaFile)
        {
            if (!CheckVbaEncoding(vbaFile)) return false;

            VBComponents vbc = WordApp.ActiveDocument.VBProject.VBComponents;
            VBComponent vbm = vbc.Add(vbext_ComponentType.vbext_ct_StdModule);
            try
            {
                // 文档里可能已有同名组件，改名失败时沿用 VBIDE 给的默认名，不影响执行
                vbm.Name = VbaModuleName;
            }
            catch (Exception ex) { Debug.WriteLine("VBA 模块改名失败: " + ex.Message); }

            CodeModule module = vbm.CodeModule;
            module.AddFromFile(vbaFile);

            vbext_ProcKind procKind;
            string macroName = module.get_ProcOfLine(module.CountOfDeclarationLines + 1, out procKind);
            if (string.IsNullOrWhiteSpace(macroName))
                throw new InvalidDataException(
                    "所选文件里没有可执行的过程。\r\n请保留一个公共 Sub 作为入口（其他过程用 Function）。");

            MSWord.UndoRecord undo = WordApp.UndoRecord;
            bool recording = false;
            try
            {
                undo.StartCustomRecord("运行VBA:" + macroName);
                recording = true;
                WordApp.Run(macroName);
            }
            finally
            {
                // 两步清理必须彼此独立：原先写在同一个 finally 里，
                // EndCustomRecord 一旦抛异常，vbc.Remove 就不会执行，
                // 注入的模块会留在用户文档里被保存并随文档分发出去。
                if (recording)
                {
                    try { undo.EndCustomRecord(); }
                    catch (Exception ex) { Debug.WriteLine("EndCustomRecord 失败: " + ex.Message); }
                }
                try { vbc.Remove(vbm); }
                catch (Exception ex) { Debug.WriteLine("移除注入的 VBA 模块失败: " + ex.Message); }
            }
            return true;
        }

        private void OpenVba()
        {
            try
            {
                string vbaFile;
                using (var ofd = new OpenFileDialog())
                {
                    ofd.Filter = "VBA文件(*.vba,*.bas)|*.vba;*.bas|全部文件(*.*)|*.*";
                    if (ofd.ShowDialog() != DialogResult.OK) return;
                    vbaFile = ofd.FileName;
                }

                var stopwatch = new Stopwatch();
                stopwatch.Start();
                if (!RunVbaFile(vbaFile)) return;
                stopwatch.Stop();
                WordApp.StatusBar = $"VBA文件执行共用时:{stopwatch.Elapsed.TotalSeconds:F2} 秒";

                AddVbaHistory(vbaFile);
            }
            catch (COMException ex)
            {
                HandleVbaComException(ex);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString(), "执行VBA代码出错", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void btnVBA_Click(object sender, RibbonControlEventArgs e)
        {
            OpenVba();
        }

        private bool RunVBA(string vbaFile)
        {
            var stopwatch = new Stopwatch();
            try
            {
                stopwatch.Start();
                if (!RunVbaFile(vbaFile)) return false;
                stopwatch.Stop();
                WordApp.StatusBar = $"VBA文件执行共用时:{stopwatch.Elapsed.TotalSeconds:F2} 秒";
                return true;
            }
            catch (Exception ex)
            {
                WordApp.StatusBar = ex.Message;
                return false;
            }
        }

        private void BtnVBAlist_Click(object sender, RibbonControlEventArgs e)
        {
            if (sender is RibbonButton btn) RunVBA(btn.ScreenTip);
        }

        private bool CheckVbaEncoding(string vbaFile)
        {
            Encoding encoding = GetTextFileEncodingType(vbaFile);
            if (encoding == Encoding.Unicode || encoding == Encoding.UTF8)
            {
                var result = MessageBox.Show(
                    "您所选文件非ANSI编码,WordVBA不支持UTF8编码。\r\n您要用记事本打开并查看文件编码吗?\r\n单击确定将运行记事本程序,取消退出。",
                    "读取VBA文件", MessageBoxButtons.OKCancel, MessageBoxIcon.Warning);
                if (result == DialogResult.OK)
                {
                    try { Process.Start("notepad", vbaFile); }
                    catch (Exception ex) { Debug.WriteLine(ex.Message); }
                }
                return false;
            }
            return true;
        }

        private void AddVbaHistory(string vbaFile)
        {
            try
            {
                string fileNameNoExt = Path.GetFileNameWithoutExtension(vbaFile);
                string item = fileNameNoExt + "|" + vbaFile;
                if (Properties.Settings.Default.VBA历史 == null)
                    Properties.Settings.Default.VBA历史 = new StringCollection();
                if (Properties.Settings.Default.VBA历史.Contains(item)) return;

                var btnVBAlist = this.Factory.CreateRibbonButton();
                btnVBAlist.Label = fileNameNoExt;
                btnVBAlist.ScreenTip = vbaFile;
                btnVBAlist.ControlSize = MSOffice.RibbonControlSize.RibbonControlSizeRegular;
                btnVBAlist.Click += BtnVBAlist_Click;
                mnuScript.Visible = true;
                mnuScript.Items.Add(btnVBAlist);
                Properties.Settings.Default.VBA历史.Add(item);
                Properties.Settings.Default.Save();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString(), "添加VBA历史记录时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        // 原代码用裸数字做分支，并把 E_FAIL 直接当作"WPS 用户"的特征。
        private const int HResultVbaProjectUntrusted = -2146822220;   // 0x800A17B4 未信任对 VBA 工程对象模型的访问
        private const int HResultGenericFailure = -2147467259;        // 0x80004005 E_FAIL 未指定的错误
        private const int HResultMemberNotFound = -2147352573;        // 0x80020003 DISP_E_MEMBERNOTEXIST

        private const string VbaTrustGuideWord =
            "未开启“信任对 VBA 工程对象模型的访问”。\r\n" +
            "请在【文件 → 选项 → 信任中心 → 信任中心设置 → 宏设置】中勾选该项。";
        private const string VbaTrustGuideWps =
            "未开启“信任对 VBA 工程对象模型的访问”。\r\n" +
            "请切换到【VB 环境】，在【宏安全性】选项中开启该项。";

        private void HandleVbaComException(COMException ex)
        {
            // 提示文案要按实际宿主给，不能靠 HRESULT 猜宿主
            string guide = IsWps ? VbaTrustGuideWps : VbaTrustGuideWord;
            string err;
            switch (ex.ErrorCode)
            {
                case HResultVbaProjectUntrusted:
                    err = guide;
                    break;
                case HResultGenericFailure:
                    // E_FAIL 是"未指定的错误"，Word 与 WPS 都会返回，只能作为附加线索
                    err = guide + "\r\n\r\n（原始错误：未指定的错误 E_FAIL）";
                    break;
                case HResultMemberNotFound:
                    err = ex.Message;
                    break;
                default:
                    err = "错误代码:" + ex.ErrorCode + "\r\n错误信息:" + ex.Message;
                    // 剪贴板可能被其他进程占用（CLIPBRD_E_CANT_OPEN），而此处已在 catch 内部：
                    // 同级的其它 catch 不会再接住它，异常会直接冲出功能区回调。
                    try
                    {
                        Clipboard.SetText(err);
                        err += "\r\n\r\n[错误信息已复制到剪贴板]";
                    }
                    catch (Exception clipEx)
                    {
                        Debug.WriteLine("复制 VBA 错误信息失败: " + clipEx.Message);
                        err += "\r\n\r\n[复制到剪贴板失败，请手动选中复制]";
                    }
                    break;
            }
            MessageBox.Show(err, "执行VBA代码出错", MessageBoxButtons.OK, MessageBoxIcon.Information);
        }

        private static Encoding GetTextFileEncodingType(string fileName)
        {
            try
            {
                using (var fs = new FileStream(fileName, FileMode.Open, FileAccess.Read))
                using (var br = new BinaryReader(fs, Encoding.Default))
                {
                    byte[] buffer = br.ReadBytes((int)fs.Length);
                    if (buffer.Length >= 3 && buffer[0] == 0xEF && buffer[1] == 0xBB && buffer[2] == 0xBF)
                        return Encoding.UTF8;
                    if (buffer.Length >= 3 && buffer[0] == 0xFE && buffer[1] == 0xFF && buffer[2] == 0x00)
                        return Encoding.BigEndianUnicode;
                    if (buffer.Length >= 3 && buffer[0] == 0xFF && buffer[1] == 0xFE && buffer[2] == 0x41)
                        return Encoding.Unicode;
                    if (IsUTF8Bytes(buffer)) return Encoding.UTF8;
                    return Encoding.Default;
                }
            }
            catch { return Encoding.Default; }
        }

        private static bool IsUTF8Bytes(byte[] data)
        {
            int charByteCounter = 1;
            for (int i = 0; i < data.Length; i++)
            {
                byte curByte = data[i];
                if (charByteCounter == 1)
                {
                    if (curByte >= 0x80)
                    {
                        while (((curByte <<= 1) & 0x80) != 0) charByteCounter++;
                        if (charByteCounter == 1 || charByteCounter > 6) return false;
                    }
                }
                else
                {
                    if ((curByte & 0xC0) != 0x80) return false;
                    charByteCounter--;
                }
            }
            return charByteCounter <= 1;
        }

        private void clearVBA()
        {
            try
            {
                MSWord.Document doc = WordApp.ActiveDocument;
                VBComponents vbcs = doc.VBProject.VBComponents;

                // VBProject 的改动不进 Word 撤销栈，删掉的宏无法找回，
                // 所以必须先列清单、经用户确认，再动手。
                var removeComponents = new List<VBComponent>();
                var wipeModules = new List<VBComponent>();
                var names = new StringBuilder();

                for (int i = vbcs.Count; i >= 1; i--)
                {
                    VBComponent vbc = vbcs.Item(i);
                    int lineCount = vbc.CodeModule.CountOfLines;
                    switch (vbc.Type)
                    {
                        case vbext_ComponentType.vbext_ct_StdModule:
                        case vbext_ComponentType.vbext_ct_ClassModule:
                        case vbext_ComponentType.vbext_ct_MSForm:
                            removeComponents.Add(vbc);
                            names.AppendLine("· " + vbc.Name + "（整个组件，" + lineCount + " 行）");
                            break;
                        case vbext_ComponentType.vbext_ct_Document:
                        case vbext_ComponentType.vbext_ct_ActiveXDesigner:
                            if (lineCount > 0)
                            {
                                wipeModules.Add(vbc);
                                names.AppendLine("· " + vbc.Name + "（清空 " + lineCount + " 行代码）");
                            }
                            break;
                    }
                }

                if (removeComponents.Count == 0 && wipeModules.Count == 0)
                {
                    MessageBox.Show("当前文档没有可清理的 VBA 代码。", "清理VBA代码",
                        MessageBoxButtons.OK, MessageBoxIcon.Information);
                    return;
                }

                var confirm = MessageBox.Show(
                    "即将清理文档“" + doc.Name + "”中的以下 VBA 内容：\r\n\r\n" + names +
                    "\r\n此操作无法撤销，且文档会被标记为已修改。\r\n建议先另存一份副本。确定继续吗?",
                    "清理VBA代码", MessageBoxButtons.OKCancel, MessageBoxIcon.Warning);
                if (confirm != DialogResult.OK) return;

                foreach (VBComponent vbc in wipeModules)
                    vbc.CodeModule.DeleteLines(1, vbc.CodeModule.CountOfLines);
                foreach (VBComponent vbc in removeComponents)
                    vbcs.Remove(vbc);

                MessageBox.Show("当前文档中:\r\n" + names + "已清理", "清理VBA代码",
                    MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "清理VBA代码时出错",
                    MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }
        private void btnClearVBA_Click(object sender, RibbonControlEventArgs e)
        {
            clearVBA();
        }
        private void LoadVBA(string vbaFolder = "")
        {
            if (string.IsNullOrEmpty(vbaFolder))
            {
                try
                {
                    vbaFolder = Properties.Settings.Default.VBA路径;
                    if (string.IsNullOrEmpty(vbaFolder))
                        vbaFolder = Path.Combine(GetDllPath() ?? string.Empty, "VBA脚本");
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message, "获取VBA脚本路径时出错",
                        MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                }
            }

            mnuVBA.Items.Clear();
            if (!Directory.Exists(vbaFolder)) return;

            foreach (string file in Directory.GetFiles(vbaFolder))
            {
                if (Path.GetExtension(file).ToLower() != ".vba") continue;
                var btn = this.Factory.CreateRibbonButton();
                btn.Label = Path.GetFileNameWithoutExtension(file);
                btn.Tag = file;
                btn.ScreenTip = file;
                btn.Click += BtnVBAlist_Click;
                mnuVBA.Items.Add(btn);
            }
        }
    }
}