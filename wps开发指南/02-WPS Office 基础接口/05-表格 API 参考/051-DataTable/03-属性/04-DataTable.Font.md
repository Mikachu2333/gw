# DataTable.Font

返回一个 **Font** 对象，它代表指定对象的字体。



## 语法

express.**Font**

express   一个代表 **DataTable** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的模拟运算表中的字体设置为蓝色粗体。*/
function test() {
    let datatable = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.DataTable
    datatable.Font.Bold = true
    datatable.Font.ColorIndex = 5
}
```


```JavaScript
/*本示例将图表工作表 Chart1 中图表的模拟运算表中的字体设置为加粗和倾斜，并将字体字号设置为 12 磅。*/
function test() {
    let datatable = Application.Charts.Item("Chart1").ChartObjects(1).Chart.DataTable
    datatable.Font.FontStyle = "Bold Italic"
    datatable.Font.Size = 12
}
```
