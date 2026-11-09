# ParagraphFormat2.WordWrap

确定应用程序是否在指定段落的语句中对拉丁语文本换行。可读写。



## 语法

express.**WordWrap**

express   一个代表 **ParagraphFormat2** 对象的变量。

## 类型

[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本段落设置为对拉丁语文本换行。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let paragraphFormat2 = shapes.Item(1).TextFrame2.TextRange.ParagraphFormat
    paragraphFormat2.WordWrap = msoTrue
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）的文本段落是否对拉丁语文本换行。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    let paragraphFormat2 = textRange2.ParagraphFormat
    alert(paragraphFormat2.WordWrap == msoTrue)
}
```
