# DataTable.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **DataTable** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中图表的模拟运算表的前景色设置为青色。*/
function test() {
    let datatable = Application.Charts.Item("Chart1").ChartObjects(1).Chart.DataTable
    datatable.Format.Fill.ForeColor.RGB = RGB(0, 255, 255)
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的模拟运算表的线条设置为红色的点划线。*/
function test() {
    let datatable = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.DataTable
    datatable.Format.Line.DashStyle = msoLineDashDot
    datatable.Format.Line.ForeColor.RGB = RGB(255, 0, 0)
}
```
