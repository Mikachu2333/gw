# PdfRange.StartIndex

获取或设置范围的起始字符索引。 **Long** 类型，可读写。

## 语法

express.**StartIndex**

express   一个代表 **PdfRange** 对象的变量。

## 类型

long

## 示例

```JavaScript
var range = app.ActiveDocument.Selection.Range.Item(1);
console.log("起始字符: " + range.StartIndex + ", 结束: " + range.EndIndex);
range.StartIndex = 0;
range.EndIndex = 10;
```
