# PlotArea.Left

返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **PlotArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示 Chart1 中的绘图区左边缘到图表上的图表区左边缘的距离。*/
function test() {
    let plotArea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.PlotArea
    alert(plotArea.Left)
}
```


```JavaScript
/*下例将 Sheet1 上第一个图表的绘图区左边缘到图表上的图表区左边缘的距离设置为10磅。*/
function test() {
    let plotArea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.PlotArea
    plotArea.Left = 10
}
```
