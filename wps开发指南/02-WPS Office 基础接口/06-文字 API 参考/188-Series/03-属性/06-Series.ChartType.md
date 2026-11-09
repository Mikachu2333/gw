# Series.ChartType

返回或设置图表类型。可读/写 **[XlChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartType)** 。



## 语法

express.**ChartType**

express   一个代表 **Series** 对象的变量。

## 类型

XlChartType

## 说明


某些图表类型对数据透视图无效。



## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的第一个系列的图表类型是否为气泡图。*/
function test() {
    let series = ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1)
    alert(series.ChartType == xlBubble)
}
```


```JavaScript
/*本示例将第一个文档中第二个图表的第一个数据系列的图表类型设置为折线散点图。*/
function test() {
    let series = Documents.Item(1).InlineShapes.Item(2).Chart.SeriesCollection(1)
    series.ChartType = xlXYScatterLines
}
```
