# FillFormat.BackColor

返回或设置一个 **ColorFormat** 对象，该对象代表填充的背景色，可读写。



## 语法

express.**BackColor**

express   一个代表 **FillFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例在活动文档中添加一个矩形，然后设置矩形填充的前景色、背景色和渐变。*/
function test() {
    let fillFormat = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 50).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.BackColor.RGB = RGB(170, 170, 170)
    fillFormat.TwoColorGradient(msoGradientHorizontal, 1)
}
```


```JavaScript
/*本示例显示第一个文档上第一个内嵌形状的背景填充色的类型是否为msoColorTypeRGB。*/
function test() {
    let fillFormt = Documents.Item(1).InlineShapes.Item(1).Fill
    alert(fillFormt.BackColor.Type == msoColorTypeRGB)
}
```
