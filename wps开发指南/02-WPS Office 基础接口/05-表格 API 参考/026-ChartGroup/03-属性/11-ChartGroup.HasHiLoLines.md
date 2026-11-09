# ChartGroup.HasHiLoLines

如果折线图有高低点连线，则为 **True** 。仅应用于折线图。 **Boolean** 类型，可读写。



## 语法

express.**HasHiLoLines**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中第一个图表组的高低线，并对其线型、粗细和颜色进行设置。本示例应在具有三组类似股市行情（盘高－盘低－收盘）数据系列的二维折线图上运行。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasHiLoLines = true
    let border = chartgroup.HiLoLines.Border
    border.LineStyle = xlDash
    border.Weight = xlMedium
    border.ColorIndex = 3
}
```


```JavaScript
/*本示例显示工作表 Sheet1 第一个内嵌图表中第一个图表组中是否有高低点连线。本示例应在具有三组类似股市行情（盘高－盘低－收盘）数据系列的二维折线图上运行。*/
function test() {
    let chartgroup = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.HasHiLoLines)
}
```
