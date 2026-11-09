# LineFormat.BackColor

返回或设置一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象代表指定填充对象或图案线条的背景色。可读/写。



## 语法

express.**BackColor**

express   一个代表 **LineFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一个矩形，然后设置该矩形边框线条的前景色和背景色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let lineFormat = slide.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 50).Line
    lineFormat.ForeColor.RGB = RGB(128, 0, 0)
    lineFormat.BackColor.RGB = RGB(170, 170, 170)
}
```


```JavaScript
/*本示例向活动演示文稿第一张幻灯片添加一条带图案的线条。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let lineFormat = slide.Shapes.AddLine(10, 100, 250, 0).Line
    lineFormat.Weight = 6
    lineFormat.ForeColor.RGB = RGB(0, 0, 255)
    lineFormat.BackColor.RGB = RGB(128, 0, 0)
    lineFormat.Pattern = msoPatternDarkDownwardDiagonal
}
```
