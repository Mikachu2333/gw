# ParagraphFormat2.LineRuleBefore

确定是否将每段首行前面的行距设为特定的磅数或行数。可读写。



## 语法

express.**LineRuleBefore**

express   一个代表 **ParagraphFormat2** 对象的变量。

## 类型

[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本每段首行前面的行距设为特定的行数。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let paragraphFormat2 = shapes.Item(1).TextFrame2.TextRange.ParagraphFormat
    paragraphFormat2.LineRuleBefore = msoTrue
}
```


```JavaScript
/*本示例运行于演示组件，判断活动窗口上所选形状（文本框）的文本每段首行前面的行距设置，并通知用户。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    let paragraphFormat2 = textRange2.ParagraphFormat
    if (paragraphFormat2.LineRuleBefore == msoTrue) {
        alert("每段首行前面的行距设为特定的行数。")
    } else {
        alert("每段首行前面的行距设为特定的磅数。")
    }
}
```
