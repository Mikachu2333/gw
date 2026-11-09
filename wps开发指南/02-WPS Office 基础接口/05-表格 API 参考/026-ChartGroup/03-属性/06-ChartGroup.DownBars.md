# ChartGroup.DownBars

返回一个 **[DownBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DownBars/obj)** 对象，该对象表示折线图中的跌柱线。仅应用于折线图。只读。



## 语法

express.**DownBars**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

DownBars

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 的涨跌柱线，并对其颜色进行设置。本示例应在包含两组彼此间有一个或多个相交数据点的数据系列的二维折线图上运行。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasUpDownBars = true
    chartgroup.DownBars.Interior.ColorIndex = 3
    chartgroup.UpBars.Interior.ColorIndex = 5
}
```


```JavaScript
/*本示例显示工作表 Sheet1 第一个内嵌图表的第一个图表组的涨跌柱线，并将其边框颜色设置为蓝色。*/
function test() {
    let chartgroup = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasUpDownBars = true
    chartgroup.DownBars.Border.ColorIndex = 5
}
```
