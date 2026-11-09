# Chart.HasDataTable

如果图表有模拟运算表，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**HasDataTable**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使第一张工作表第一个嵌入式图表模拟运算表显示时带有外边框，但无单元格边框。*/
function test() {
    let chart = Application.Worksheets.Item(1).ChartObjects(1).Chart
    chart.HasDataTable = true
    let table = chart.DataTable
    table.HasBorderHorizontal = false
    table.HasBorderVertical = false
    table.HasBorderOutline = true
}
```


```JavaScript
/*本示例判断图表工作表是否拥有模拟运算表，并通知用户。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    if (chart.HasDataTable) {
        alert("该图表工作表有模拟运算表")
    } else {
        alert("该图表工作表没有模拟运算表")
    }
}
```
