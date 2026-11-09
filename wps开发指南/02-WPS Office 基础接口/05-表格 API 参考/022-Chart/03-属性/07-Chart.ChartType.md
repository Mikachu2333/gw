# Chart.ChartType

返回或设置图表类型。 **[XlChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartType)** 类型，可读写。



## 语法

express.**ChartType**

express   一个代表 **Chart** 对象的变量。

## 类型

XlChartType

## 说明


某些图表类型对数据透视图报表无效。



## 示例


```JavaScript
/*本示例判断如果第一张工作表第一张内嵌图表为二维气泡图表，则将第一个图表组中的气泡大小设置为默认大小的 200%。*/
function test() {
    let chart = Application.Worksheets.Item(1).ChartObjects(1).Chart
    if (chart.ChartType == xlBubble) {
        chart.ChartGroups(1).BubbleScale = 200
    }
}
```


```JavaScript
/*本示例修改图表工作表 Chart1 为百分比堆积条形图。*/
function test() {
    let charts = Application.Charts.Item("Chart1")
    charts.ChartType = xlBarStacked100
}
```
