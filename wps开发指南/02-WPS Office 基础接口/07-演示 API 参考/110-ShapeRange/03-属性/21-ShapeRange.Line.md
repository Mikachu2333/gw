# ShapeRange.Line

返回一个 **LineFormat** 对象，该对象包含指定形状的线条格式属性。（对于线条来说， **LineFormat** 对象代表线条本身；而对于带有边框的形状来说， **LineFormat** 对象代表边框。）只读。



## 语法

express.**Line**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

LineFormat

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一条蓝色虚线。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddLine(10, 10, 250, 250).Select()
    let lineFormat = ActiveWindow.Selection.ShapeRange.Line
    lineFormat.DashStyle = msoLineDashDotDot
    lineFormat.ForeColor.RGB = RGB(50, 0, 128)
}
```


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个十字，然后将其边框设置为 8 磅，颜色为红色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.AddShape(msoShapeCross, 10, 10, 50, 70).Select()
    let lineFormat = ActiveWindow.Selection.ShapeRange.Line
    lineFormat.Weight = 8
    lineFormat.ForeColor.RGB = RGB(255, 0, 0)
}
```
