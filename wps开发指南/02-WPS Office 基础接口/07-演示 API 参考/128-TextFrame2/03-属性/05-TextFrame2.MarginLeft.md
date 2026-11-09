# TextFrame2.MarginLeft

以磅为单位返回或设置从文本框左边界到包含文本的形状中内接矩形的左边界的距离。可读/写 **Single** 类型。



## 语法

express.**MarginLeft**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例在活动演示文稿第一张幻灯片中添加一个矩形，向矩形中添加文本，然后设置文本框架的边距。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let textFrame2 = slide.Shapes.AddShape(msoShapeRectangle, 0, 0, 250, 140).TextFrame2
    textFrame2.TextRange.Text = "Here is some test text"
    textFrame2.MarginBottom = 10
    textFrame2.MarginLeft = 10
    textFrame2.MarginRight = 10
    textFrame2.MarginTop = 10
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状文本框架的左边缘与包含文本的形状的内接矩形的左边缘之间的距离。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.TextFrame2.MarginLeft + " 磅")
}
```
