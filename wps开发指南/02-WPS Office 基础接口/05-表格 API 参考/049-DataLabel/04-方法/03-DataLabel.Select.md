# DataLabel.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DataLabel** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例选中图表工作表 Chart1 中图表的第一个数据序列的第一个数据标签。*/
function test() {
    let datalabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels(1)
    datalabel.Select()
}
```


```JavaScript
/*此示例判断如果工作表 Sheet1 中第一个图表的第二个数据序列的第一个数据标签的文本为“三年级”，则选中该数据标签。*/
function test() {
    let datalabel = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(2).DataLabels(1)
    if (datalabel.Caption == "三年级") {
        datalabel.Select()
    }
}
```
