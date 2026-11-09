# ParagraphFormat2.BaselineAlignment

获取或设置一个常量，该常量代表段落中字体的垂直位置。可读写。



## 语法

express.**BaselineAlignment**

express   一个代表 **ParagraphFormat2** 对象的变量。

## 类型

[MsoBaselineAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoBaselineAlignment)

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本段落中字体的垂直位置设置为 msoBaselineAlignBaseline。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let paragraphFormat2 = shapes.Item(1).TextFrame2.TextRange.ParagraphFormat
    paragraphFormat2.BaselineAlignment = msoBaselineAlignBaseline
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）的文本段落中字体的垂直位置是否为 msoBaselineAlignAuto。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    let paragraphFormat2 = textRange2.ParagraphFormat
    alert(paragraphFormat2.BaselineAlignment == msoBaselineAlignAuto)
}
```
