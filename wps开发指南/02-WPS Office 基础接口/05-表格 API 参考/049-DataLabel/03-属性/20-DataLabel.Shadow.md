# DataLabel.Shadow

返回或设置一个 **Boolean** 值，它确定对象是否有阴影。



## 语法

express.**Shadow**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例判断如果图表工作表 Chart1 中图表的第一个数据序列的第一个数据标签的文本为“软件1班”，则将该数据标签设置为有阴影。*/
function test() {
    let datalabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels(1)
    if (datalabel.Caption == "软件1班") {
        datalabel.Shadow = true
    }
}
```


```JavaScript
/*此示例显示工作表 Sheet1 中第一个图表上的第三个系列的第一个数据标签是否有阴影。*/
function test() {
    let datalabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(3).DataLabels(1)
    alert(datalabel.Shadow)
}
```
