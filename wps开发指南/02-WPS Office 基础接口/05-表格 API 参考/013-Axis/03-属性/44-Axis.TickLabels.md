# Axis.TickLabels

返回一个 **TickLabels** 对象，该对象表示指定坐标轴的刻度线标签。只读。



## 语法

express.**TickLabels**

express   一个代表 **Axis** 对象的变量。

## 类型

TickLabels

## 示例


```JavaScript
/*本示例为图表工作表 Chart1 中图表的数值轴刻度线标签的字体设置颜色。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    axis.TickLabels.Font.ColorIndex = 3
}
```


```JavaScript
/*本示例为工作表 Sheet1 中的第一个图表的类别轴刻度线标签的字体设置加粗，并显示该轴各级别标签之间的距离。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.TickLabels.Font.Bold = true
    alert(axis.TickLabels.Offset)
}
```
