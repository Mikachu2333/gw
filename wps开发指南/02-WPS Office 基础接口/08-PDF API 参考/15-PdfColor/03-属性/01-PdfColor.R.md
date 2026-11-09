# PdfColor.R

获取或设置红色分量。 **Long (0-255)** 类型，可读写。

## 语法

express.**R**

express   一个代表 **PdfColor** 对象的变量。

## 类型

long (0-255)

## 示例

```JavaScript
var color = app.ActiveDocument.Pages.Item(1).Annots.Item(1).Color;
color.R = 255;
color.G = 128;
color.B = 0;
console.log("R=" + color.R);
```
