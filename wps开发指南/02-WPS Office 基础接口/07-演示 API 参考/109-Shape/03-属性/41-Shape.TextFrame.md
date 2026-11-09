# Shape.TextFrame

返回一个 **[TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/obj)** 对象，该对象包含指定形状或母版文本样式的对齐方式和定位属性。



## 语法

express.**TextFrame**

express   一个代表 **Shape** 对象的变量。

## 类型

TextFrame

## 说明


使用 **TextFrame** 对象的 **TextRange** 属性可返回文本框中的文本。

在应用 **TextFrame** 属性之前，可使用 **HasTextFrame** 属性来确定形状中是否包含文本框。



## 示例


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片中添加一个矩形，向该矩形中添加文本，然后设置文本框的上边距。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    let textFrame = slide.Shapes.AddShape(msoShapeRectangle, 180, 175, 350, 140).TextFrame
    textFrame.TextRange.Text = "Here is some test text"
    textFrame.MarginTop = 10
}
```


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片中插入一个六边形，并设置其文本内容和字体样式。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeHexagon, 100, 100, 200, 100)
    shape.TextFrame.TextRange.Text = '新的文本内容'
    shape.TextFrame.TextRange.Font.Color.RGB = RGB(0, 0, 255)
    shape.TextFrame.TextRange.Font.Bold = true
}
```
