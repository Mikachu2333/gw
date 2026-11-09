# DataLabel.AutoText

如果对象会根据内容自动生成合适的文本，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**AutoText**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例将活动演示文稿的第一张幻灯片中第一个图表的第一个数据系列的第一个数据标签设置为自动生成合适的文字。*/
function test() {
    let dataLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels(1)
    dataLabel.AutoText = true
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题文本为“test”，则显示该图表第二个数据系列的第一个数据标签是否自动生成合适的文字。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "test") {
        alert(chart.SeriesCollection(2).DataLabels(1).AutoText)
    }
}
```
