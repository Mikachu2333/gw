# InlineShape.Line

返回一个 **LineFormat** 对象，该对象包含指定形状的线条格式属性。只读。



## 语法

express.**Line**

express   一个代表 **InlineShape** 对象的变量。

## 类型

LineFormat

## 说明


对于有边框的内嵌形状， **LineFormat** 对象代表边框。



## 示例


```JavaScript
/*本示例设置活动文档上第一个内嵌形状的线条的虚线样式和颜色。*/
function test() {
    let lineFormat = Application.ActiveDocument.InlineShapes.Item(1).Line
    lineFormat.DashStyle = msoLineDashDotDot
    lineFormat.ForeColor.RGB = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例设置第一个文档的第一个内嵌形状的线条粗细、线条颜色的虚线样式。*/
function test() {
    let lineFormat = Application.Documents.Item(1).InlineShapes.Item(1).Line
    lineFormat.DashStyle = msoLineDash
    lineFormat.Weight = 2
    lineFormat.ForeColor.RGB = RGB(255, 0, 0)
}
```
