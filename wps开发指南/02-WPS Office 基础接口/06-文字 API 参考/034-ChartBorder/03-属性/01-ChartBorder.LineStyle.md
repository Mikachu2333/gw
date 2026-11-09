# ChartBorder.LineStyle

返回或设置边框的线型。可读/写 **[XlLineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/XlLineStyle)** 、 **xlGray25** 、 **xlGray50** 、 **xlGray75** 或 **xlAutomatic** 。



## 语法

express.**LineStyle**

express   一个代表 **ChartBorder** 对象的变量。

## 类型

any

## 说明


 **XlLineStyle** 枚举的 **xlDouble** 和 **xlSlantDashDot** 常量不适用于图表。



## 示例


```JavaScript
/*本示例为活动文档中第一个图表的图表区和绘图区设置边框。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let chart = inlineShape.Chart
        chart.ChartArea.Border.LineStyle = xlDashDot
        let border = chart.PlotArea.Border
        border.LineStyle = xlDashDotDot
        border.Weight = xlThick
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第二个数据系列的第一个趋势线的线型是否为实线。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(2).Trendlines(1).Border.LineStyle == xlContinuous)
}
```
