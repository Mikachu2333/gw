# Exports.ExportToText

将文档导出为文本文件。

## 语法

express.**ExportToText**

express   一个代表 **Exports** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| FilePath | string | 输出文件路径 |
| PageRange | string (可选) | 页码范围（如 "1-5"） |
| Encoding | string (可选) | 输出文件编码：`"GBK"` 或 `"gbk"` 输出 GBK 编码；省略或传其他任意值均输出 UTF-8|

## 返回值

无

## 示例

```JavaScript
var exports = app.ActiveDocument.Exports;
exports.ExportToText("C:\\output.txt");
exports.ExportToText("C:\\output.txt", "1-10", "utf-8");
```
