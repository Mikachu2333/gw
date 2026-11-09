# DataLabel.Left

返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **DataLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例显示图表工作表 Chart1 中图表的第一个数据序列的第一个数据标签到图表区左边缘的距离。*/
function test() {
    let datalabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels(1)
    alert(`数据标签到图表区左边缘的距离：${datalabel.Left}`)
}
```


```JavaScript
/*此示例将工作表 Sheet1 中第一个图表的第二个数据序列的第一个数据标签到图表区左边缘的距离设置为 25 磅。*/
function test() {
    let datalabel = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(2).DataLabels(1)
    datalabel.Left = 25
}
```
