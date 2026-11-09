# HiLoLines.Border

返回一个 **Border** 对象，它代表对象的边框。



## 语法

express.**Border**

express   一个代表 **HiLoLines** 对象的变量。

## 类型

Border

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中第一个图表组的高低点连线，并对其线型和颜色进行设置。*/
function test() {
    let chartGroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartGroup.HasHiLoLines = true
    let border = chartGroup.HiLoLines.Border
    border.LineStyle = xlDash
    border.ColorIndex = 4
}
```


```JavaScript
/*本示例显示工作表 Sheet1 上第一个图表中第一个图表组的高低点连线的边框粗细是否为xlMedium。*/
function test() {
    let chartGroup = Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartGroup.HiLoLines.Border.Weight == xlMedium)
}
```
