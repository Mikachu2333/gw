# TextRange2.Paste

将剪贴板的内容粘贴到 **TextRange2** 对象中。



## 语法

express.**Paste()**

express   一个代表 **TextRange2** 对象的变量。

## 返回值

TextRange2

## 示例


```JavaScript
/*本示例运行于演示组件，复制活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本，并将其粘贴到第二个形状（文本框）中。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    shapes.Item(1).TextFrame2.TextRange.Copy()
    shapes.Item(2).TextFrame2.TextRange.Paste()
}
```


```JavaScript
/*本示例运行于演示组件，复制第一篇演示文稿的第一张幻灯片上第一个形状（文本框）的文本，并将其粘贴到活动窗口的所选形状（文本框）中。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let textRange2 = textFrame2.TextRange
    Presentations.Item(1).Slides.Item(1).Shapes.Item(1).TextFrame.TextRange.Copy()
    textRange2.Paste()
}
```
