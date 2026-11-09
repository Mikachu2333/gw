# TextRange2.BoundHeight

获取指定文本的文本边界框的高度（以磅为单位）。只读。



## 语法

express.**BoundHeight**

express   一个代表 **TextRange2** 对象的变量。

## 类型

number（float 精度）

## 说明


文本边界框与 **[TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextFrame2/obj)** 对象不同。 **TextFrame2** 对象代表文本可以驻留在其中的容器，而文本边界框代表紧密围绕文本的周长。



## 示例


```JavaScript
/*本示例运行于演示组件，在活动演示文稿的第一张幻灯片上添加一个与该幻灯片的第一个形状（文本框）中文本的文本边界框具有相同尺寸的圆角矩形。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let textRange2 = shapes.Item(1).TextFrame2.TextRange
    let shape = shapes.AddShape(msoShapeRoundedRectangle, textRange2.BoundLeft, textRange2.BoundTop, textRange2.BoundWidth, textRange2.BoundHeight)
    shape.Fill.Transparency = 0.25
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）中文本的文本边界框的高度。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    alert(`${textRange2.BoundHeight} 磅`)
}
```
