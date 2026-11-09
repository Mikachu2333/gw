# DataLabel.Top

返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。



## 语法

express.**Top**

express   一个代表 **DataLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例显示图表工作表 Chart1 中图表的第二个系列的第二个数据标签到图表区顶部的距离。*/
function test() {
    let datalabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).DataLabels(2)
    alert(`数据标签到图表区顶部的距离：${datalabel.Top} 磅`)
}
```


```JavaScript
/*此示例将工作表 Sheet1 中第一张图表的第二个系列的第一个数据标签到图表区顶部的距离设置为 35 磅。*/
function test() {
    let datalabel = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(2).DataLabels(1)
    datalabel.Top = 35
}
```
