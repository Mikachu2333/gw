# SeriesLines.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **SeriesLines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 上第一个图表组的系列线粗细设置为3磅。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.SeriesLines.Format.Line.Weight = 3
}
```


```JavaScript
/*本示例将工作表 Sheet1 第一个内嵌图表上第一个图表组的系列线的发光效果的半径设置为5。*/
function test() {
    let chartgroup = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.SeriesLines.Format.Glow.Radius = 5
}
```
