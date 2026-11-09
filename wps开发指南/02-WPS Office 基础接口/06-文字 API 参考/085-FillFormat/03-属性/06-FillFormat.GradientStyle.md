# FillFormat.GradientStyle

返回指定填充的渐变样式。只读 **MsoGradientStyle** 类型。



## 语法

express.**GradientStyle**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoGradientStyle

## 说明


此属性为只读属性。可用 **[OneColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/OneColorGradient)** 或 **[TwoColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/TwoColorGradient)** 方法设置填充的渐变样式。

试图为没有渐变的填充返回该属性会产生错误。请使用 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/Type)** 属性确定填充是否具有渐变。



## 示例


```JavaScript
/*本示例将一个矩形添至活动文档，并将其填充渐变类型设为与名为“矩形 1”的图形的渐变相同。只有在“矩形 1”有渐变填充时，本示例才有效。*/
function test() {
    let style = ActiveDocument.Shapes.Item("矩形 1").Fill.GradientStyle
    let fillFormat = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 0, 0, 40, 80).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.OneColorGradient(style, 1, 1)
}
```


```JavaScript
/*本示例显示第一个文档上第一个内嵌形状的填充的渐变样式是否为msoGradientHorizontal。*/
function test() {
    let fillFormat = Documents.Item(1).InlineShapes.Item(1).Fill
    alert(fillFormat.GradientStyle == msoGradientHorizontal)
}
```
