# Point.SecondaryPlot

如果数据点位于复合饼图或复合条饼图中的第二个饼图或条形图上，则该值为 **True** 。仅适用于复合饼图或复合条饼图中的数据点。 **Boolean** 类型，可读写。



## 语法

express.**SecondaryPlot**

express   一个代表 **Point** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例必须在饼图或饼图条形图上运行。 本示例将第四个数据点移到图表的第二部分。*/
function test() {
    Worksheets(1).ChartObjects(1).Chart.SeriesCollection(1).Points(4).SecondaryPlot = true
}
```


```JavaScript
/*本示例显示 Chart1 中第一个数据系列的第3个数据点是否在复合条饼图中的第二个饼图上。*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    alert(series.Points(3).SecondaryPlot)
}
```
