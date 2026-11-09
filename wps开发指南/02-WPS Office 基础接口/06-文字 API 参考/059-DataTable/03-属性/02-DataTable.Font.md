# DataTable.Font

返回指定对象的字体。只读 **[ChartFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFont/obj)** 对象。



## 语法

express.**Font**

express   一个代表 **DataTable** 对象的变量。

## 类型

ChartFont

## 示例


```JavaScript
/*本示例将活动文档上第一张内嵌图表的模拟运算表中的字体设置为斜体粗体。*/
function test() {
    let dataTable = Application.ActiveDocument.InlineShapes.Item(1).Chart.DataTable
    dataTable.Font.Italic = true
    dataTable.Font.Bold = true
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的模拟运算表的字体字号设置为 12 磅，并将其字体名称设置为 Arial。*/
function test() {
    let dataTable = Application.Documents.Item(1).Shapes.Item(1).Chart.DataTable
    dataTable.Font.Size = 12
    dataTable.Font.Name = "Arial"
}
```
