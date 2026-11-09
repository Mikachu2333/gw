# Point.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Point** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例选中第一张工作表上第一个图表的第一个数据系列中第7个数据点。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1)
    series.Points(7).Select()
}
```


```JavaScript
/*本示例选中 Chart1 中第三个数据系列的第8个数据点。*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3)
    series.Points(8).Select()
}
```
