# ChartGroup.HasUpDownBars

如果折线图中有涨跌柱线，则该值为 **True** 。仅应用于折线图。 **Boolean** 类型，可读写。



## 语法

express.**HasUpDownBars**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

boolean

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
/*本示例显示工作表 Sheet1 中第一个内嵌图表的图表组一的涨跌柱线，并将其边框颜色设置为蓝色。本示例应在二维折线图上运行，该折线图应包含两组彼此间有一个或多个相交数据点的系列。*/
function test() {
    let chartgroup = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasUpDownBars = true
    chartgroup.DownBars.Border.ColorIndex = 5
}
```
