# LineFormat.DashStyle

返回或设置指定线条的虚线线型。可读/写 **MsoLineDashStyle** 类型。



## 语法

express.**DashStyle**

express   一个代表 **LineFormat** 对象的变量。

## 类型

MsoLineDashStyle

## 说明


 **DashStyle** 属性的值可以是下列 **MsoLineDashStyle** 常量之一：

| 常量 |
| --------------------------------------------- |
| **msoLineDash**                                   |
| **msoLineDashDot**                                |
| **msoLineDashDotDot**                             |
| **msoLineDashStyleMixed**                         |
| **msoLineLongDash**                               |
| **msoLineLongDashDot**                            |
| **msoLineRoundDot**                               |
| **msoLineSolid**                                  |
| **msoLineSquareDot**                              |



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一条蓝色虚线。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let lineFormat = slide.Shapes.AddLine(10, 10, 250, 250).Line
    lineFormat.DashStyle = msoLineDashDotDot
    lineFormat.ForeColor.RGB = RGB(50, 0, 128)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个线条的虚线线型是否为msoLineSolid。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Line.DashStyle == msoLineSolid)
}
```
