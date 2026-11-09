# Trendline.Backward2

返回或设置趋势线向后延伸的周期数目（或散点图中的单位个数）。可读/写 **Double** 类型。



## 语法

express.**Backward2**

express   一个代表 **Trendline** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例对 Chart1 中的趋势线向前和向后延伸的单位数进行设置。本示例应在包含具有趋势线的单个序列的 2D 柱形图上运行*/
function test() {
    let trendline = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.Forward2 = 5
    trendline.Backward2 = 0.5
}
```


```JavaScript
/*此示例显示第一张工作表上的第一个图表的第二个数据系列索引为2的趋势线向后延伸的单位数。*/
function test() {
    let series2 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    alert(series2.Trendlines(2).Backward2)
}
```
