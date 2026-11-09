# Shape.TextFrame2

返回一个 **[TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/obj)** 对象，该对象包含指定形状的文本格式。只读。



## 语法

express.**TextFrame2**

express   一个代表 **Shape** 对象的变量。

## 类型

TextFrame2

## 示例


```JavaScript
/*本示例向活动工作表中添加一个矩形，向矩形中添加文本，然后设置文本框的边距。*/
function test() {
    let textFrame2 = ActiveSheet.Shapes.AddShape(msoShapeRectangle, 0, 0, 250, 140).TextFrame2
    textFrame2.TextRange.Text = "Here is some test text"
    textFrame2.MarginBottom = 10
    textFrame2.MarginLeft = 10
    textFrame2.MarginRight = 10
    textFrame2.MarginTop = 10
}
```


```JavaScript
/*本示例将第一张工作表中第一个形状的文本框内字号设置为22。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(1)
    shape.TextFrame2.TextRange.Font.Size = 22
}
```
