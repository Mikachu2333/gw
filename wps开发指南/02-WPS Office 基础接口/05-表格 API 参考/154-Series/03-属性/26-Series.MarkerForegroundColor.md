# Series.MarkerForegroundColor

将数据标志的背景色设置为 RGB 值或返回对应的颜色索引值。仅适用于折线图、散点图和雷达图。 **Long** 型，可读写。



## 语法

express.**MarkerForegroundColor**

express   一个代表 **Series** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例将图表工作表 Chart1 上的第二个数据系列数据标志的前景色设置为绿色。*/
function test() {
    let series2 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2)
    series2.MarkerForegroundColor = RGB(0, 255, 0)
}
```


```JavaScript
/*此示例显示活动工作表上的第一个图表的第三个系列数据标志的前景色是否为蓝色。*/
function test() {
    alert(ActiveSheet.ChartObjects(1).Chart.SeriesCollection(3).MarkerForegroundColor == RGB(0, 0, 255))
}
```
