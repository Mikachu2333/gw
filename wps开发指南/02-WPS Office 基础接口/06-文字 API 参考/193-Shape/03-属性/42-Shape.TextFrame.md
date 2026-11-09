# Shape.TextFrame

返回一个 **TextFrame** 对象，该对象包含指定形状的文字。



## 语法

express.**TextFrame**

express   一个代表 **Shape** 对象的变量。

## 类型

TextFrame

## 示例


```JavaScript
/*本示例在活动文档中添加一个矩形，在该矩形中添加文本，并为文本框架设置边距。*/
function test() {
    let textframe = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 0, 0, 200, 140).TextFrame
    textframe.TextRange.Text = "Here is some test text"
    textframe.MarginBottom = 0
    textframe.MarginLeft = 100
    textframe.MarginRight = 0
    textframe.MarginTop = 20
}
```


```JavaScript
/*本示例在第一个文档中插入一个六边形，并设置其文本内容和样式。*/
function test() {
    let shape = Documents.Item(1).Shapes.AddShape(msoShapeHexagon, 100, 100, 200, 100)
    shape.TextFrame.TextRange.Text = '新的文本内容'
    shape.TextFrame.TextRange.Font.Color = wdColorRed
    shape.TextFrame.TextRange.Font.Bold = true
}
```
