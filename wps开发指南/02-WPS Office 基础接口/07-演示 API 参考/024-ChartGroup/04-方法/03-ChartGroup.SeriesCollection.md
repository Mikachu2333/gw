# ChartGroup.SeriesCollection

返回图表组中的所有系列。



## 语法

express.**SeriesCollection(Index)**

express   一个代表 **ChartGroup** 对象的变量。

## 返回值

一个代表图表组中所有系列的 **[SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SeriesCollection/obj)** 对象。

## 示例


```JavaScript
/*此示例对活动演示文稿的第一张幻灯片中第一个图表的第一个图表组的第一个系列应用数据标签。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ChartGroups(1).SeriesCollection(1).HasDataLabels = true
    }
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的第二个系列的图表类型。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartGroup.SeriesCollection(2).ChartType = xlLine
}
```
