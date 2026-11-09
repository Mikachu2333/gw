# PdfRange.Height

获取或设置范围矩形的高度（pt）。 **Float** 类型，可读写。

## 语法

express.**Height**

express   一个代表 **PdfRange** 对象的变量。

## 类型

float

## 示例

```JavaScript
var range = app.ActiveDocument.Selection.Range.Item(1);
range.Height = 50;
console.log("高度: " + range.Height);
```
