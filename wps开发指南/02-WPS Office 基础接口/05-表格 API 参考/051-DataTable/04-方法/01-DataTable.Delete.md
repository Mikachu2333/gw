# DataTable.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DataTable** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除工作表 Sheet1 中第一张图表的模拟运算表。*/
function test() {
    let datatable = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.DataTable
    datatable.Delete()
}
```


```JavaScript
/*本示例判断如果图表工作表 Chart1 中图表的模拟运算表边框的颜色为红色，则删除该运算表。*/
function test() {
    let datatable = Application.Charts.Item("Chart1").ChartObjects(1).Chart.DataTable
    if (datatable.Border.ColorIndex == 3) {
        datatable.Delete()
    }
}
```
