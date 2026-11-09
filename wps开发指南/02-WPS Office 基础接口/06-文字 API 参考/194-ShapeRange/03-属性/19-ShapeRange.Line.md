# ShapeRange.Line

返回一个 **LineFormat** 对象，该对象包含指定形状范围的线条格式属性。只读。



## 语法

express.**Line**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

LineFormat

## 说明


对于线条来说， **LineFormat** 对象代表线条本身；而对于带有边框的形状范围来说， **LineFormat** 对象代表边框。



## 示例


```JavaScript
/*本示例设置活动文档中第一个和第二个形状的边框的前景填充色。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.Line.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例设置选中形状的边框的虚线样式。*/
function test() {
    Selection.ShapeRange.Line.DashStyle = msoLineDash
}
```
