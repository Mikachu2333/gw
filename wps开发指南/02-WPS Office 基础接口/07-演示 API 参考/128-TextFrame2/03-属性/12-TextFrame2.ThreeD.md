# TextFrame2.ThreeD

返回一个 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/obj)** 对象，该对象包含指定文本框架的三维效果格式属性。只读。



## 语法

express.**ThreeD**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

ThreeDFormat

## 示例


```JavaScript
/*本示例设置活动窗口选定的第一个形状中文本框架的延伸深度。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    let threeDFormat = shape.TextFrame2.ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.Depth = 50
}
```


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的标题延伸方向设置为顶部延伸。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let threeDFormat = slide.Shapes.Title.TextFrame2.ThreeD
    threeDFormat.SetExtrusionDirection(msoExtrusionTop)
}
```
