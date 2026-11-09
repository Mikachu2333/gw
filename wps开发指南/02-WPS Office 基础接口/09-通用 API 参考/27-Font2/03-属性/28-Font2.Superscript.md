# Font2.Superscript

获取或设置指定选定文本应显示为上标的值。可读写。



## 语法

express.**Superscript**

express   一个代表 **Font2** 对象的变量。

## 类型

[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）中的文本字体格式设置为上标。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.Superscript = msoTrue
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）中的文本字体格式是否为上标。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    alert(font2.Superscript === msoTrue)
}
```
