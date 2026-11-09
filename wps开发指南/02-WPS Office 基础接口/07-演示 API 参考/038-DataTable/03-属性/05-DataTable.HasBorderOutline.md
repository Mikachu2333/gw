# DataTable.HasBorderOutline

如果图表模拟运算表具有外部边框，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasBorderOutline**

express   一个代表 **DataTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使活动演示文稿的第一张幻灯片中第一个图表的模拟运算表显示外边框，但无单元格边框。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.HasDataTable = true
        let datatable = shape.Chart.DataTable
        datatable.HasBorderHorizontal = false
        datatable.HasBorderVertical = false
        datatable.HasBorderOutline = true
    }
}
```


```JavaScript
/*本示例判断第一个演示文稿的第一张幻灯片上第一个图表的模拟运算表是否具有外部边框，并通知用户。*/
function test() {
    let dataTable = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.DataTable
    if (dataTable.HasBorderOutline) {
        alert("模拟运算表具有外部边框")
    } else {
        alert("模拟运算表不具有外部边框")
    }
}
```
