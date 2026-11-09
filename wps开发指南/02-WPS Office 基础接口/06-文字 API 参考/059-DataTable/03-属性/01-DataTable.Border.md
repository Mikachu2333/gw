# DataTable.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **DataTable** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例将第一个文档中第一张内嵌图表的模拟运算表的边框线条样式设置为虚线。*/
function test() {
    let dataTable = Application.Documents.Item(1).InlineShapes(1).Chart.DataTable
    dataTable.Border.LineStyle = xlDash
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的模拟运算表的边框粗细设置为细线边框。*/
function test() {
    let dataTable = Application.Documents.Item(1).Shapes.Item(1).Chart.DataTable
    dataTable.Border.Weight = xlHairline
}
```
