# PivotTable.RowGrand

如果数据透视表显示行的总数，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**RowGrand**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置数据透视表以显示行的总计。*/
function test() {
    let pvtTable = Application.Worksheets.Item("Sheet1").Range("F1").PivotTable
    pvtTable.RowGrand = true
}
```


```JavaScript
/*本示例显示第一张数据透视表 RowGrand 属性的数据类型，并设置为 false。*/
function test() {
    alert(typeof ActiveSheet.PivotTables(1).RowGrand)
    ActiveSheet.PivotTables(1).RowGrand = false
}
```
