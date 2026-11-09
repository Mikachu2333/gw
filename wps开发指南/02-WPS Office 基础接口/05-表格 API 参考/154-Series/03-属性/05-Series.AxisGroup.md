# Series.AxisGroup

返回或设置指定系列的组。可读/写。



## 语法

express.**AxisGroup**

express   一个代表 **Series** 对象的变量。

## 类型

XlAxisGroup

## 示例


```JavaScript
/*此示例将图表工作表 Chart1 上的第一个数据系列坐标轴组的类型设置为辅助轴组。*/
function test() {
    let series1 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    series1.AxisGroup = xlSecondary
}
```


```JavaScript
/*此示例显示活动工作表上的第一个图表的第一个系列坐标轴组的类型是否为主轴组。*/
function test() {
    alert(ActiveSheet.ChartObjects(1).Chart.SeriesCollection(1).AxisGroup == xlPrimary)
}
```
