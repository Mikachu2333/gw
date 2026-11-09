# DataLabels.AutoText

如果对象会根据内容自动生成合适的文字，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**AutoText**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 说明


如果在“即时窗口”中运行 **ActiveChart.SeriesCollection(1).DataLabels().AutoText** ，您将收到以下结果：只有在所有 **DataLabels** 的 **AutoText** 都为 **True** 时返回 **True** ，如果所有 **DataLabels** 的 **AutoText** 都为 **False** ，或者部分 **DataLabels** 的 **AutoText** 为 **False** ，那么返回 **False** 。



## 示例


```JavaScript
/*此示例对 Chart1 的第一个数据序列的数据标签进行设置，自动生成合适的文字。*/
function test() {
    let datalabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).DataLabels()
    datalabels.AutoText = true
}
```


```JavaScript
/*此示例显示工作表 Sheet1 中第一张图表的第二个数据序列的数据标签是否自动生成合适的文字。*/
function test() {
    let datalabels = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(2).DataLabels()
    alert(datalabels.AutoText)
}
```
