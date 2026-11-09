# Chart.DataTable

返回图表模拟运算表。只读 **[DataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataTable/obj)** 对象。



## 语法

express.**DataTable**

express   一个代表 **Chart** 对象的变量。

## 类型

DataTable

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片的第一个图表添加带外边框的模拟运算表。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.HasDataTable = true
        shape.Chart.DataTable.HasBorderOutline = true
    }
}
```


```JavaScript
/*本示例向第一个演示文稿的第一张幻灯片中第二个图表添加带外边框的模拟运算表，并为模拟运算表添加样式。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    chart.HasDataTable = true
    let datatable = chart.DataTable
    datatable.HasBorderHorizontal = false
    datatable.HasBorderVertical = true
    datatable.HasBorderOutline = true
    datatable.Font.Size = 8
    datatable.Format.Fill.ForeColor.RGB = RGB(0, 255, 0)
}
```
