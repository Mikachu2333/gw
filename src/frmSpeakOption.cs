using System;
using System.Drawing;
using System.Windows.Forms;
using System.Speech.Synthesis;
using System.Diagnostics;

namespace gw_mika
{
    public partial class frmSpeakOption : Form
    {
        private SpeechSynthesizer synth;
        // 填充音色列表期间置为 true：此时 SelectedIndexChanged 只是初始化，不该反过来改动共享合成器
        private bool loadingVoices;
        // 本次朗读是否由本窗体发起：合成器与功能区共用，关闭窗体时不能顺手停掉
        // 用户在功能区点“朗读”开始的那一段
        private bool startedHere;
        private Microsoft.Office.Interop.Word.Application WordApp;
        private Point mPoint;

        public frmSpeakOption()
        {
            InitializeComponent();
            // 无边框窗体没有系统关闭按钮，必须自己接 Esc
            KeyPreview = true;
            KeyDown += FrmSpeakOption_KeyDown;
        }

        private void FrmSpeakOption_Load(object sender, EventArgs e)
        {
            MoveIntoWorkArea(MousePosition.X, MousePosition.Y);
            WordApp = Globals.ThisAddIn.Application;
        }

        // 本窗体无边框、只能靠拖动移位，位置贴出屏幕后就再也抓不回来了
        private void MoveIntoWorkArea(int x, int y)
        {
            Rectangle wa = Screen.FromPoint(new Point(x, y)).WorkingArea;
            this.Location = new Point(Math.Max(wa.Left, Math.Min(x, wa.Right - this.Width)),
                                      Math.Max(wa.Top, Math.Min(y, wa.Bottom - this.Height)));
        }

        private void BtnPlay_Click(object sender, EventArgs e)
        {
            if (synth == null || WordApp == null) return;

            trackBar1.Enabled = false;
            cobVoiceName.Enabled = false;

            try
            {
                synth.SpeakAsyncCancelAll();
                startedHere = true;
                if (WordApp.Selection.Text.Length > 1)
                {
                    synth.SpeakAsync(WordApp.Selection.Text);
                }
                else
                {
                    WordApp.Selection.MoveEnd(Microsoft.Office.Interop.Word.WdUnits.wdParagraph);
                    synth.SpeakAsync(WordApp.Selection.Text);
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine("BtnPlay: " + ex.Message);
                MessageBox.Show(ex.Message, "朗读时出错", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                trackBar1.Enabled = true;
                cobVoiceName.Enabled = true;
            }
        }

        private void BtnStop_Click(object sender, EventArgs e)
        {
            if (synth == null) return;
            try { synth.SpeakAsyncCancelAll(); }
            catch (Exception ex) { Debug.WriteLine("BtnStop: " + ex.Message); }
            startedHere = false;
            trackBar1.Enabled = true;
            cobVoiceName.Enabled = true;
        }

        private void TrackBar1_ValueChanged(object sender, EventArgs e)
        {
            if (synth != null) synth.Rate = trackBar1.Value;
        }

        private void CobVoiceName_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (synth == null || loadingVoices) return;
            if (cobVoiceName.SelectedItem == null) return;
            try
            {
                synth.SelectVoice(cobVoiceName.SelectedItem.ToString());
            }
            catch (Exception ex)
            {
                Debug.WriteLine("SelectVoice: " + ex.Message);
                MessageBox.Show(ex.Message, "切换朗读音色时出错", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            }
        }

        private void FrmSpeakOption_Shown(object sender, EventArgs e)
        {
            try
            {
                // 功能区"朗读"用的就是 Ribbon1.sp，窗体必须配置同一个实例而不是另建一个
                synth = Globals.Ribbons.Ribbon1 == null ? null : Globals.Ribbons.Ribbon1.sp;
                if (synth == null)
                {
                    MessageBox.Show("本机语音合成不可用，朗读功能已停用。",
                        "朗读选项", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                    this.Close();
                    return;
                }
                synth.SpeakCompleted += Synth_SpeakCompleted;
                cobVoiceName.Items.Clear();

                foreach (InstalledVoice voice in synth.GetInstalledVoices(new System.Globalization.CultureInfo("zh-CN")))
                {
                    cobVoiceName.Items.Add(voice.VoiceInfo.Name);
                }
                if (cobVoiceName.Items.Count > 0)
                {
                    string current = synth.Voice == null ? null : synth.Voice.Name;
                    int found = current == null ? -1 : cobVoiceName.Items.IndexOf(current);
                    // 列表里已有当前音色时不要再触发一次 SelectVoice，否则打开窗体就等于偷偷改了朗读音色
                    loadingVoices = found >= 0;
                    try
                    {
                        cobVoiceName.SelectedIndex = found >= 0 ? found : 0;
                    }
                    finally
                    {
                        loadingVoices = false;
                    }
                }
                trackBar1.Value = synth.Rate;
            }
            catch (Exception ex)
            {
                Debug.WriteLine("FrmSpeakOption_Shown: " + ex.Message);
                MessageBox.Show(ex.Message, "初始化朗读选项时出错", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                UnhookSynth();
                this.Close();
            }
        }

        private void Synth_SpeakCompleted(object sender, SpeakCompletedEventArgs e)
        {
            // 回调在 worker 线程上，且共享合成器可能先于本窗体销毁，异常冒泡出去会整进程崩掉
            try
            {
                if (this.IsDisposed) return;
                startedHere = false;
                if (this.InvokeRequired)
                {
                    this.BeginInvoke(new Action(() =>
                    {
                        trackBar1.Enabled = true;
                        cobVoiceName.Enabled = true;
                    }));
                }
                else
                {
                    trackBar1.Enabled = true;
                    cobVoiceName.Enabled = true;
                }
            }
            catch (Exception ex) { Debug.WriteLine("Synth_SpeakCompleted: " + ex.Message); }
        }

        private void BtnClose_Click(object sender, EventArgs e)
        {
            UnhookSynth();
            this.Close();
        }

        // 合成器归功能区所有，关闭窗体只能取消订阅，Dispose 会连带废掉"朗读"按钮。
        // 取消朗读也只限本窗体发起的那一段，否则用户正在功能区听的内容会被打断。
        private void UnhookSynth()
        {
            if (synth == null) return;
            try
            {
                if (startedHere) synth.SpeakAsyncCancelAll();
                synth.SpeakCompleted -= Synth_SpeakCompleted;
            }
            catch (Exception ex) { Debug.WriteLine(ex.Message); }
            finally
            {
                startedHere = false;
                synth = null;
            }
        }

        private void FrmSpeakOption_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Escape)
            {
                e.Handled = true;
                UnhookSynth();
                this.Close();
            }
        }

        private void FrmSpeakOption_FormClosing(object sender, FormClosingEventArgs e)
        {
            UnhookSynth();
        }

        private void FrmSpeakOption_MouseDown(object sender, MouseEventArgs e)
        {
            mPoint = new Point(e.X, e.Y);
        }

        private void FrmSpeakOption_MouseMove(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                MoveIntoWorkArea(this.Location.X + e.X - mPoint.X,
                                 this.Location.Y + e.Y - mPoint.Y);
            }
        }
    }
}