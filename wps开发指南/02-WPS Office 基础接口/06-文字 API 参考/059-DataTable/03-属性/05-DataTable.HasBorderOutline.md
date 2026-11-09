# DataTable.HasBorderOutline

如果图表模拟运算表具有外部边框，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasBorderOutline**

express   一个代表 **DataTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使活动文档中第一个内嵌图表的模拟运算表显示外边框，但无单元格边框。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.HasDataTable = true
        let datatable = inlineShape.Chart.DataTable
        datatable.HasBorderHorizontal = false
        datatable.HasBorderVertical = false
        datatable.HasBorderOutline = true
    }
}
```


```JavaScript
/*本示例判断第一个文档上第一个形状中图表的模拟运算表是否具有外部边框，并通知用户。*/
function test() {
    let dataTable = Application.Documents.Item(1).Shapes.Item(1).Chart.DataTable
    if (dataTable.HasBorderOutline) {
        alert("模拟运算表具有外部边框")
    } else {
        alert("模拟运算表不具有外部边框")
    }
}
```
