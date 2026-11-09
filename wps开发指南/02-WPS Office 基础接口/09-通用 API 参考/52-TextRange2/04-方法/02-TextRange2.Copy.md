# TextRange2.Copy

复制一个 **TextRange2** 对象。



## 语法

express.**Copy()**

express   一个代表 **TextRange2** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例运行于演示组件，复制活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本到第二个形状（文本框）中，然后第二个形状（文本框）中文字的颜色设置为红色。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    shapes.Item(1).TextFrame2.TextRange.Copy()
    shapes.Item(2).TextFrame2.TextRange.Paste()
    let textRange2 = shapes.Item(2).TextFrame2.TextRange
    textRange2.Font.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例运行于演示组件，复制第一篇演示文稿的第一张幻灯片上第一个形状（文本框）的文本到第二个形状（文本框）中，然后显示第二个形状（文本框）中文字的文本边界框的高度和宽度。*/
function test() {
    let shapes = Presentations.Item(1).Slides.Item(1).Shapes
    shapes.Item(1).TextFrame2.TextRange.Copy()
    shapes.Item(2).TextFrame2.TextRange.Paste()
    let textRange2 = shapes.Item(2).TextFrame2.TextRange
    alert(`高度：${textRange2.BoundHeight} 磅\n宽度：${textRange2.BoundWidth} 磅`)
}
```
