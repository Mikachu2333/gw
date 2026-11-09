# DataLabels.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DataLabels** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例删除活动演示文稿的第一张幻灯片中第一张图表的第一个数据系列的数据标签。*/
function test() {
    let dataLabels = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels()
    dataLabels.Delete()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题文本为“test”，则删除该图表第三个数据系列的数据标签。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "test") {
        chart.SeriesCollection(3).DataLabels().Delete()
    }
}
```
