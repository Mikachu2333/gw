# SeriesLines.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **SeriesLines** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例将活动文档中第一个图表的第一个图表组中的系列线的边框粗细设置为中等。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let chartGroup = inlineShape.Chart.ChartGroups(1)
        chartGroup.HasSeriesLines = true
        chartGroup.SeriesLines.Border.Weight = xlMedium
    }
}
```


```JavaScript
/*本示例设置活动文档上第一个形状中图表的第一个图表组中的系列线的边框线条样式为 xlDashDotDot。*/
function test() {
    let chart = ActiveDocument.Shapes.Item(1).Chart
    chart.ChartGroups(1).SeriesLines.Border.LineStyle = xlDashDotDot
}
```
