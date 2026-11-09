# PivotTable.ShowTableStyleLastColumn

如果为指定的 **PivotTable** 对象显示最后一列，则返回或设置。读/写 **Boolean** 。



## 语法

express.**ShowTableStyleLastColumn**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例取消显示数据透视表的最后一列*/
function test() {
    Worksheets.Item(1).PivotTables(1).ShowTableStyleLastColumn = false
}
```


```JavaScript
/*本示例显示数据透视表 ShowTableStyleLastColumn 属性的数据类型，并设置为 true*/
function test() {
    alert(typeof ActiveSheet.PivotTables(1).ShowTableStyleLastColumn)
    ActiveSheet.PivotTables(1).ShowTableStyleLastColumn = true
}
```
