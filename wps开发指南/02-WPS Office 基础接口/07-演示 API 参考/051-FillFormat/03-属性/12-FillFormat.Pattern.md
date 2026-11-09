# FillFormat.Pattern

设置或返回一个值，该值代表应用于指定填充的图案。只读。 **MsoPatternType** 类型。



## 语法

express.**Pattern**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoPatternType

## 说明


使用 **[BackColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/BackColor)** 和 **[ForeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/ForeColor)** 属性可设置图案中使用的颜色。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个矩形，并设置其填充图案与名为“rect1”的形状保持一致。新矩形使用和 rect1 相同的图案，但颜色未必相同。通过 BackColor 和 ForeColor 属性可设置该图案中使用的颜色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    let pattern = shapes.Item("rect1").Fill.Pattern
    let fillFormat = shapes.AddShape(msoShapeRectangle, 100, 100, 120, 80).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.BackColor.RGB = RGB(0, 0, 255)
    fillFormat.Patterned(pattern)
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一个形状填充的图案是否为msoPattern75Percent。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.Pattern == msoPattern75Percent)
}
```
