# Trendline.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **Trendline** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*下例更改 Chart1 中的第二个数据系列索引为1的趋势线的虚线样式。*/
function test() {
    let trendline = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).Trendlines(1)
    trendline.Format.Line.DashStyle = msoLineLongDash
}
```


```JavaScript
/*此示例设置第一张工作表上的第一个图表的第一个数据系列索引为2的趋势线发光半径为2。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1)
    series.Trendlines(2).Format.Glow.Radius = 2
}
```
