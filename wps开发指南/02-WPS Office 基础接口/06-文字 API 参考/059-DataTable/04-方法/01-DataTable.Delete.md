# DataTable.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DataTable** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档中第一个内嵌图表的模拟运算表。*/
function test() {
    let datatable = Application.ActiveDocument.InlineShapes(1).Chart.DataTable
    datatable.Delete()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的模拟运算表的线条样式为实线，则删除该模拟运算表。*/
function test() {
    let dataTable = Application.Documents.Item(1).Shapes.Item(1).Chart.DataTable
    if (dataTable.Border.LineStyle == xlContinuous) {
        dataTable.Delete()
    }
}
```
