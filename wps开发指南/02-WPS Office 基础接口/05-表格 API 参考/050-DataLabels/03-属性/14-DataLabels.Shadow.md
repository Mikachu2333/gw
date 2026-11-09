# DataLabels.Shadow

返回或设置一个 **Boolean** 值，它确定对象是否有阴影。



## 语法

express.**Shadow**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例将图表工作表 Chart1 中图表的第一个数据序列的数据标签设置为有阴影。*/
function test() {
    let datalabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels()
    datalabels.Shadow = true
}
```


```JavaScript
/*此示例显示工作表 Sheet1 中第一个图表上的第三个系列的数据标签是否有阴影。*/
function test() {
    let datalabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(3).DataLabels()
    alert(datalabel.Shadow)
}
```
