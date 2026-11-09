# PdfColor.B

获取或设置蓝色分量。 **Long (0-255)** 类型，可读写。

## 语法

express.**B**

express   一个代表 **PdfColor** 对象的变量。

## 类型

long (0-255)

## 示例

```JavaScript
var color = annot.Color;
console.log("颜色: R=" + color.R + " G=" + color.G + " B=" + color.B);

// 修改颜色分量
color.R = 255;
color.G = 0;
color.B = 0;
```
