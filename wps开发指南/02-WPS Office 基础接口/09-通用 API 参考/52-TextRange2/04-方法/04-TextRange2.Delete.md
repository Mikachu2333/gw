# TextRange2.Delete

删除一个 **TextRange2** 对象。



## 语法

express.**Delete()**

express   一个代表 **TextRange2** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例运行于演示组件，删除活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let textRange2 = shape.TextFrame2.TextRange
    textRange2.Delete()
}
```


```JavaScript
/*本示例运行于演示组件，删除活动窗口所选形状（文本框）中的文本。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let textRange2 = textFrame2.TextRange
    textRange2.Delete()
}
```
