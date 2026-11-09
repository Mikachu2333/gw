# DataLabel.ShowPercentage

如果为 **True** ，则在图表中显示数据标签的百分比数值。如果为 **False** ，则隐藏该百分比数值。 **Boolean** 类型，可读写。



## 语法

express.**ShowPercentage**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 说明


以程序方式访问数据标签之前，必须先激活图表，否则将出现运行错误。



## 示例


```JavaScript
/*此示例显示活动工作表上第一个图表的第一个数据系列的第四个数据标签的百分比数值。此示例假定活动工作表上存在图表且图表为饼图。*/
function test() {
    Application.ActiveSheet.ChartObjects(1).Activate()
    ActiveChart.SeriesCollection(1).Points(4).DataLabel.ShowPercentage = true
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 上图表的第一个数据系列的第一个数据标签是否展示百分比数值。*/
function test() {
    let datalabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Points(1).DataLabel
    alert(datalabel.ShowPercentage)
}
```
