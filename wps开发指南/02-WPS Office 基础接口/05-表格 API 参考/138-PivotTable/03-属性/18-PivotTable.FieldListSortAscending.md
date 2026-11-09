# PivotTable.FieldListSortAscending

控制数据透视表字段列表中字段的排序顺序。当此属性设置为 **True** 时，字段按升序顺序排序。当它设置为 **False** 时，字段按数据源顺序排序。可读/写。



## 语法

express.**FieldListSortAscending**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 说明


不适用于与 OLAP 数据源相连的数据透视表。



## 示例


```JavaScript
/*本示例设置数据透视表字段按数据源顺序排序*/
function test() {
    Worksheets.Item("Sheet1").PivotTables(1).FieldListSortAscending = false
}
```


```JavaScript
/*本示例显示数据透视表的 FieldListSortAscending 属性的数据类型，并设置数据透视表字段按升序顺序排序*/
function test() {
    alert(typeof ActiveSheet.PivotTables(1).FieldListSortAscending)
    ActiveSheet.PivotTables(1).FieldListSortAscending = true
}
```
