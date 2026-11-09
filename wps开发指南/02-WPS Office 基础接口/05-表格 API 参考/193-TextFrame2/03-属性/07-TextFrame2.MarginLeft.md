# TextFrame2.MarginLeft

以磅为单位返回或设置从文本框左边界到包含文本的形状中内接矩形的左边界的距离。可读/写 **Single** 类型。



## 语法

express.**MarginLeft**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例在第一张工作表中添加一个矩形，向矩形中添加文本，然后设置形状文本框左边距为 50 磅。*/
function test() {
    let textFrame2 = Application.Worksheets.Item(1).Shapes.AddShape(msoShapeRectangle, 0, 0, 250, 140).TextFrame2
    textFrame2.TextRange.Text = "这是个矩形"
    textFrame2.MarginLeft = 50
}
```


```JavaScript
/*本示例在活动工作表中添加一个椭圆，向椭圆中添加文本，并显示文本框架的左边距。*/
function test() {
    let textFrame2 = ActiveSheet.Shapes.AddShape(msoShapeOval, 100, 100, 200, 100).TextFrame2
    textFrame2.TextRange.Text = "这是个椭圆"
    alert(textFrame2.MarginLeft)
}
```
