# Point.Width

返回对象的宽度（以磅为单位）。只读。



## 语法

express.**Width**

express   一个代表 **Point** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例显示第一张工作表上第一个图表的第二个数据系列中第二个数据点的宽度。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    alert(series.Points(2).Width)
}
```


```JavaScript
/*本示例显示 Chart1 中第三个数据系列的第三个数据点的宽度。*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3)
    alert(series.Points(3).Width)
}
```
