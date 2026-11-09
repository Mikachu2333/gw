# Shape.TextFrame2

返回与指定的 Shape 对象（包含指定形状的对齐方式和定位属性）相关联的 TextFrame2 对象。只读。



## 语法

express.**TextFrame2**

express   一个代表 **Shape** 对象的变量。

## 类型

TextFrame2

## 说明


使用 **TextFrame2** 对象的 **TextRange** 属性可返回文本框架中的文本。

使用 **HasTextFrame** 属性来确定形状是否包含文本框架，然后再尝试获取 **TextFrame2** 属性值。



## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加一个矩形，向矩形中添加文本，然后设置文本框的边距。*/
function test() {
    let textFrame2 = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeRectangle, 0, 0, 250, 140).TextFrame2
    textFrame2.TextRange.Text = "Here is some test text"
    textFrame2.MarginBottom = 10
    textFrame2.MarginLeft = 10
    textFrame2.MarginRight = 10
    textFrame2.MarginTop = 10
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个形状的文本框内字号设置为22。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.TextFrame2.TextRange.Font.Size = 22
}
```
