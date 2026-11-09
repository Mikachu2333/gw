# DataLabel.Caption

返回或设置一个 **String** 值，它代表数据标签文本。



## 语法

express.**Caption**

express   一个代表 **DataLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示活动文档中第一个内嵌图表的第一个数据系列的第二个数据标签的文本。*/
function test() {
    let dataLabel = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1).DataLabels(2)
    alert(dataLabel.Caption)
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的第二个数据系列的第二个数据标签的文本。*/
function test() {
    let chart = Application.Documents.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(2).DataLabels(2).Caption = "example_1"
}
```
