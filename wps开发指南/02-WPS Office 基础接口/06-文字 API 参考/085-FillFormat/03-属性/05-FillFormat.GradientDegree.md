# FillFormat.GradientDegree

返回值表明单色渐变填充的深浅程度。 **Single** 类型，只读。



## 语法

express.**GradientDegree**

express   一个代表 **FillFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


0 表示黑色与图形前景色混色形成渐变；1 表示白色混色；介于 0 和 1 之间的值表示混入前景色偏深或偏白的阴影。

可用 **OneColorGradient** 方法设置填充的渐变程度。



## 示例


```JavaScript
/*本示例将一个矩形添至活动文档，将其填充渐变设为与名为“矩形 1”的图形的填充渐变相同。如果“矩形 1”没有单色渐变填充，则本示例无效。*/
function test() {
    let degree = ActiveDocument.Shapes.Item("矩形 1").Fill.GradientDegree
    let fillFormat = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 0, 0, 40, 80).Fill
    fillFormat.ForeColor.RGB = RGB(0, 128, 128)
    fillFormat.OneColorGradient(msoGradientHorizontal, 1, degree)
}
```


```JavaScript
/*本示例显示第一个文档上第一个内嵌形状的单色渐变填充的深浅程度。*/
function test() {
    let fillFormat = Documents.Item(1).InlineShapes.Item(1).Fill
    alert(fillFormat.GradientDegree)
}
```
