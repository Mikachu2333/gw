# Document.PdfToImage

将 PDF 文档导出为图片。

## 语法

express.**PdfToImage**

express   一个代表 **Document** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| bEdit | boolean | 是否包含编辑内容 |
| ImgType | long | 图片格式：`0`=BMP，`1`=JPG，`2`=PNG，`3`=TIF |
| Quality | long | 图片质量，传给 Qt `QImage::save()`，`-1`=默认，`0`–`100` 为质量值（仅对 JPG 有意义，其他格式忽略） |
| FileName | string | **输出目录路径**（非文件路径），函数将对每页生成一个文件，命名格式为 `目录/文档名_页码.扩展名` |

## 返回值

无

## 示例

```JavaScript
// 将文档各页导出为 PNG 图片，存入 C:\output\ 目录
app.ActiveDocument.PdfToImage(true, 2, -1, "C:\\output");
```
