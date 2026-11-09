# Trendline.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Trendline** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*下例选中 Chart1 中的第二个数据系列索引为1的趋势线。*/
function test() {
    let trendline = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).Trendlines(1)
    trendline.Select()
}
```


```JavaScript
/*此示例选中第一张工作表上的第一个图表的第一个数据系列索引为2的趋势线。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1)
    series.Trendlines(2).Select()
}
```
