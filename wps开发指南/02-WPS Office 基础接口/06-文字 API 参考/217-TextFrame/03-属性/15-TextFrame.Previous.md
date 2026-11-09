# TextFrame.Previous

返回或设置一个 **TextFrame** 对象，该对象代表形状集合中的上一个文本框架。可读写。



## 语法

express.**Previous**

express   一个代表 **TextFrame** 对象的变量。

## 类型

TextFrame

## 示例


```JavaScript
/*本示例将第一个文档的第一个文字框架和第二个文字框架的左边距设置为30磅。*/
function test() {
    let textFrame = Documents.Item(1).Shapes.Item(2).TextFrame
    textFrame.Previous.MarginLeft = 30
    textFrame.MarginLeft = 30
}
```


```JavaScript
/*本示例将所选形状中文本框架的上一个文本框架设置为活动文档上第二个文本框架，然后设置第二个文本框架内文本的字体颜色。*/
function test() {
    let textFrame = ActiveDocument.Shapes.Item(2).TextFrame
    Selection.ShapeRange.TextFrame.Previous = textFrame
    textFrame.TextRange.Font.Color = RGB(255, 0, 0)
}
```
