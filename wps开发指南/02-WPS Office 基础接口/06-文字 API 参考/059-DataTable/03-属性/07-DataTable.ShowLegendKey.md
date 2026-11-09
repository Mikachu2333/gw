# DataTable.ShowLegendKey

如果数据标签图例项标示可见，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ShowLegendKey**

express   一个代表 **DataTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档中第一个内嵌图表的模拟运算表的图例项标示设置为不可见。*/
function test() {
    let datatable = ActiveDocument.InlineShapes.Item(1).Chart.DataTable
    datatable.ShowLegendKey = false
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的模拟运算表的图例项标示是否可见。*/
function test() {
    let dataTable = Application.Documents.Item(1).Shapes.Item(1).Chart.DataTable
    alert(dataTable.ShowLegendKey)
}
```
