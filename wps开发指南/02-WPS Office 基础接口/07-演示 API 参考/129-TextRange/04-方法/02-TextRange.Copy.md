# TextRange.Copy

将指定对象复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **TextRange** 对象的变量。

## 返回值

void

## 说明


使用 **Paste** 方法粘贴剪贴板中的内容。



## 示例


```JavaScript
/*本示例将当前演示文稿中第一张幻灯片的第一个形状中的文本复制到剪贴板。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame.TextRange.Copy()
}
```


```JavaScript
/*本示例将第一篇演示文稿中第一张幻灯片的第二个形状中的文本复制到剪贴板，并粘贴到第一个形状中。*/
function test() {
    let shapes = Presentations.Item(1).Slides.Item(1).Shapes
    shapes.Item(2).TextFrame.TextRange.Copy()
    shapes.Item(1).TextFrame.TextRange.Paste()
}
```
