# DataLabel.Caption

返回或设置一个 **String** 值，它代表数据标签文本。



## 语法

express.**Caption**

express   一个代表 **DataLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 中第一张图表的第一个数据序列的第二个数据标签的文本。*/
function test() {
    let datalabel = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels(2)
    alert(datalabel.Caption)
}
```


```JavaScript
/*此示例将图表工作表 Chart1 中图表的第一个数据序列的第三个数据标签的文本设置为“三年级”。*/
function test() {
    let datalabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels(3)
    datalabel.Caption = "三年级"
}
```
