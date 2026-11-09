# HiLoLines.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **HiLoLines** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个图表的第一个图表组的高低点连线设置为可见，并对其边框的线条样式进行设置。*/
function test() {
    let chartgroup = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartgroup.HasHiLoLines = true
    let chartBorder = chartgroup.HiLoLines.Border
    chartBorder.LineStyle = xlDashDot
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的第一个图表组的高低点连线的边框粗细是否为 xlMedium。*/
function test() {
    let chartgroup = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartgroup.HiLoLines.Border.Weight == xlMedium)
}
```
