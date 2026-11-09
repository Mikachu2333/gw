# ParagraphFormat2.FarEastLineBreakLevel

获取或设置指定段落的东亚换行符控制级别。可读写。



## 语法

express.**FarEastLineBreakLevel**

express   一个代表 **ParagraphFormat2** 对象的变量。

## 类型

[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本段落的 FarEastLineBreakLevel 属性值设置为 msoFalse。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let paragraphFormat2 = shapes.Item(1).TextFrame2.TextRange.ParagraphFormat
    paragraphFormat2.FarEastLineBreakLevel = msoFalse
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）中文本段落的 FarEastLineBreakLevel 属性值是否为 msoTrue。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    let paragraphFormat2 = textRange2.ParagraphFormat
    alert(paragraphFormat2.FarEastLineBreakLevel == msoTrue)
}
```
