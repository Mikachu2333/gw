# Trendline.Name

返回或设置一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **Trendline** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置 Chart1 中第一个数据系列索引为1的趋势线名称。*/
function test() {
    let series1 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection().Item(1)
    series1.Trendlines(1).Name = "趋势线(系列1)"
}
```


```JavaScript
/*此示例显示第一张工作表上的第一个图表的第二个数据系列索引为1的趋势线名称。*/
function test() {
    let series2 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    alert(series2.Trendlines(1).Name)
}
```
