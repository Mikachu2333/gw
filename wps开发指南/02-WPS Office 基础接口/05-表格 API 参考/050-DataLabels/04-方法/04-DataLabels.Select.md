# DataLabels.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DataLabels** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例选中图表工作表 Chart1 中图表的第一个数据序列的数据标签。*/
function test() {
    let datalabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels()
    datalabels.Select()
}
```


```JavaScript
/*此示例选中工作表 Sheet1 中第一个图表的第三个数据序列的数据标签，并设置该数据标签的格式代码。*/
function test() {
    let datalabels = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(3).DataLabels()
    datalabels.Select()
    Selection.NumberFormat = "0.00"
}
```
