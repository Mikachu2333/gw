# Font2.Bold

获取或设置一个值，该值指定是否应加粗字体。可读写。



## 语法

express.**Bold**

express   一个代表 **Font2** 对象的变量。

## 类型

[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框架）的文本加粗。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.Bold = msoTrue
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选形状（文本框架）中的文本是否为粗体。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    alert(font2.Bold === msoTrue)
}
```
