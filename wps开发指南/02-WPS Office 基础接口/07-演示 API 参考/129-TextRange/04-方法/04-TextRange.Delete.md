# TextRange.Delete

删除指定的 **TextRange** 对象。



## 语法

express.**Delete()**

express   一个代表 **TextRange** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除当前演示文稿中第一张幻灯片的第一个形状中的文本。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame.TextRange.Delete()
}
```


```JavaScript
/*本示例删除当前演文示稿第一张幻灯片第二个形状中第二段的第一行。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let textRange = shape.TextFrame.TextRange.Paragraphs(2)
    textRange.Lines(1, 1).Delete()
}
```
