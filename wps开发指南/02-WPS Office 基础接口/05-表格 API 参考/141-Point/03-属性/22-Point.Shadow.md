# Point.Shadow

返回或设置一个 **Boolean** 值，它确定对象是否有阴影。



## 语法

express.**Shadow**

express   一个代表 **Point** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例显示第一张工作表上第一个图表的第二个数据系列中第5个数据点是否有阴影。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    alert(series.Points(5).Shadow)
}
```


```JavaScript
/*本示例将 Chart1 中第一个数据系列的第6个数据点设置成有阴影。*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    series.Points(6).Shadow = true
}
```
