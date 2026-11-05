using System;
using System.Windows.Forms;

namespace 公文排版
{
    public class ClsWinWrap : IWin32Window
    {
        private readonly IntPtr m_Handle;

        public ClsWinWrap(IntPtr handle)
        {
            this.m_Handle = handle;
        }

        public ClsWinWrap(int handle)
        {
            // 必须按无符号扩展：PIA 的 Window.Hwnd 是 Int32，而本工程按 AnyCPU 运行在 64 位
            // Word/WPS 里，new IntPtr(int) 走的是有符号转换，句柄第 31 位为 1 时会变成
            // 0xFFFFFFFF_xxxxxxxx，得到一个并不存在的窗口句柄 —— 归属关系静默失效，
            // 或者 ShowDialog 直接抛异常。
            this.m_Handle = new IntPtr(unchecked((long)(uint)handle));
        }

        public IntPtr Handle
        {
            get { return m_Handle; }
        }

        public void Show(Form frm)
        {
            if (frm == null) throw new ArgumentNullException(nameof(frm));
            frm.Show(this);
        }

        public DialogResult ShowDialog(Form frm)
        {
            if (frm == null) throw new ArgumentNullException(nameof(frm));
            return frm.ShowDialog(this);
        }
    }
}