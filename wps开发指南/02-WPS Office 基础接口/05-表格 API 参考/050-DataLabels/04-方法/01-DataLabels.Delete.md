# DataLabels.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DataLabels** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例删除图表工作表 Chart1 中图表的第一个数据序列的数据标签。*/
function test() {
    let datalabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels()
    datalabels.Delete()
}
```


```JavaScript
/*此示例判断如果工作表 Sheet1 中第一张图表的第二个数据序列的数据标签的数量为 4 ，则删除该数据标签。*/
function test() {
    let datalabels = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(2).DataLabels()
    if (datalabels.Count == 4) {
        datalabels.Delete()
    }
}
```
