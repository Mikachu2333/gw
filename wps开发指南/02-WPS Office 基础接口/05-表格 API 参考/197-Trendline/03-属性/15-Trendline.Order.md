# Trendline.Order

返回或设置一个 **Long** 值，它代表趋势线类型为 **xlPolynomial** 时趋势线的顺序号（大于 1 的整数）。



## 语法

express.**Order**

express   一个代表 **Trendline** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示第一张工作表上的第一个图表的第二个数据系列索引为2的趋势线顺序。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    alert(series.Trendlines(2).Order)
}
```


```JavaScript
/*本示例设置 Chart1 中第三个数据系列索引为1的趋势线顺序为3。*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3)
    series.Trendlines(1).Order = 3
}
```
