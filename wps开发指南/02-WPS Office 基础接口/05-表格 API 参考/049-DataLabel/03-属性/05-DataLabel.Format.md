# DataLabel.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **DataLabel** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*此示例将工作表 Sheet1 中第一个图表的第一个数据序列的第一个数据标签的边框颜色设置为红色。*/
function test() {
    let datalabel = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels(1)
    datalabel.Format.Line.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*此示例将图表工作表 Chart1 中图表的第二个数据序列的第一个数据标签的前景色设置为蓝色。*/
function test() {
    let datalabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).DataLabels(1)
    datalabel.Format.Fill.ForeColor.RGB = RGB(0, 255, 255)
}
```
