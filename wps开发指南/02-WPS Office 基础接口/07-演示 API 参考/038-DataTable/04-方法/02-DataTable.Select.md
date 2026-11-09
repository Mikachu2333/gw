# DataTable.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DataTable** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片中第一个图表的模拟运算表。*/
function test() {
    let dataTable = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.DataTable
    dataTable.Select()
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的模拟运算表设置为不展示垂直单元格边框，然后选中该模拟运算表。*/
function test() {
    let dataTable = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.DataTable
    dataTable.HasBorderVertical = false
    dataTable.Select()
}
```
