# DataLabels.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **DataLabels** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的索引号。 |

## 返回值

包含在集合中的一个 DataLabel 对象。

## 示例


```JavaScript
/*此示例设置工作表 Sheet1 中第一张图表的第一个数据系列的第三个数据标签的数字格式。*/
function test() {
    let datalabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels().Item(3)
    datalabel.NumberFormat = "0.000"
}
```


```JavaScript
/*此示例将图表工作表 Chart1 中图表的第二个数据序列的第三个数据标签的文本设置为“三年级”。*/
function test() {
    let datalabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).DataLabels().Item(3)
    datalabels.Caption = "三年级"
}
```
