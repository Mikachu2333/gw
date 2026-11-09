# FillFormat.GradientStyle

返回指定填充的渐变样式。只读 **MsoGradientStyle** 类型。



## 语法

express.**GradientStyle**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoGradientStyle

## 说明


使用 **[OneColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/OneColorGradient)** 、 **[PresetGradient](#TODO)** 或 **[TwoColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/TwoColorGradient)** 方法设置填充的渐变样式。尝试对未使用渐变的填充返回此属性将产生错误。使用 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/Type)** 属性决定填充是否使用渐变。

 **GradientStyle** 属性的值可以是下列 **MsoGradientStyle** 常量之一：

| 常量 |
| --------------------------------------------- |
| **msoGradientDiagonalDown**                       |
| **msoGradientDiagonalUp**                         |
| **msoGradientFromCenter**                         |
| **msoGradientFromCorner**                         |
| **msoGradientFromTitle**                          |
| **msoGradientHorizontal**                         |
| **msoGradientMixed**                              |
| **msoGradientVertical**                           |



## 示例


```JavaScript
/*本示例向活动演示文稿第一个幻灯片中添加矩形，并设置该矩形的填充渐变样式与名为“rect1”的形状的渐变样式一致。“rect1”必须具有渐变填充，本示例才有效。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    let gradientStyle = shapes.Item("rect1").Fill.GradientStyle
    let fillFormat = shapes.AddShape(msoShapeRectangle, 0, 0, 40, 80).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.OneColorGradient(gradientStyle, 1, 1)
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一个形状填充的渐变样式是否为msoGradientHorizontal。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.GradientStyle == msoGradientHorizontal)
}
```
