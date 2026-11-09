# PivotTable.ShowTableStyleRowHeaders

如果行标题应显示在数据透视表中，则将 **ShowTableStyleRowHeaders** 属性设置为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ShowTableStyleRowHeaders**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将行标题显示在数据透视表上*/
function test() {
    Worksheets.Item(1).PivotTables(1).ShowTableStyleRowHeaders = true
}
```


```JavaScript
/*本示例显示数据透视表的 ShowTableStyleRowHeaders 属性的数据类型，并设置为 false*/
function test() {
    alert(typeof ActiveSheet.PivotTables(1).ShowTableStyleRowHeaders)
    ActiveSheet.PivotTables(1).ShowTableStyleRowHeaders = false
}
```
