# PivotTable.ShowDrillIndicators

 **ShowDrillIndicators** 属性用于切换数据透视表中深化指示符的显示。可读/写 **Boolean** 类型。



## 语法

express.**ShowDrillIndicators**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 说明


如果深化指示符显示在数据透视表中，则返回 **True** ；如果深化指示符未显示在数据透视表中，则返回 **False** 。



## 示例


```JavaScript
/*本示例显示数据透视表中的深化指示符*/
function test() {
    Worksheets.Item("Sheet1").PivotTables(1).ShowDrillIndicators = true
}
```


```JavaScript
/*本示例显示第一张数据透视表 ShowDrillIndicators 属性的数据类型，并设置为 false。*/
function test() {
    alert(typeof ActiveSheet.PivotTables(1).ShowDrillIndicators)
    ActiveSheet.PivotTables(1).ShowDrillIndicators = false
}
```
