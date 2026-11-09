# ShapeRange.Fill

返回指定形状的 **FillFormat** 对象或指定图表的 **ChartFillFormat** 对象，这些对象包含形状或图表的填充格式属性。只读。



## 语法

express.**Fill**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

FillFormat

## 示例


```JavaScript
/*本示例为第一张工作表中新建的ShapeRange对象设置填充格式的前景色、背景色和渐变。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2])
    shpRange.Fill.ForeColor.RGB = RGB(128, 0, 0)
    shpRange.Fill.BackColor.RGB = RGB(170, 170, 170)
    shpRange.Fill.TwoColorGradient(msoGradientHorizontal, 1)
}
```


```JavaScript
/*本示例将活动工作表的所有形状的前景色设置为红色。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```
