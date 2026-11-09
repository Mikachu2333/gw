# SeriesLines.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **SeriesLines** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的第一个图表组中的系列线的边框粗细设置为xlMedium。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let chartGroup = shape.Chart.ChartGroups(1)
        chartGroup.HasSeriesLines = true
        chartGroup.SeriesLines.Border.Weight = xlMedium
    }
}
```


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片上第一个图表的第一个图表组中的系列线的边框线条样式为 xlDashDotDot。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.ChartGroups(1).SeriesLines.Border.LineStyle = xlDashDotDot
}
```
