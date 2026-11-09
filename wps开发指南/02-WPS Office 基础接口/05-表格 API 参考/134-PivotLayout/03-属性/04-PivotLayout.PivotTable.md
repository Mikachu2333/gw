# PivotLayout.PivotTable

返回一个 **PivotTable** 对象，它代表与数据透视图相关联的数据透视表。



## 语法

express.**PivotTable**

express   一个代表 **PivotLayout** 对象的变量。

## 类型

PivotTable

## 示例


```JavaScript
/*此示例将 Sheet1 上第一张图表对应的数据透视表的字段“id”的当前页设置为名为“3”的页。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").ChartObjects(1).Chart.PivotLayout.PivotTable
    pvtTable.PivotFields("id").CurrentPage = "3"
}
```


```JavaScript
/*此示例确定与“Chart1”图表相关联的数据透视表，然后将字段“date”名为“2024/5/25”的页设置为数据透视表的当前页。*/
function test() {
    let pvtTable = Application.Charts.Item("Chart1").ChartObjects(1).Chart.PivotLayout.PivotTable
    pvtTable.PivotFields("date").CurrentPage = "2024/5/25"
}
```
