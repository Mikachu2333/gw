# PivotTable.ColumnGrand

如果数据透视表显示列总计，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ColumnGrand**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置数据透视表显示列总计。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").Range("A3").PivotTable
    pvtTable.ColumnGrand = true
}
```


```JavaScript
/*本示例显示活动工作表中第一张数据透视表 ColumnGrand 属性的数据类型，并将其设置为 false。*/
function test() {
    alert(`第一张数据透视表中ColumnGrand属性的数据类型是：${typeof ActiveSheet.PivotTables(1).ColumnGrand}`)
    ActiveSheet.PivotTables(1).ColumnGrand = false
}
```
