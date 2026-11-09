# Chart.HasDataTable

如果图表有模拟运算表，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasDataTable**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使活动演示文稿的第一张幻灯片的第一个图表的模拟运算表显示时带有外边框，但无单元格边框。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.HasDataTable = true
        let dataTable = shape.Chart.DataTable
        dataTable.HasBorderHorizontal = false
        dataTable.HasBorderVertical = false
        dataTable.HasBorderOutline = true
    }
}
```


```JavaScript
/*本示例判断第一个演示文稿的第一张幻灯片上第二张图表是否含有模拟运算表，并通知用户。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes(2).Chart
    if (chart.HasDataTable) {
        alert("图表有模拟运算表")
    } else {
        alert("图表没有模拟运算表")
    }
}
```
