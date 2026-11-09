# DropLines.Border

返回一个 **Border** 对象，它代表对象的边框。



## 语法

express.**Border**

express   一个代表 **DropLines** 对象的变量。

## 类型

Border

## 示例


```JavaScript
/*本示例打开工作表 Sheet1 中第一个图表的第一个图表组的垂直线，并将该垂直线设置为虚线。*/
function test() {
    let chartgroup = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasDropLines = true
    chartgroup.DropLines.Border.LineStyle = xlDash
}
```


```JavaScript
/*本示例打开图表工作表 Chart1 中图表的第一个图表组的垂直线，并将该垂直线的颜色设置为黄色。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasDropLines = true
    chartgroup.DropLines.Border.ColorIndex = 6
}
```
