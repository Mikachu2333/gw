# DataTable.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **DataTable** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表的模拟运算表的前景色。*/
function test() {
    let datatable = Application.ActiveDocument.InlineShapes.Item(1).Chart.DataTable
    datatable.Format.Fill.ForeColor.RGB = RGB(0, 255, 255)
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的模拟运算表的线条设置为点划线。*/
function test() {
    let dataTable = Application.Documents.Item(1).Shapes.Item(1).Chart.DataTable
    dataTable.Format.Line.DashStyle = msoLineDashDot
}
```
