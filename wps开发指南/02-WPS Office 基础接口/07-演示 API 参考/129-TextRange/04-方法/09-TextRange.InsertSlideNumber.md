# TextRange.InsertSlideNumber

将当前幻灯片的幻灯片编号插入指定的文本范围。返回一个代表幻灯片编号的 **TextRange** 对象。



## 语法

express.**InsertSlideNumber()**

express   一个代表 **TextRange** 对象的变量。

## 返回值

TextRange

## 说明


当前幻灯片的幻灯片编号改变时，已插入的幻灯片编号将自动更新。



## 示例


```JavaScript
/*本示例将当前幻灯片的编号插入到活动演示文稿第一张幻灯片第二个形状的第一段的第一个字符。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let textRange = shape.TextFrame.TextRange.Paragraphs(1).Characters(1, 1)
    textRange.InsertSlideNumber()
}
```


```JavaScript
/*本示例在活动演示文稿中创建一张新幻灯片，将新幻灯片的编号插入标题并加粗。*/
function test() {
    let shape = ActivePresentation.Slides.Add(2, ppLayoutTitleOnly).Shapes.Title
    let textRange = shape.TextFrame.TextRange.InsertSlideNumber()
    textRange.Font.Bold = true
}
```
