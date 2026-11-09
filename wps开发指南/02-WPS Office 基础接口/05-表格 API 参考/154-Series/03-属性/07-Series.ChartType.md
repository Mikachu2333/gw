# Series.ChartType

返回或设置图表类型。 **XlChartType** 类型，可读写。



## 语法

express.**ChartType**

express   一个代表 **Series** 对象的变量。

## 类型

XlChartType

## 说明


某些图表类型对数据透视图报表无效。



## 示例


```JavaScript
/*此示例显示活动工作表上的第一个图表的第一个系列的图表类型是否为气泡图。*/
function test() {
    alert(ActiveSheet.ChartObjects(1).Chart.SeriesCollection(1).ChartType == xlBubble)
}
```


```JavaScript
/*此示例将图表工作表 Chart1 上的第一个数据系列的图表类型设置为折线散点图。*/
function test() {
    let series1 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    series1.ChartType = xlXYScatterLines
}
```
