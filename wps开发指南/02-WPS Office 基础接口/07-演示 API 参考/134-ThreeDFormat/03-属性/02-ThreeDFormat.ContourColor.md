# ThreeDFormat.ContourColor

返回一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象代表指定的 **ThreeDFormat** 对象的轮廓线颜色。只读。



## 语法

express.**ContourColor**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片中第一个形状的三维格式的轮廓线颜色类型是否为RGB类型。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.ContourColor.Type == msoColorTypeRGB)
}
```


```JavaScript
/*本示例向第一篇演示文稿的第一张幻灯片添加一个椭圆，并将椭圆三维格式中曲面图的颜色设置为绿色。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeOval, 100, 100, 100, 50)
    shape.ThreeD.Visible = msoTrue
    shape.ThreeD.ContourColor.RGB = RGB(0, 255, 0)
}
```
