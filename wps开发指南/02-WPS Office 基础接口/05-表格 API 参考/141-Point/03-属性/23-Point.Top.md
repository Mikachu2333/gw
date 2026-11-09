# Point.Top

返回一个值，该值代表从对象上边缘到图表区上边缘的距离（以磅为单位）。只读。



## 语法

express.**Top**

express   一个代表 **Point** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例显示第一张工作表上第一个图表的第二个数据系列中第4个数据点的上边缘到图表区上边缘的距离。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    alert(series.Points(4).Top)
}
```


```JavaScript
/*本示例显示 Chart1 中第一个数据系列的第三个数据点的上边缘到图表区上边缘的距离。*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    alert(series.Points(3).Top)
}
```
