# ChartGroup.AxisGroup

返回或设置指定图表的组。可读/写。



## 语法

express.**AxisGroup**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

XlAxisGroup

## 说明


对于三维图表，仅 **xlPrimary** 有效。



## 示例


```JavaScript
/*此示例在图表工作表 Chart1 值轴处于辅助组时将其删除。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    if (chart.Axes(xlValue).AxisGroup == xlSecondary) {
        chart.Axes(xlValue).Delete()
    }
}
```


```JavaScript
/*此示例设置工作表 Sheet1 第一个内嵌图表的图表组 1 为主轴组。*/
function test() {
    let chartgroup = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.AxisGroup = xlPrimary
}
```
