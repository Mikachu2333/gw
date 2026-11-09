# TextRange2.Cut

删除指定对象并将其放到剪贴板中。



## 语法

express.**Cut()**

express   一个代表 **TextRange2** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例运行于演示组件，删除活动窗口所选形状（文本框）中的文本并将其放到剪贴板中。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let textRange2 = textFrame2.TextRange
    textRange2.Cut()
}
```


```JavaScript
/*本示例运行于演示组件，删除活动演示文稿的第一张幻灯片的第一个形状（文本框）中的文本并将其放到剪贴板中，然后粘贴到活动窗口所选形状（文本框）中。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let textRange2 = shape.TextFrame2.TextRange
    textRange2.Cut()
    ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange.Paste()
}
```
