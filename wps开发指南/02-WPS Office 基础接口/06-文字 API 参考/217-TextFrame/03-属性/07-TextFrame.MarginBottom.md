# TextFrame.MarginBottom

以磅为单位返回或设置从文本框底端到包含文本的形状中内接矩形底端的距离。可读写。 **Single** 类型。



## 语法

express.**MarginBottom**

express   一个代表 **TextFrame** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例在活动文档中添加一个矩形，向矩形中添加文本，然后设置文本框架的边距。*/
function test() {
    let textFrame = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 0, 0, 200, 140).TextFrame
    textFrame.TextRange.Text = "Here is some test text"
    textFrame.MarginBottom = 0
    textFrame.MarginLeft = 100
    textFrame.MarginRight = 0
    textFrame.MarginTop = 20
}
```


```JavaScript
/*本示例显示所选形状的文本框架的底部边距。*/
function test() {
    alert(Selection.ShapeRange.TextFrame.MarginBottom + " 磅")
}
```
