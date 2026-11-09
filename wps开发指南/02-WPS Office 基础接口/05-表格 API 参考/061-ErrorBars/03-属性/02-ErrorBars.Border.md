# ErrorBars.Border

返回一个 **Border** 对象，它代表对象的边框。



## 语法

express.**Border**

express   一个代表 **ErrorBars** 对象的变量。

## 类型

Border

## 示例


```JavaScript
/*此示例将工作表 Sheet1 中第一张图表的第一个序列的误差线设置为虚线。*/
function test() {
    let errorbars = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).ErrorBars
    errorbars.Border.LineStyle = xlDash
}
```


```JavaScript
/*此示例将图表工作表 Chart1 中图表的第二个序列的误差线设置为蓝色细线。*/
function test() {
    let errorbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).ErrorBars
    errorbars.Border.ColorIndex = 5
    errorbars.Border.Weight = xlHairline
}
```
