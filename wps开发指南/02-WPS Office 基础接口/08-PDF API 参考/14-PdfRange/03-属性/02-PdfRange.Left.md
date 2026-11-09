# PdfRange.Left

获取或设置范围矩形的左边坐标（pt，**PDF 坐标系**，原点在页面左下角）。 **Float** 类型，可读写。

## 语法

express.**Left**

express   一个代表 **PdfRange** 对象的变量。

## 类型

float

## 示例

```JavaScript
var range = app.ActiveDocument.Selection.Range.Item(1);
range.Left = 100;
console.log("左边距: " + range.Left);
```
