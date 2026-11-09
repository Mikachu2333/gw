# DataLabel.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DataLabel** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例删除图表工作表 Chart1 中图表的第一个数据序列的第二个数据标签。*/
function test() {
    let datalabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels(2)
    datalabel.Delete()
}
```


```JavaScript
/*此示例判断如果工作表 Sheet1 中第一个图表的第一个数据序列的第三个数据标签的文本为“一年级”，则将该数据标签删除。*/
function test() {
    let datalabel = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels(3)
    if (datalabel.Caption == "一年级") {
        datalabel.Delete()
    }
}
```
