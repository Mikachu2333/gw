# DataLabels.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **DataLabels** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 中第一个图表的第一个数据序列的数据标签对象的名称。*/
function test() {
    let datalabels = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels()
    alert(datalabels.Name)
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 中图表的第二个数据序列的数据标签对象的名称。*/
function test() {
    let datalabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).DataLabels()
    alert(`数据标签对象的名称：${datalabels.Name}`)
}
```
