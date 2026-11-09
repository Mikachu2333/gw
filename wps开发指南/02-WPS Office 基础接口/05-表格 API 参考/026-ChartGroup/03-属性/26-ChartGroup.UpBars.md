# ChartGroup.UpBars

返回 **[UpBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UpBars/obj)** 对象，该对象表示折线图上的涨柱线。仅应用于折线图。只读。



## 语法

express.**UpBars**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

UpBars

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中图表组一的涨跌柱线，并对其颜色进行设置。本示例应在二维折线图上运行，该折线图应包含两组彼此间有一个或多个相交数据点的系列。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasUpDownBars = true
    chartgroup.DownBars.Interior.ColorIndex = 3
    chartgroup.UpBars.Interior.ColorIndex = 5
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一个内嵌图表中图表组1的涨跌柱线，并将其边框颜色设置为蓝色。*/
function test() {
    let chartgroup = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasUpDownBars = true
    chartgroup.UpBars.Border.Color = RGB(0, 0, 255)
}
```
