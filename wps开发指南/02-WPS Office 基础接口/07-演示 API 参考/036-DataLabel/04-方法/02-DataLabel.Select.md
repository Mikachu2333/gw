# DataLabel.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DataLabel** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片中第一张图表的第三个数据系列的第三个数据标签。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(3).DataLabels(3).Select()
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的第一个数据系列的第三个数据点的数据标签的位置设置为xlLabelPositionLeft，然后选中该数据标签。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(3)
    point.DataLabel.Position = xlLabelPositionLeft
    point.DataLabel.Select()
}
```
