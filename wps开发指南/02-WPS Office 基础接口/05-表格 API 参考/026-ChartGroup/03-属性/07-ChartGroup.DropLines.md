# ChartGroup.DropLines

返回一个 **[DropLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DropLines/obj)** 对象，该对象表示折线图或面积图上数据系列的垂直线。仅适用于折线图或面积图。只读。



## 语法

express.**DropLines**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

DropLines

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中第一个图表组的垂直线，并对其线型、粗细和颜色进行设置。本示例应在包含一个数据系列的二维折线图上运行。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasDropLines = true
    let border = chartgroup.DropLines.Border
    border.LineStyle = xlDash
    border.Weight = xlMedium
    border.ColorIndex = 3
}
```


```JavaScript
/*本示例显示工作表 Sheet1 第一个内嵌图表中第一个图表组的垂直线，并将其颜色设置为绿色。*/
function test() {
    let chartgroup = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasDropLines = true
    chartgroup.DropLines.Border.Color = RGB(0, 255, 0)
}
```
