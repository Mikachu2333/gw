# Font2.Strike

获取或设置一个值，该值指定用于选定文本的删除线格式。可读写。



## 语法

express.**Strike**

express   一个代表 **Font2** 对象的变量。

## 类型

[MsoTextStrike](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTextStrike)

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个形状（文本框）中的文本字体的删除线格式。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.Strike = msoSingleStrike
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）中的文本字体的删除线格式是否为双删除线。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    alert(font2.Strike === msoDoubleStrike)
}
```
