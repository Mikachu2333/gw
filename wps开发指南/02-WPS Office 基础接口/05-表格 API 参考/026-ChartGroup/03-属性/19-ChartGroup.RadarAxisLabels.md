# ChartGroup.RadarAxisLabels

返回一个 **[TickLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/obj)** 对象，该对象表示指定图表组的雷达图坐标轴标签。只读。



## 语法

express.**RadarAxisLabels**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

TickLabels

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中第一个图表组的雷达图坐标轴标签，并对这些标签的颜色进行设置。本示例应在雷达图上运行。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasRadarAxisLabels = true
    chartgroup.RadarAxisLabels.Font.ColorIndex = 3
}
```


```JavaScript
/*本示例将工作表 Sheet1 第一个内嵌图表中第一个图表组的雷达图坐标轴标签启用，并显示其字号。*/
function test() {
    let chartgroup = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasRadarAxisLabels = true
    alert(chartgroup.RadarAxisLabels.Font.Size)
}
```
