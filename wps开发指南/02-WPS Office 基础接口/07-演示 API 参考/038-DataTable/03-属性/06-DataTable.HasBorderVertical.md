# DataTable.HasBorderVertical

如果图表模拟运算表具有垂直单元格边框，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasBorderVertical**

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
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的模拟运算表是否展示垂直单元格边框。*/
function test() {
    let dataTable = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.DataTable
    alert(dataTable.HasBorderVertical)
}
```
