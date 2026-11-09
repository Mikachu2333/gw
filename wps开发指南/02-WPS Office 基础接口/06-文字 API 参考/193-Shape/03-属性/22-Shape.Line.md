# Shape.Line

返回一个 **LineFormat** 对象，该对象包含指定形状的线条格式属性。只读。



## 语法

express.**Line**

express   一个代表 **Shape** 对象的变量。

## 类型

LineFormat

## 说明


对于线条来说， **LineFormat** 对象代表线条本身；而对于带有边框的形状来说， **LineFormat** 对象代表边框。



## 示例


```JavaScript
/*本示例向活动文档添加一条蓝色虚线。*/
function test() {
    let line = ActiveDocument.Shapes.AddLine(10, 10, 250, 250).Line
    line.DashStyle = msoLineDashDotDot
    line.ForeColor.RGB = RGB(50, 0, 128)
}
```


```JavaScript
/*本示例向活动文档添加一个十字形，然后将其边框粗细设置为 8 磅、颜色为红色。*/
function test() {
    let line = ActiveDocument.Shapes.AddShape(msoShapeCross, 10, 10, 50, 70).Line
    line.Weight = 8
    line.ForeColor.RGB = RGB(255, 0, 0)
}
```
