# Trendline.Index

返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。



## 语法

express.**Index**

express   一个代表 **Trendline** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*下例显示 Chart1 中的第三个数据系列指定趋势线的索引。*/
function test() {
    let trendline = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3).Trendlines(1)
    alert(trendline.Index)
}
```


```JavaScript
/*此示例显示第一张工作表上的第一个图表的第一个数据系列指定趋势线的索引。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1)
    alert(series.Trendlines(2).Index)
}
```
