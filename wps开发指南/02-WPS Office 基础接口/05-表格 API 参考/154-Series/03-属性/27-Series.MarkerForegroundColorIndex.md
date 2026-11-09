# Series.MarkerForegroundColorIndex

返回或设置数据标志的前景色，表示为当前调色板中的索引或下列 **XlColorIndex** 常量之一： **xlColorIndexAutomatic** 或 **xlColorIndexNone** 。仅适用于折线图、散点图和雷达图。 **Long** 类型，可读写。



## 语法

express.**MarkerForegroundColorIndex**

express   一个代表 **Series** 对象的变量。

## 类型

XlColorIndex

## 示例


```JavaScript
/*此示例通过前景色的索引值将图表工作表 Chart1 上的第二个数据系列数据标志的前景色设置为蓝色。*/
function test() {
    let series2 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2)
    series2.MarkerForegroundColorIndex = 5
}
```


```JavaScript
/*此示例显示活动工作表上的第一个图表的第一个系列数据标志的前景色是否为无颜色。*/
function test() {
    alert(ActiveSheet.ChartObjects(1).Chart.SeriesCollection(1).MarkerForegroundColorIndex == xlColorIndexNone)
}
```
