# Trendline.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **Trendline** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*下例清除 Chart1 中的第三个数据系列索引为1的趋势线的格式*/
function test() {
    let trendline = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3).Trendlines(1)
    trendline.ClearFormats()
}
```


```JavaScript
/*此示例清除第一张工作表上的第一个图表的第二个数据系列索引为2的趋势线格式。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    series.Trendlines(2).ClearFormats()
}
```
