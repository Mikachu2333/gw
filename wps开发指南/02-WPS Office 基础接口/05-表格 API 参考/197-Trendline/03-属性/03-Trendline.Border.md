# Trendline.Border

返回一个 **Border** 对象，它代表对象的边框。



## 语法

express.**Border**

express   一个代表 **Trendline** 对象的变量。

## 类型

Border

## 示例


```JavaScript
/*下例更改 Chart1 中的第三个数据系列索引为1的趋势线线型*/
function test() {
    let trendline = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3).Trendlines(1)
    trendline.Border.LineStyle = xlDash
}
```


```JavaScript
/*此示例显示第一张工作表上的第一个图表的第一个数据系列索引为2的趋势线边框粗细是否为细线。*/
function test() {
    let series1 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1)
    alert(series1.Trendlines(2).Border.Weight == xlHairline)
}
```
