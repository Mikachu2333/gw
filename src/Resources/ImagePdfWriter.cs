using System;
using System.IO;
using System.Text;
using System.Globalization;
using System.Collections.Generic;

namespace gw_mika
{
    // 只写入每页栅格 JPEG，不复制字体、文字、书签、链接或 OCR 层。
    public sealed class ImagePdfWriter : IDisposable
    {
        private readonly FileStream stream;
        private readonly List<long> offsets = new List<long> { 0, 0, 0 };
        private int count;
        public ImagePdfWriter(string path)
        {
            stream = new FileStream(path, FileMode.CreateNew, FileAccess.Write);
            Write("%PDF-1.4\n% raster pages\n");
        }
        private void Write(string value)
        {
            byte[] bytes = Encoding.ASCII.GetBytes(value);
            stream.Write(bytes, 0, bytes.Length);
        }
        private void BeginObject(int id)
        {
            while (offsets.Count <= id) offsets.Add(0);
            offsets[id] = stream.Position;
            Write(id.ToString(CultureInfo.InvariantCulture) + " 0 obj\n");
        }
        public void AddPage(byte[] jpeg, int pixelsWide, int pixelsHigh, double width, double height)
        {
            int page = 3 + count * 3;
            string w = width.ToString("0.####", CultureInfo.InvariantCulture);
            string h = height.ToString("0.####", CultureInfo.InvariantCulture);
            BeginObject(page);
            Write("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " + w + " " + h + "] /Resources << /XObject << /Im0 " + (page + 1) + " 0 R >> >> /Contents " + (page + 2) + " 0 R >>\nendobj\n");
            BeginObject(page + 1);
            Write("<< /Type /XObject /Subtype /Image /Width " + pixelsWide + " /Height " + pixelsHigh + " /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length " + jpeg.Length + " >>\nstream\n");
            stream.Write(jpeg, 0, jpeg.Length);
            Write("\nendstream\nendobj\n");
            string commands = "q\n" + w + " 0 0 " + h + " 0 0 cm\n/Im0 Do\nQ\n";
            BeginObject(page + 2);
            Write("<< /Length " + commands.Length + " >>\nstream\n" + commands + "endstream\nendobj\n");
            count++;
        }
        public void Complete()
        {
            if (count == 0) throw new InvalidDataException("没有可导出的页面。");
            BeginObject(1); Write("<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
            BeginObject(2); Write("<< /Type /Pages /Count " + count + " /Kids [");
            for (int i = 0; i < count; i++) Write((3 + i * 3) + " 0 R ");
            Write("] >>\nendobj\n");
            long xref = stream.Position;
            Write("xref\n0 " + offsets.Count + "\n0000000000 65535 f \n");
            for (int i = 1; i < offsets.Count; i++) Write(offsets[i].ToString("D10", CultureInfo.InvariantCulture) + " 00000 n \n");
            Write("trailer\n<< /Size " + offsets.Count + " /Root 1 0 R >>\nstartxref\n" + xref.ToString(CultureInfo.InvariantCulture) + "\n%%EOF\n");
        }
        public void Dispose() { stream.Dispose(); }
    }

}
