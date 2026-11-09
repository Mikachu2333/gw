# Series.Shadow

返回或设置一个 **Boolean** 值，它确定对象是否有阴影。



## 语法

express.**Shadow**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例将图表工作表 Chart1 上的第一个数据系列的阴影设置成可见。*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    series.Shadow = true
}
```


```JavaScript
/*此示例显示第一张工作表上的第一个图表的第二个数据系列是否有阴影。*/
function test() {
    let series2 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    alert(series2.Shadow)
}
```
