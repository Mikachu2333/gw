# DataLabel.ShowRange

用于切换数据标签区域上存在的 **Range** 字段。 **Boolean** 型，可读写。



## 语法

express.**ShowRange**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 说明


 **Range** 对象将任意单元格区域映射到数据标签区域，以便每个数据标签对应于区域中的一个单元格。



## 示例


```JavaScript
/*此示例显示图表工作表 Chart1 中图表的第二个系列的第一个数据标签是否为单元格区域映射到该数据标签区域。*/
function test() {
    let datalabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).DataLabels(1)
    alert(datalabel.ShowRange)
}
```


```JavaScript
/*此示例关闭单元格中的值对工作表 Sheet1 中第一张图表的第二个系列的第三个数据标签的映射。*/
function test() {
    let datalabel = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(2).DataLabels(3)
    datalabel.ShowRange = false
}
```
