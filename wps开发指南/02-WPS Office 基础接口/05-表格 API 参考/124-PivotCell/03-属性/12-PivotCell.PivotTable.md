# PivotCell.PivotTable

返回一个 **PivotTable** 对象，它代表与 PivotCell 相关联的数据透视表。



## 语法

express.**PivotTable**

express   一个代表 **PivotCell** 对象的变量。

## 类型

PivotTable

## 示例


```JavaScript
/*此示例将包含 Sheet1 上单元格 L7 的数据透视项所在的数据透视表的当前页设置为名为“5”的页。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").Range("L7").PivotCell.PivotTable
    pvtTable.PivotFields("id").CurrentPage = "5"
}
```


```JavaScript
/*此示例将包含活动单元格的数据透视项所在的数据透视表中名为“张三”的页设置为数据透视表的当前页。*/
function test() {
    ActiveCell.PivotCell.PivotTable.PivotFields().Item("name").CurrentPage = "张三"
}
```
