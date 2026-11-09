# DataLabel.Text

返回或设置指定对象中的文本。可读/写 **String** 类型。



## 语法

express.**Text**

express   一个代表 **DataLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动文档中第一张内嵌图表的第三个数据系列的第三个数据标签的文本。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    chart.SeriesCollection(3).DataLabels(3).Text = "example_1"
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第一个数据系列的第三个数据点的数据标签的文本。*/
function test() {
    let point = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(3)
    alert(`数据标签的文本：${point.DataLabel.Text}`)
}
```
