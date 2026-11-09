# DataTable.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DataTable** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例选中活动文档中第一个内嵌图表的模拟运算表。*/
function test() {
    let dataTable = ActiveDocument.InlineShapes.Item(1).Chart.DataTable
    dataTable.Select()
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的模拟运算表设置为不展示垂直单元格边框，然后选中该模拟运算表。*/
function test() {
    let dataTable = Application.Documents.Item(1).Shapes.Item(1).Chart.DataTable
    dataTable.HasBorderVertical = false
    dataTable.Select()
}
```
