# Axis.MajorGridlines

返回一个 **Gridlines** 对象，该对象表示指定坐标轴的主要网格线。只有主要坐标轴组中的坐标轴才能有网格线。只读。



## 语法

express.**MajorGridlines**

express   一个代表 **Axis** 对象的变量。

## 类型

Gridlines

## 示例


```JavaScript
/*本示例为图表工作表 Chart1 中数值轴的主要网格线设置为蓝色。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes().Item(xlValue)
    if (axis.HasMajorGridlines) {
        //set color to blue
        axis.MajorGridlines.Border.ColorIndex = 5
    }
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的分类轴的主要网格线设置为红色的虚线。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.MajorGridlines.Border.ColorIndex = 3
    axis.MajorGridlines.Format.Line.DashStyle = msoLineDashDotDot
}
```
