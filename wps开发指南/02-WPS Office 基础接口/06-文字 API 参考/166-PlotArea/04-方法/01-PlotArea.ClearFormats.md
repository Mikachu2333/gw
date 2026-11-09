# PlotArea.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **PlotArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除活动文档上第一个内嵌图表的绘图区的格式设置。*/
function test() {
    let plotArea = ActiveDocument.InlineShapes.Item(1).Chart.PlotArea
    plotArea.ClearFormats()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的标题为“example_2”，则清除该图表上绘图区的格式设置。*/
function test() {
    let chart = Documents.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "example_2") {
        chart.PlotArea.ClearFormats()
    }
}
```
