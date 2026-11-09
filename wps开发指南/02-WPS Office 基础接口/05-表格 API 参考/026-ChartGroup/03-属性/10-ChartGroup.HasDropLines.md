# ChartGroup.HasDropLines

如果折线图或者面积图中有垂直线，则该值为 **True** 。仅应用于折线图和面积图。 **Boolean** 类型，可读写。



## 语法

express.**HasDropLines**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中第一个图表组的垂直线，并对其线型、粗细和颜色进行设置。本示例应在包含一个数据系列的二维折线图上运行。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasDropLines = true
    let border = chartgroup.DropLines.Border
    border.LineStyle = xlDash
    border.Weight = xlMedium
    border.ColorIndex = 3
}
```


```JavaScript
/*本示例显示工作表 Sheet1 第一个内嵌图表中第一个图表组中是否有垂直线。本示例应在包含一个数据系列的二维折线图上运行。*/
function test() {
    let chartgroup = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.HasDropLines)
}
```
