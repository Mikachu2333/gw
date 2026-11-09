# DataLabel.Width

返回或设置对象的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **DataLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例显示图表工作表 Chart1 中图表的第三个系列的第二个数据标的宽度。*/
function test() {
    let datalabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3).DataLabels(2)
    alert(`数据标签的宽度：${datalabel.Width} 磅`)
}
```


```JavaScript
/*此示例将工作表 Sheet1 中第一张图表的第一个系列的第一个数据标签的文本设置为“高三1班”，并将该标签的宽度设置为 45 磅。*/
function test() {
    let datalabel = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels(1)
    datalabel.Caption = "高三1班"
    datalabel.Width = 45
}
```
