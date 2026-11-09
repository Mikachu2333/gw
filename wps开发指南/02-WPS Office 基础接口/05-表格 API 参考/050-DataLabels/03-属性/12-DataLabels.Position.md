# DataLabels.Position

返回或设置一个 **XlDataLabelPosition** 值，它代表数据标签的位置。



## 语法

express.**Position**

express   一个代表 **DataLabels** 对象的变量。

## 类型

XlDataLabelPosition

## 示例


```JavaScript
/*此示例将图表工作表 Chart1 中图表的第一个数据序列的数据标签的位置设置为位于条形图内部。*/
function test() {
    let datalabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels()
    datalabels.Position = xlLabelPositionCenter
}
```


```JavaScript
/*此示例显示工作表 Sheet1 中第一个图表的第三个数据序列的数据标签的位置是否在数据点上边缘外侧。*/
function test() {
    let datalabels = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(3).DataLabels()
    alert(datalabels.Position == xlLabelPositionOutsideEnd)
}
```
