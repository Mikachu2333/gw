# InlineShape.Fill

返回一个 **FillFormat** 对象，该对象包含指定图形的填充格式属性。只读。



## 语法

express.**Fill**

express   一个代表 **InlineShape** 对象的变量。

## 类型

FillFormat

## 示例


```JavaScript
/*本示例向第一个文档添加一个形状，并将其转换为嵌入型图形，然后设置该图形的前景色、背景色和矩形填充的渐变类型。*/
function test() {
    let shape = Documents.Item(1).Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 50)
    let fill = shape.ConvertToInlineShape().Fill
    fill.ForeColor.RGB = RGB(128, 0, 0)
    fill.BackColor.RGB = RGB(170, 170, 170)
    fill.TwoColorGradient(msoGradientHorizontal, 1)
}
```


```JavaScript
/*本示例显示选中的第二个内嵌图形的填充的渐变样式是否为msoGradientMixed。*/
function test() {
    let fillFormat = Selection.InlineShapes.Item(2).Fill
    alert(fillFormat.GradientStyle == msoGradientMixed)
}
```
