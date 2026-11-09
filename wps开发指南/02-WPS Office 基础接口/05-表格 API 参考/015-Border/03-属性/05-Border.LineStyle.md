# Border.LineStyle

返回或设置边框的线型。 **[XlLineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlLineStyle)** 、 **xlGray25** 、 **xlGray50** 、 **xlGray75** 或 **xlAutomatic** 类型，可读写。



## 语法

express.**LineStyle**

express   一个代表 **Border** 对象的变量。

## 类型

any

## 说明


 **xlDouble** 和 **xlSlantDashDot** 不适用于图表。



## 示例


```JavaScript
/*本示例为 Chart1 的图表区和绘图区域设置边框*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.ChartArea.Border.LineStyle = xlDashDot
    let border = chart.PlotArea.Border
    border.LineStyle = xlDashDotDot
    border.Weight = xlThick
}
```


```JavaScript
/*本示例将 H6 单元格的顶部的边框线样式设置为虚线。*/
function test() {
    Range("H6").Borders.Item(xlEdgeTop).LineStyle = xlDash
}
```
