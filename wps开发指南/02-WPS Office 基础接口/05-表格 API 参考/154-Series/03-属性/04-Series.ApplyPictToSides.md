# Series.ApplyPictToSides

如果将图片应用于系列中某个数据点或所有数据点的旁边，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ApplyPictToSides**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例将图片应用于第一个数据系列中所有数据点的旁边。图片必须已应用于该系列（设置此属性将更改图片的方向）。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).ApplyPictToSides = true
}
```


```JavaScript
/*此示例显示图片是否应用于活动工作表上的第一个图表的第一个系列的数据点旁边。*/
function test() {
    alert(ActiveSheet.ChartObjects(1).Chart.SeriesCollection(1).ApplyPictToSides)
}
```
