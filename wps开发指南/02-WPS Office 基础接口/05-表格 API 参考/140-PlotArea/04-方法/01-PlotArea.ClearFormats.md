# PlotArea.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **PlotArea** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例清除 Chart1 中绘图区的格式设置。*/
function test() {
    let plotArea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.PlotArea
    plotArea.ClearFormats()
}
```


```JavaScript
/*下例清除 Sheet1 上第一个图表绘图区的格式设置。*/
function test() {
    let plotArea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.PlotArea
    plotArea.ClearFormats()
}
```
