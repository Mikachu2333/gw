# PlotArea.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **PlotArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除活动演示文稿的第一张幻灯片上第一个图表的绘图区的格式设置。*/
function test() {
    let plotArea = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.PlotArea
    plotArea.ClearFormats()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题为“test”，则清除该图表上绘图区的格式设置。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "test") {
        chart.PlotArea.ClearFormats()
    }
}
```
