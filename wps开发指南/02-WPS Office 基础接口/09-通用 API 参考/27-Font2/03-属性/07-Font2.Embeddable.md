# Font2.Embeddable

获取一个值，该值指示是否能将字体嵌入页面中。只读。



## 语法

express.**Embeddable**

express   一个代表 **Font2** 对象的变量。

## 类型

[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个形状（文本框）中的文本字体是否能嵌入到页面中。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    alert(font2.Embeddable === msoTrue)
}
```


```JavaScript
/*本示例运行于演示组件，判断如果活动窗口上所选形状（文本框）中的文本字体能嵌入到页面中，则将该字体加粗。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    if (font2.Embeddable === msoTrue) {
        font2.Bold = msoTrue
    }
}
```
