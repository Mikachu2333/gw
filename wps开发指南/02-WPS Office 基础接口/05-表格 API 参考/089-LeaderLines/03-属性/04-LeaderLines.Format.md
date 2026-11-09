# LeaderLines.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **LeaderLines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*此示例将图表工作表 Chart1 上的第一个数据系列的引导线发光半径设置为5磅。*/
function test() {
    let series1 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    series1.LeaderLines.Format.Glow.Radius = 5
}
```


```JavaScript
/*本示例将第一张工作表上第一个图表的数据系列 1 的引导线的粗细设置为2磅。*/
function test() {
    let series1 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1)
    series1.LeaderLines.Format.Line.Weight = 2
}
```
