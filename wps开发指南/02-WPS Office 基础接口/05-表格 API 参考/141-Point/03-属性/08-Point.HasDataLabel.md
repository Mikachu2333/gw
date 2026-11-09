# Point.HasDataLabel

如果数据点具有数据标签，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**HasDataLabel**

express   一个代表 **Point** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例打开 Chart1 上第三个数据系列的第七个数据点的数据标签，并将该数据标签的颜色设置为蓝色。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3).Points(7)
    point.HasDataLabel = true
    point.ApplyDataLabels(xlValue)
    point.DataLabel.Font.ColorIndex = 5
}
```


```JavaScript
/*此示例显示活动工作表第一个图表上第二个数据点是否打开数据标签。*/
function test() {
    Application.ActiveSheet.ChartObjects(1).Activate()
    alert(ActiveChart.SeriesCollection(1).Points(2).HasDataLabel)
}
```
