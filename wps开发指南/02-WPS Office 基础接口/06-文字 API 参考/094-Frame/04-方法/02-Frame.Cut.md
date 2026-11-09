# Frame.Cut

将指定框架从文档中移到剪贴板上。



## 语法

express.**Cut()**

express   一个代表 **Frame** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档上第一个框架移到剪贴板，并将其粘贴到新建文档的主文档文章上。*/
function test() {
    let frame = ActiveDocument.Frames.Item(1)
    frame.Cut()
    Documents.Add().Content.Paste()
}
```


```JavaScript
/*本示例将第一个文档上第一节的文档部分的第二个框架移到剪贴板，然后粘贴到光标处。*/
function test() {
    let frame = Documents.Item(1).Sections.Item(1).Range.Frames.Item(2)
    frame.Cut()
    Selection.Paste()
}
```
