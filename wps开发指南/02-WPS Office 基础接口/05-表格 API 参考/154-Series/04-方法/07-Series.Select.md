# Series.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Series** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例选择第一张工作表上的第一个图表的第二个数据系列。*/
function test() {
    let series2 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    series2.Select()
}
```


```JavaScript
/*此示例选择图表工作表 Chart1 上的第三个数据系列。*/
function test() {
    let series3 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3)
    series3.Select()
}
```
