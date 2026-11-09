# TextFrame.MarginLeft

以磅为单位返回或设置从文本框的左边缘到包含文本的形状的内接矩形的左边缘之间的距离。可读/写。



## 语法

express.**MarginLeft**

express   一个代表 **TextFrame** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例在活动演示文稿第一张幻灯片中添加一个矩形，向矩形中添加文本，然后设置文本框架的边距。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let textFrame = slide.Shapes.AddShape(msoShapeRectangle, 0, 0, 250, 140).TextFrame
    textFrame.TextRange.Text = "Here is some test text"
    textFrame.MarginBottom = 0
    textFrame.MarginLeft = 100
    textFrame.MarginRight = 0
    textFrame.MarginTop = 20
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个形状中文本框架的左边缘与包含文本的形状的内接矩形的左边缘之间的距离。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes(1)
    alert(shape.TextFrame.MarginLeft + " 磅")
}
```
