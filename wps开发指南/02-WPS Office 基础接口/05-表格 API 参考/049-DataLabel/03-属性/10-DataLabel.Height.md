# DataLabel.Height

返回对象的高度（以磅为单位）。只读。



## 语法

express.**Height**

express   一个代表 **DataLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 中第一张图表的第二个数据序列的第一个数据标签的高度。*/
function test() {
    let datalabel = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(2).DataLabels(1)
    alert(`数据标签的高度：${datalabel.Height} 磅`)
}
```


```JavaScript
/*此示例将图表工作表 Chart1 中图表的第一个数据序列的第三个数据标签的文本设置为“三年级”，并显示该数据标签的高度。*/
function test() {
    let datalabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels(3)
    datalabel.Caption = "三年级"
    alert(datalabel.Height)
}
```
