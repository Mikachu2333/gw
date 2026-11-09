# Chart.DataTable

返回一个 **[DataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/obj)** 对象，该对象表示图表的模拟运算表。只读。



## 语法

express.**DataTable**

express   一个代表 **Chart** 对象的变量。

## 类型

DataTable

## 示例


```JavaScript
/*本示例向活动工作表第一张嵌入图表添加带有外框的模拟运算表。*/
function test() {
    let chart = Application.ActiveSheet.ChartObjects(1).Chart
    chart.HasDataTable = true
    chart.DataTable.HasBorderOutline = true
}
```


```JavaScript
/*本示例使第一张工作表第一个内嵌图表模拟运算表显示时带有外边框，但无单元格边框。*/
function test() {
    let chart = Application.Sheets.Item(1).ChartObjects(1).Chart
    chart.HasDataTable = true
    let datatable = chart.DataTable
    datatable.HasBorderHorizontal = false
    datatable.HasBorderVertical = false
    datatable.HasBorderOutline = true
}
```
