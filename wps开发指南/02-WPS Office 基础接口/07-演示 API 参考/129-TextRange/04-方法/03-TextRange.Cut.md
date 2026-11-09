# TextRange.Cut

删除指定对象并将其放到剪贴板中。



## 语法

express.**Cut()**

express   一个代表 **TextRange** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除当前演示文稿中第一张幻灯片的第一个形状中的文本，并将它的一个副本放到剪贴板。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame.TextRange.Cut()
}
```


```JavaScript
/*本示例删除当前演示文稿的第一张幻灯片中名为“test”形状中的文本，并将它的一个副本放到剪贴板。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    for (let i = shapes.Count; i > 0; i--) {
        if (shapes.Item(i).Name == "test") {
            shapes.Item(i).TextFrame.TextRange.Cut()
        }
    }
}
```
