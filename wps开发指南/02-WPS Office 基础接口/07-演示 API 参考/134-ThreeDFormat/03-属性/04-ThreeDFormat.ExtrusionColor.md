# ThreeDFormat.ExtrusionColor

返回一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象代表形状延伸区域的颜色。只读。



## 语法

express.**ExtrusionColor**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片添加一个椭圆，并且将椭圆延伸的深度和延伸颜色分别指定为 50 磅和紫色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeOval, 90, 90, 90, 40)
    let threeDFormat = shape.ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.Depth = 50
    // RGB value for purple
    threeDFormat.ExtrusionColor.RGB = RGB(255, 100, 255)
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片中第一个形状延伸区域的颜色类型是否为msoColorTypeScheme。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.ExtrusionColor.Type == msoColorTypeScheme)
}
```
