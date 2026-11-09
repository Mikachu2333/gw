# DataLabels.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DataLabels** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档中第一张内嵌图表的第一个数据系列的数据标签。*/
function test() {
    let dataLabels = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1).DataLabels()
    dataLabels.Select()
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的第三个数据系列的数据标签的位置，并选中该数据标签。*/
function test() {
    let dataLabels = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).DataLabels()
    dataLabels.Position = xlLabelPositionLeft
    dataLabels.Select()
}
```
