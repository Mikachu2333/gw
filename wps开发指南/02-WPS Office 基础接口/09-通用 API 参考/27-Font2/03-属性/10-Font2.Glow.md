# Font2.Glow

获取代表字体发光效果格式。只读。



## 语法

express.**Glow**

express   一个代表 **Font2** 对象的变量。

## 类型

[GlowFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GlowFormat/obj)

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个形状（文本框）中的文本的字体发光效果的透明度。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    alert(font2.Glow.Transparency)
}
```


```JavaScript
/*本示例运行于演示组件，将活动窗口所选形状（文本框）中的文本的字体发光效果的半径值设置为 20 磅。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    font2.Glow.Radius = 20
}
```
