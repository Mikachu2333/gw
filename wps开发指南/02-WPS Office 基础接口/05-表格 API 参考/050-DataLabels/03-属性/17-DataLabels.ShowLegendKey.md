# DataLabels.ShowLegendKey

如果数据标签图例项标示可见，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowLegendKey**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例设置 Chart1 中系列一的数据标签，以显示数值和图例标示。*/
function test() {
    let datalabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels()
    datalabels.ShowLegendKey = true
    datalabels.ShowValue = true
}
```


```JavaScript
/*此示例显示工作表 Sheet1 中第一张图表的第三个系列的数据标签的图例标示是否可见。*/
function test() {
    let datalabels = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(3).DataLabels()
    alert(datalabels.ShowLegendKey)
}
```
