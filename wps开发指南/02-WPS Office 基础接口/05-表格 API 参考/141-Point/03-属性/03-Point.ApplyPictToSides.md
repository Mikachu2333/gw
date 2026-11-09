# Point.ApplyPictToSides

如果将图片应用于系列中某个数据点或所有数据点的旁边，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ApplyPictToSides**

express   一个代表 **Point** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例将图片应用于活动工作表第一个图表上第三个系列中第三个数据点旁边。图片必须已应用于该系列（设置此属性将更改图片的方向）。*/
function test() {
    Application.ActiveSheet.ChartObjects(1).Activate()
    ActiveChart.SeriesCollection(3).Points(3).ApplyPictToSides = true
}
```


```JavaScript
/*此示例显示图片是否应用于图表工作表 Chart1 上第二个系列的第一个数据点旁边。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).Points(1)
    alert(point.ApplyPictToSides)
}
```
