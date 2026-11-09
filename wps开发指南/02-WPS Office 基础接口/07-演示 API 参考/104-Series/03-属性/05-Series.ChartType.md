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
/*本示例将活动演示文稿上第一张幻灯片中第一个图表的第二个系列的图表类型设置为折线散点图。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(2).ChartType = xlXYScatterLines
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列的图表类型是否为气泡图。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(3).ChartType == xlBubble)
}
```
