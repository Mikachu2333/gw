# ChartBorder.LineStyle

返回或设置边框的线型。可读/写 **[XlLineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/XlLineStyle)** 、 **xlGray25** 、 **xlGray50** 、 **xlGray75** 或 **xlAutomatic** 。



## 语法

express.**LineStyle**

express   一个代表 **ChartBorder** 对象的变量。

## 类型

any

## 说明


 **XlLineStyle** 枚举的 **xlDouble** 和 **xlSlantDashDot** 常量不适用于图表。



## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个图表的图表区和绘图区设置边框。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let chart = shape.Chart
        chart.ChartArea.Border.LineStyle = xlDashDot
        let border = chart.PlotArea.Border
        border.LineStyle = xlDashDotDot
        border.Weight = xlThick
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第一个趋势线的线型是否为xlContinuous。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(2).Trendlines(1).Border.LineStyle == xlContinuous)
}
```
