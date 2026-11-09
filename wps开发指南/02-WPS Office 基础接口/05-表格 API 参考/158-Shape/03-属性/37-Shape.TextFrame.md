# Shape.TextFrame

返回一个 **[TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame/obj)** 对象，它包含指定形状的对齐方式和定位属性。



## 语法

express.**TextFrame**

express   一个代表 **Shape** 对象的变量。

## 类型

TextFrame

## 示例


```JavaScript
/*本示例将第一张工作表中的第一个形状中文本框内的文本设置为两端对齐。*/
function test() {
    Application.Worksheets.Item(1).Shapes.Item(1).TextFrame.HorizontalAlignment = xlHAlignJustify
}
```


```JavaScript
/*下例向活动工作表中添加一个矩形，向矩形中添加文本，然后设置文本框的边距。*/
function test() {
    let textFrame = ActiveSheet.Shapes.AddShape(msoShapeRectangle, 0, 0, 250, 140).TextFrame
    textFrame.Characters().Text = "Here is some test text"
    textFrame.MarginBottom = 10
    textFrame.MarginLeft = 10
    textFrame.MarginRight = 10
    textFrame.MarginTop = 10
}
```
