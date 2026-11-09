# DataLabel.AutoText

如果对象会根据内容自动生成合适的文字，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoText**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例将活动文档中第一个内嵌图表的第一个数据系列的第一个数据标签设置为自动生成合适的文字。*/
function test() {
    let dataLabel = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1).DataLabels(1)
    dataLabel.AutoText = true
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的标题文本为“成绩表_2”，则显示该图表第二个数据系列的第一个数据标签是否自动生成合适的文字。*/
function test() {
    let chart = Application.Documents.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "成绩表_2") {
        alert(chart.SeriesCollection(2).DataLabels(1).AutoText)
    }
}
```
