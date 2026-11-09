# TextFrame2.MarginTop

返回或设置从文本框顶端到包含文本的形状的内接矩形顶端的距离（以磅为单位）。可读/写 **Single** 类型。



## 语法

express.**MarginTop**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例在第一张工作表中添加一个平行四边形，向平行四边形中添加文本，然后设置形状文本框顶部的边距为 20 磅。*/
function test() {
    let textFrame2 = Application.Worksheets.Item(1).Shapes.AddShape(msoShapeParallelogram, 0, 0, 250, 140).TextFrame2
    textFrame2.TextRange.Text = "这是个平行四边形"
    textFrame2.MarginTop = 20
}
```


```JavaScript
/*本示例在活动工作表中添加一个椭圆，向椭圆中添加文本，并显示文本框架的顶部边距。*/
function test() {
    let textFrame2 = ActiveSheet.Shapes.AddShape(msoShapeOval, 100, 100, 200, 100).TextFrame2
    textFrame2.TextRange.Text = "这是个椭圆"
    alert(textFrame2.MarginTop)
}
```
