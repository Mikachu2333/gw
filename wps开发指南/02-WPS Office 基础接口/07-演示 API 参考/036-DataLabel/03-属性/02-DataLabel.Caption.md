# DataLabel.Caption

返回或设置数据标签文本。可读/写 **String** 类型。



## 语法

express.**Caption**

express   一个代表 **DataLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示活动演示文稿的第一张幻灯片中第一个图表的第一个数据系列的第二个数据标签的文本。*/
function test() {
    let dataLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels(2)
    alert(dataLabel.Caption)
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第二个数据标签的文本。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(2).DataLabels(2).Caption = "example_1"
}
```
