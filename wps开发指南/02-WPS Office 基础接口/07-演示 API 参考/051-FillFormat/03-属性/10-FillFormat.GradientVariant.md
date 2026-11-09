# FillFormat.GradientVariant

返回指定填充的渐变变量，对于大多数渐变填充，其返回值为从 1 到 4 的整数。 **Long** 类型，只读。



## 语法

express.**GradientVariant**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（int 精度）

## 说明


如果渐变样式为 **msoGradientFromTitle** 或 **msoGradientFromCenter** ，则该属性返回 1 或 2。

该属性的值与 **“形状填充”** 选项卡中的 **“渐变”** 子选项卡上的渐变变量（从左向右，从上向下编号）相对应。

此属性为只读。使用 **[OneColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/OneColorGradient)** 、 **[PresetGradient](#TODO)** 或 **[TwoColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/TwoColorGradient)** 方法可设置填充的渐变变量。



## 示例


```JavaScript
/*以下示例向活动演示文稿第一张幻灯片中添加矩形，并设置该矩形的填充渐变变量，以匹配名为“rect1”的形状的渐变变量。“rect1”必须具有渐变填充，本示例才有效。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    let gradientVariant = shapes.Item("rect1").Fill.GradientVariant
    let fillFormat = shapes.AddShape(msoShapeRectangle, 0, 0, 40, 80).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.OneColorGradient(msoGradientHorizontal, gradientVariant, 1)
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一个形状填充的渐变变量。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.GradientVariant)
}
```
