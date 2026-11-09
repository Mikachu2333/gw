# DataTable.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DataTable** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例选中图表工作表 Chart1 中图表的模拟运算表。*/
function test() {
    let datatable = Application.Charts.Item("Chart1").ChartObjects(1).Chart.DataTable
    datatable.Select()
}
```


```JavaScript
/*本示例选中工作表 Sheet1 中第一张图表的模拟运算表，并设置边框颜色。*/
function test() {
    let datatable = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.DataTable
    datatable.Select()
    Selection.Border.ColorIndex = 4
}
```
