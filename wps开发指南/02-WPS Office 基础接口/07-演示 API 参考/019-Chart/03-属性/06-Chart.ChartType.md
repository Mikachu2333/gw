# Chart.ChartType

返回或设置图表类型。 **[XlChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartType)** 类型，可读写。



## 语法

express.**ChartType**

express   一个代表 **Chart** 对象的变量。

## 类型

XlChartType

## 说明


某些图表类型对数据透视图无效。



## 示例


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片内第一张图表为二维气泡图表，则将第一个图表组中的气泡大小设置为默认大小的 200%。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartType == xlBubble) {
        chart.ChartGroups(1).BubbleScale = 200
    }
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片内第二张图表的图表类型设置为百分比堆积条形图。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    chart.ChartType = xlBarStacked100
}
```
