# Gridlines.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **Gridlines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 数值轴的主要网格线的前景色是否为蓝色。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    let chartFormat = axis.MajorGridlines.Format
    alert(chartFormat.Fill.ForeColor.RGB == RGB(0, 0, 255))
}
```


```JavaScript
/*本示例打开工作表 Sheet1 中第一个图表类别轴的次要网格线，并设置网格线的虚线样式。*/
function test() {
    let axis = Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.HasMinorGridlines = true
    axis.MinorGridlines.Format.Line.DashStyle = msoLineDash
}
```
