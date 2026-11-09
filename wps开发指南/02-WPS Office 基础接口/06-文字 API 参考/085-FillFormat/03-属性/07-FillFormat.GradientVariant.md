# FillFormat.GradientVariant

返回指定填充的渐变变量；对大多数渐变填充来说，其返回值为 1 到 4 之间的整数。 **Long** 类型，只读。



## 语法

express.**GradientVariant**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果渐变样式为 **msoGradientFromCenter** ，则该属性返回 1 或 2。该属性的值对应于 **“填充效果”** 对话框中 **“渐变”** 选项卡上的渐变变量（从左向右，从上向下编号）。

可用 **[OneColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/OneColorGradient)** 或 **[TwoColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/TwoColorGradient)** 方法设置填充的渐变变形。



## 示例


```JavaScript
/*本示例将一个矩形添至活动文档，并将其填充渐变变量设为与名为“矩形 1”的图形相同。只有在“矩形 1”有渐变填充时，本示例才有效。*/
function test() {
    let variant = ActiveDocument.Shapes.Item("矩形 1").Fill.GradientVariant
    let fillFormat = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 0, 0, 40, 80).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.OneColorGradient(msoGradientHorizontal, variant, 1)
}
```


```JavaScript
/*本示例显示第一个文档上第一个内嵌形状的填充的渐变变量。*/
function test() {
    let fillFormat = Documents.Item(1).InlineShapes.Item(1).Fill
    alert(fillFormat.GradientVariant)
}
```
