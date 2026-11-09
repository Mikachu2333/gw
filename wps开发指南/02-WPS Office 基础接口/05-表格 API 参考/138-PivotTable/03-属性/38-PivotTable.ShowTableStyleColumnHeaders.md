# PivotTable.ShowTableStyleColumnHeaders

如果列标题应显示在数据透视表中，则将 **ShowTableStyleColumnHeaders** 属性设置为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ShowTableStyleColumnHeaders**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例取消列标题在数据透视表中的显示*/
function test() {
    Worksheets.Item("Sheet1").PivotTables(1).ShowTableStyleColumnHeaders = false
}
```


```JavaScript
/*本示例显示第一张数据透视表 ShowTableStyleColumnHeaders 属性的数据类型，并设置为 true。*/
function test() {
    alert(typeof ActiveSheet.PivotTables(1).ShowTableStyleColumnHeaders)
    ActiveSheet.PivotTables(1).ShowTableStyleColumnHeaders = true
}
```
