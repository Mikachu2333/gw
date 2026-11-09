# LeaderLines.Border

返回一个 **Border** 对象，它代表对象的边框。



## 语法

express.**Border**

express   一个代表 **LeaderLines** 对象的变量。

## 类型

Border

## 示例


```JavaScript
/*此示例显示图表工作表 Chart1 上的第二个数据系列的引导线粗细。*/
function test() {
    let series2 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2)
    alert(series2.LeaderLines.Border.Weight)
}
```


```JavaScript
/*本示例向第一张工作表上第一个图表的数据系列 3 添加线条样式为实线的引导线。如果看不到引导线，则本示例代码将失败。这种情况下，可以手动将数据标签之一拖出饼图以便让引导线显示。*/
function test() {
    let Ser = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(3)
    Ser.HasLeaderLines = true
    Ser.LeaderLines.Border.LineStyle = xlContinuous
}
```
