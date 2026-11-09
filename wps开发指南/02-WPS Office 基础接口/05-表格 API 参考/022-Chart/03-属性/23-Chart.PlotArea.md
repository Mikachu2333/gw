# Chart.PlotArea

返回一个 **[PlotArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/obj)** 对象，该对象表示图表的绘图区。只读。



## 语法

express.**PlotArea**

express   一个代表 **Chart** 对象的变量。

## 类型

PlotArea

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 绘图区的内部颜色设置为蓝绿色。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.PlotArea.Interior.ColorIndex = 8
}
```


```JavaScript
/*本示例将工作表Sheet1第一张内嵌图表的图表区设置为虚线边框，绘图区设置为点线边框。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart
    chart.ChartArea.Border.LineStyle = xlDash
    chart.PlotArea.Border.LineStyle = xlDot
}
```
