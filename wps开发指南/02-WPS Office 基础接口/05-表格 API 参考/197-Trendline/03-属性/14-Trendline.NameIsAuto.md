# Trendline.NameIsAuto

如果 ET 自动确定趋势线的名称，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**NameIsAuto**

express   一个代表 **Trendline** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 ET 自动确定 Chart1 的趋势线一的名称。本示例应在包含单个带趋势线系列的二维柱形图上运行。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Trendlines(1).NameIsAuto = true
}
```


```JavaScript
/*此示例显示ET是否能自动确定第一张工作表上的第一个图表的第二个数据系列索引为2的趋势线名称。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    alert(series.Trendlines(2).NameIsAuto)
}
```
