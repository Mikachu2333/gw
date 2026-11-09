# DataTable.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DataTable** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片中第一个图表的模拟运算表。*/
function test() {
    let dataTable = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.DataTable
    dataTable.Delete()
}
```


```JavaScript
/*本示例删除第一个演示文稿的第一张幻灯片上第一个图表的模拟运算表。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    chart.DataTable.Delete()
}
```
