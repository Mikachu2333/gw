# ChartGroup.SplitType

返回或设置在复合饼图或复合条饼图中拆分两部分的方式。 **[XlChartSplitType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartSplitType)** 类型，可读写。



## 语法

express.**SplitType**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

XlChartSplitType

## 说明


| **XlChartSplitType** 可为以下 **XlChartSplitType** 常量之一。 |
| ---------------------------------------------------- |
| **xlSplitByCustomSplit**                             |
| **xlSplitByPercentValue**                            |
| **xlSplitByPosition**                                |
| **xlSplitByValue**                                   |



## 示例


```JavaScript
/*本示例必须在复合饼图或复合条饼图中运行。本示例以数值拆分图表的两部分，在主饼图部分中合并所有小于 10 的数值，并在第二部分中显示这些数值。*/
function test() {
    let chartgroup = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.SplitType = xlSplitByValue
    chartgroup.SplitValue = 10
    chartgroup.VaryByCategories = true
}
```


```JavaScript
/*本示例以xlSplitByPosition拆分图表工作表 Chart1 的两部分，在第二部分中显示数据系列中的最小值。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.SplitType = xlSplitByPosition
}
```
