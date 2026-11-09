# Series.HasLeaderLines

如果数据系列有引导线，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**HasLeaderLines**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 说明


该属性仅应用于饼图。



## 示例


```JavaScript
/*本示例向饼图上的数据系列 1 添加数据标签和蓝色引导线。如果看不到引导线，则本示例代码将失败。这种情况下，可以手动将数据标签之一拖出饼图以便让引导线显示。*/
function test() {
    let Ser = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1)
    Ser.HasDataLabels = true
    Ser.DataLabels.Position = xlLabelPositionBestFit
    Ser.HasLeaderLines = true
    Ser.LeaderLines.Border.ColorIndex = 5
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 上的第二个数据系列是否有引导线。*/
function test() {
    let series2 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2)
    alert(series2.HasLeaderLines)
}
```
