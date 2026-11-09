# HiLoLines.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **HiLoLines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中第一个图表组的高低点连线的前景色是否为红色。*/
function test() {
    let chartGroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    let chartFormat = chartGroup.HiLoLines.Format
    alert(chartFormat.Fill.ForeColor.RGB == RGB(255, 0, 0))
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上第一个图表中第一个图表组的高低点连线的虚线样式。*/
function test() {
    let chartGroup = Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    chartGroup.HiLoLines.Format.Line.DashStyle = msoLineRoundDot
}
```
