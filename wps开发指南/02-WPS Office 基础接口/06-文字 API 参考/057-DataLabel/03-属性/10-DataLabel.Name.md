# DataLabel.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **DataLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档中第一张内嵌图表的第一个数据系列的第四个数据标签的名称。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    chart.SeriesCollection(1).HasDataLabels = true
    alert("数据标签的名称：" + chart.SeriesCollection(1).DataLabels(4).Name)
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第一个数据系列的第二个数据点的数据标签的名称。*/
function test() {
    let point = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(2)
    alert(point.DataLabel.Name)
}
```
