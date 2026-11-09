# Font2.WordArtformat

获取或设置一个值，该值指定选定文本的文本效果。可读写。



## 语法

express.**WordArtformat**

express   一个代表 **Font2** 对象的变量。

## 类型

[MsoPresetTextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoPresetTextEffect)

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）中的文本字体的文本效果设置为第一个文本效果。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.WordArtformat = msoTextEffect1
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）中的文本字体的文本效果是否为第十个文本效果。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    alert(font2.WordArtformat === msoTextEffect10)
}
```
