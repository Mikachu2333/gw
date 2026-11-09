# PivotTable.HasAutoFormat

如果在刷新数据透视表或移动字段时自动设置格式，则该属性值为 **True** 。 读/写 **Boolean** 。



## 语法

express.**HasAutoFormat**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置刷新数据透视表或移动字段时自动设置格式*/
function test() {
    Worksheets.Item(1).PivotTables(1).HasAutoFormat = true
}
```


```JavaScript
/*本示例显示数据透视表 HasAutoFormat 属性的数据类型，并设置为 false。*/
function test() {
    alert(typeof ActiveSheet.PivotTables(1).HasAutoFormat)
    ActiveSheet.PivotTables(1).HasAutoFormat = false
}
```
