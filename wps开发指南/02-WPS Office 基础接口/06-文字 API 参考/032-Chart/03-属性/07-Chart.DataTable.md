# Chart.DataTable

返回图表模拟运算表。只读 **[DataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataTable/obj)** 对象。



## 语法

express.**DataTable**

express   一个代表 **Chart** 对象的变量。

## 类型

DataTable

## 示例


```JavaScript
/*本示例向活动文档中的第一个图表添加带外边框的模拟运算表。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.HasDataTable = true
        inlineShape.Chart.DataTable.HasBorderOutline = true
    }
}
```


```JavaScript
/*本示例向第一个文档中的第一个图表添加带外边框的模拟运算表，并为模拟运算表添加样式。*/
function test() {
    let chart = Documents.Item(1).InlineShapes(1).Chart
    chart.HasDataTable = true
    let datatable = chart.DataTable
    datatable.HasBorderHorizontal = false
    datatable.HasBorderVertical = true
    datatable.HasBorderOutline = true
    datatable.Font.Size = 8
    datatable.Format.Fill.ForeColor.RGB = RGB(0, 255, 255)
}
```
