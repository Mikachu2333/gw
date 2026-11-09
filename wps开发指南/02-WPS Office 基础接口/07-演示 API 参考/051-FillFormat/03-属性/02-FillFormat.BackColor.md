# FillFormat.BackColor

返回或设置一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象代表指定填充对象或图案线条的背景色。可读/写。



## 语法

express.**BackColor**

express   一个代表 **FillFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*以下示例向活动演示文稿第一张幻灯片中添加一个矩形，然后设置该矩形的填充的前景色、背景色和渐变。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let fillFormat = slide.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 50).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.BackColor.RGB = RGB(170, 170, 170)
    fillFormat.TwoColorGradient(msoGradientHorizontal, 1)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状填充的背景色类型是否为msoColorTypeRGB。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    let colorFormat = shape.Fill.BackColor
    alert(colorFormat.Type == msoColorTypeRGB)
}
```
