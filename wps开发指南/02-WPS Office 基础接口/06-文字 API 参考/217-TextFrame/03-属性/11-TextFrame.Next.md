# TextFrame.Next

返回或设置一个 **TextFrame** 对象，该对象代表形状集合中的下一个文本框架。可读写。



## 语法

express.**Next**

express   一个代表 **TextFrame** 对象的变量。

## 类型

TextFrame

## 示例


```JavaScript
/*本示例判断如果活动文档的第二个文字框架中包含文本，则显示该文字框架中的文本。*/
function test() {
    let textFrame = ActiveDocument.Shapes.Item(1).TextFrame.Next
    if (textFrame.HasText == msoTrue) {
        alert(textFrame.TextRange.Text)
    }
}
```


```JavaScript
/*本示例将活动文档上第二个文本框架的下一个文本框架设置为该文档上第三个文本框架，然后设置第三个文本框架的左边距为15磅。*/
function test() {
    let shapes = ActiveDocument.Shapes
    shapes.Item(2).TextFrame.Next = shapes.Item(3).TextFrame
    shapes.Item(3).TextFrame.MarginLeft = 15
}
```
