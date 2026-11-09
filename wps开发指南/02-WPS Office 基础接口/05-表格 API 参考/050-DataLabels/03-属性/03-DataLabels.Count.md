# DataLabels.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **DataLabels** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 中第一张图表的第三个数据序列的数据标签的数量。*/
function test() {
    let datalabels = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(3).DataLabels()
    alert(`数据标签的数量：${datalabels.Count}`)
}
```
