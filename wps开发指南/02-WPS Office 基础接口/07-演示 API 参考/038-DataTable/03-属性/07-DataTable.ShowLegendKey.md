# DataTable.ShowLegendKey

如果数据标签图例项标示可见，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ShowLegendKey**

express   一个代表 **DataTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的模拟运算表的图例项标示设置为不可见。*/
function test() {
    let datatable = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.DataTable
    datatable.ShowLegendKey = false
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的模拟运算表的图例项标示是否可见。*/
function test() {
    let dataTable = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.DataTable
    alert(dataTable.ShowLegendKey)
}
```
