# ErrorBars.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **ErrorBars** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中图表的第一个数据系列的误差线的线条样式设置为点划线。*/
function test() {
    let errorbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).ErrorBars
    errorbars.Format.Line.DashStyle = msoLineDashDot
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一个图表的第二个系列的误差线的阴影设置为不可见。*/
function test() {
    let errorbars = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(2).ErrorBars
    errorbars.Format.Shadow.Visible = false
}
```
