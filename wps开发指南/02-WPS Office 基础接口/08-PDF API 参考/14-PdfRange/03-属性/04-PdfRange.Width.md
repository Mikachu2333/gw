# PdfRange.Width

获取或设置范围矩形的宽度（pt）。 **Float** 类型，可读写。

## 语法

express.**Width**

express   一个代表 **PdfRange** 对象的变量。

## 类型

float

## 示例

```JavaScript
var range = app.ActiveDocument.Selection.Range.Item(1);
range.Width = 300;
console.log("宽度: " + range.Width);
```
