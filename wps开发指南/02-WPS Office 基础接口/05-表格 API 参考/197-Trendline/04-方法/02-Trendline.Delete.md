# Trendline.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Trendline** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例删除 Chart1 中第一个数据系列索引为1的趋势线。*/
function test() {
    let series1 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection().Item(1)
    series1.Trendlines(1).Delete()
}
```


```JavaScript
/*此示例删除第一张工作表上的第一个图表的第二个数据系列索引为1的趋势线。*/
function test() {
    let series2 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    series2.Trendlines(1).Delete()
}
```
