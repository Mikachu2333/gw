# Font2.NameAscii

获取或设置用于西文（其字符代码为 0（零）到 127 的字符）的字体。可读写。



## 语法

express.**NameAscii**

express   一个代表 **Font2** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）中用于西方文本的字体设置为宋体。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.NameAscii = "宋体"
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）中用于西方文本的字体的名称。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    alert(font2.NameAscii)
}
```
