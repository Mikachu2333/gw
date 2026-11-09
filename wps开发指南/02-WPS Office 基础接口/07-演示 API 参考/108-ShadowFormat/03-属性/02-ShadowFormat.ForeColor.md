# ShadowFormat.ForeColor

返回或设置一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象表示填充、线条或阴影的前景色。可读/写。



## 语法

express.**ForeColor**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个矩形，并为其添加阴影格式，然后设置该矩形阴影的前景色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shadowFormat = slide.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 50).Shadow
    shadowFormat.Visible = msoTrue
    shadowFormat.Type = msoShadow17
    shadowFormat.ForeColor.RGB = RGB(128, 0, 0)
}
```


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片添加一个线条，并设置该线条阴影的样式、大小和前景色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shadowFormat = slide.Shapes.AddLine(10, 100, 250, 0).Shadow
    shadowFormat.Visible = msoTrue
    shadowFormat.Type = msoShadow24
    shadowFormat.Size = 60
    shadowFormat.ForeColor.RGB = RGB(0, 0, 255)
}
```
