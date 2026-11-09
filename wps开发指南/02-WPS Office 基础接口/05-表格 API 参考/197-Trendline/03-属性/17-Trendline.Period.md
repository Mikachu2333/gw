# Trendline.Period

返回或设置移动平均趋势线的周期。可以是从 2 至 255 的值。可读/写 **Long** 类型。



## 语法

express.**Period**

express   一个代表 **Trendline** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置 Chart1 上移动平均趋势线的周期。本示例应在二维柱形图上运行，该柱形图中只有一个包含 10 个数据点的系列，并且有移动平均趋势线。*/
function test() {
    let trendline = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Trendlines(1)
    if (trendline.Type == xlMovingAvg) {
        trendline.Period = 5
    }
}
```


```JavaScript
/*本示例设置第一张工作表上的第一个图表的第三个数据系列索引为2的移动平均趋势线的周期。*/
function test() {
    let trendline = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(3).Trendlines(2)
    trendline.Period = 3
}
```
