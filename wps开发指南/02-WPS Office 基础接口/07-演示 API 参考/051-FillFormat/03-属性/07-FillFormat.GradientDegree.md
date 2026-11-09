# FillFormat.GradientDegree

返回一个值，该值指示单色渐变填充的深浅程度。只读 **Single** 类型。



## 语法

express.**GradientDegree**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


该值为 0（零）表示形状的前景色中混入黑色形成渐变；值为 1 表示混入白色；介于 0 和 1 之间的值表示混入前景色的偏深或偏浅的底纹。

此属性为只读。使用 **[OneColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/OneColorGradient)** 方法设置填充的渐变程度。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加矩形，并设置该矩形的填充渐变程度与名为“Rectangle 2”的形状中的渐变程度一致。如果“Rectangle 2”未使用单色渐变填充，则本示例失败。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    let gradientDegree = shapes.Item("Rectangle 2").Fill.GradientDegree
    let fillFormat = shapes.AddShape(msoShapeRectangle, 0, 0, 40, 80).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.OneColorGradient(msoGradientHorizontal, 1, gradientDegree)
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一个形状单色渐变填充的深浅程度值。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Fill.GradientDegree)
}
```
