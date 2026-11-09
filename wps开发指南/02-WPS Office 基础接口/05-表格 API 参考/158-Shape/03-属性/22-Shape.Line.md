# Shape.Line

返回一个 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/obj)** 对象，它包含指定形状的线条格式属性。对于线条， **LineFormat** 对象代表线条本身；而对于带有边框的形状， **LineFormat** 对象代表边框。只读。



## 语法

express.**Line**

express   一个代表 **Shape** 对象的变量。

## 类型

LineFormat

## 示例


```JavaScript
/*本示例向活动工作表添加一条蓝色虚线。*/
function test() {
    let shapes = ActiveSheet.Shapes
    let shape = shapes.AddLine(10, 10, 250, 250)
    shape.Line.DashStyle = msoLineDashDotDot
    shape.Line.ForeColor.RGB = RGB(50, 0, 128)
}
```


```JavaScript
/*本示例将十字添加到第一张工作表中，然后将其边框设置为8磅厚和红色。*/
function test() {
    let shapes = Worksheets.Item(1).Shapes
    let shape = shapes.AddShape(msoShapeCross, 10, 10, 50, 70)
    shape.Line.Weight = 8
    shape.Line.ForeColor.RGB = RGB(255, 0, 0)
}
```
