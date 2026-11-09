# DataLabel.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DataLabel** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例将活动演示文稿的第一张幻灯片中第一张图表的第一个数据系列的第一个数据标签删除。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels(1).Delete()
}
```


```JavaScript
/*本示例删除第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第三个数据标签。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(2).DataLabels(3).Delete()
}
```
