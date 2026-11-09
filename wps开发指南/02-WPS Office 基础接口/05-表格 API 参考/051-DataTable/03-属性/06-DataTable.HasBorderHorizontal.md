# DataTable.HasBorderHorizontal

如果图表模拟运算表具有水平单元格边框，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**HasBorderHorizontal**

express   一个代表 **DataTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使嵌入图表模拟运算表显示时带有外边框，但无单元格边框。*/
function test() {
    let chart = Application.Worksheets.Item(1).ChartObjects(1).Chart
    chart.HasDataTable = true
    let datatable = chart.DataTable
    datatable.HasBorderHorizontal = false
    datatable.HasBorderVertical = false
    datatable.HasBorderOutline = true
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 中图表的模拟运算表是否具有水平单元格边框。*/
function test() {
    let datatable = Application.Charts.Item("Chart1").ChartObjects(1).Chart.DataTable
    alert(datatable.HasBorderHorizontal)
}
```
