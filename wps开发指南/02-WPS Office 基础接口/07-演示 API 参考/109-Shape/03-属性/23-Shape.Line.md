# Shape.Line

返回一个 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/obj)** 对象，该对象包含指定形状的线条格式属性。（对于线条来说， **LineFormat** 对象代表线条本身；而对于带有边框的形状来说， **LineFormat** 对象代表边框。）只读。



## 语法

express.**Line**

express   一个代表 **Shape** 对象的变量。

## 类型

LineFormat

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片添加一条蓝色虚线。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let lineFormat = slide.Shapes.AddLine(10, 10, 250, 250).Line
    lineFormat.DashStyle = msoLineDashDotDot
    lineFormat.ForeColor.RGB = RGB(50, 0, 128)
}
```


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片中添加一个十字，然后将其边框设置为 8 磅，颜色为红色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let lineFormat = slide.Shapes.AddShape(msoShapeCross, 10, 10, 50, 70).Line
    lineFormat.Weight = 8
    lineFormat.ForeColor.RGB = RGB(255, 0, 0)
}
```
