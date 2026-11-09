# TextFrame.MarginRight

以磅为单位返回或设置从文本框右边界到包含文本的形状中内接矩形右边界的距离。可读写。 **Single** 类型。



## 语法

express.**MarginRight**

express   一个代表 **TextFrame** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例在活动文档中添加一个矩形，向矩形中添加文本，然后设置文本框架的边距。*/
function test() {
    let textFrame = Application.ActiveDocument.Shapes.AddShape(msoShapeRectangle, 0, 0, 250, 140).TextFrame
    textFrame.TextRange.Text = "Here is some test text"
    textFrame.MarginBottom = 0
    textFrame.MarginLeft = 100
    textFrame.MarginRight = 0
    textFrame.MarginTop = 20
}
```


```JavaScript
/*本示例在活动文档中添加一个椭圆，向椭圆中添加文本，然后显示文本框架的右边距。*/
function test() {
    let textFrame = Application.ActiveDocument.Shapes.AddShape(msoShapeOval, 100, 100, 200, 100).TextFrame
    textFrame.TextRange.Text = "这是个椭圆"
    alert(textFrame.MarginRight)
}
```
