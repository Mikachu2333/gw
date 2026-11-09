# LineFormat.DashStyle

返回或设置指定线条的虚线样式。 **MsoLineDashStyle** 类型，可读写。



## 语法

express.**DashStyle**

express   一个代表 **LineFormat** 对象的变量。

## 类型

MsoLineDashStyle

## 示例


```JavaScript
/*此示例向活动文档添加一条蓝色虚线。在该线条的起点有一个短而窄的椭圆，在该线条的终点有一个长而宽的三角形。*/
function test() {
    let lineFormat = ActiveDocument.Shapes.AddLine(100, 100, 200, 300).Line
    lineFormat.DashStyle = msoLineDashDotDot
    lineFormat.ForeColor.RGB = RGB(50, 0, 128)
    lineFormat.BeginArrowheadLength = msoArrowheadShort
    lineFormat.BeginArrowheadStyle = msoArrowheadOval
    lineFormat.BeginArrowheadWidth = msoArrowheadNarrow
    lineFormat.EndArrowheadLength = msoArrowheadLong
    lineFormat.EndArrowheadStyle = msoArrowheadTriangle
    lineFormat.EndArrowheadWidth = msoArrowheadWide
}
```


```JavaScript
/*本示例显示第一个文档的第一个内嵌形状的边框线条的虚线样式是否为msoLineSolid。*/
function test() {
    let lineFormat = Documents.Item(1).InlineShapes.Item(1).Line
    alert(lineFormat.DashStyle == msoLineSolid)
}
```
