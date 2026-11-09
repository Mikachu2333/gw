# DataTable.Border

返回一个 **Border** 对象，它代表对象的边框。



## 语法

express.**Border**

express   一个代表 **DataTable** 对象的变量。

## 类型

Border

## 示例


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的模拟运算表的边框线条样式设置为虚线。*/
function test() {
    let datatable = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.DataTable
    datatable.Border.LineStyle = xlDash
}
```


```JavaScript
/*本示例为图表工作表 Chart1 中图表添加模拟运算表，并将该运算表边框设置为红色的细线。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.HasDataTable = true
    chart.DataTable.Border.ColorIndex = 3
    chart.DataTable.Border.Weight = xlHairline
}
```
