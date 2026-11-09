# ParagraphFormat2.Alignment

获取或设置一个值，该值指定段落的对齐方式。可读写。



## 语法

express.**Alignment**

express   一个代表 **ParagraphFormat2** 对象的变量。

## 类型

[MsoParagraphAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoParagraphAlignment)

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本的段落的对齐方式设置为 msoAlignCenter。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let paragraphFormat2 = shapes.Item(1).TextFrame2.TextRange.ParagraphFormat
    paragraphFormat2.Alignment = msoAlignCenter
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）的文本的段落的对齐方式是否为 msoAlignLeft。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    let paragraphFormat2 = textRange2.ParagraphFormat
    alert(paragraphFormat2.Alignment == msoAlignLeft)
}
```
