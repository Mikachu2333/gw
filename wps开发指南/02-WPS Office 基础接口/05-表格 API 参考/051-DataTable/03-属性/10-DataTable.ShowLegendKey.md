# DataTable.ShowLegendKey

如果数据标签图例项标示可见，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowLegendKey**

express   一个代表 **DataTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中图表的模拟运算表的图例项标示设置为可见。*/
function test() {
    let datatable = Application.Charts.Item("Chart1").ChartObjects(1).Chart.DataTable
    datatable.ShowLegendKey = true
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的模拟运算表的图例项标示是否可见。*/
function test() {
    let datatable = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.DataTable
    alert(datatable.ShowLegendKey)
}
```
