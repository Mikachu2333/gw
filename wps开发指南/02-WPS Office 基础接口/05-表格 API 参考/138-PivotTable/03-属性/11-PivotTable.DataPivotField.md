# PivotTable.DataPivotField

返回一个 **PivotField** 对象，该对象表示数据透视表中所有数据字段。只读。



## 语法

express.**DataPivotField**

express   一个代表 **PivotTable** 对象的变量。

## 类型

PivotField

## 示例


```JavaScript
/*本示例将第二个 PivotItem 对象移到第一个位置。假定数据透视表位于活动的工作表上，并且数据透视表包含数据字段。*/
function test() {
    let pvtTable = ActiveSheet.PivotTables(1)
    // Move second PivotItem to the first position in PivotTable.
    pvtTable.DataPivotField.PivotItems(2).Position = 1
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一张数据透视表的第一个数据字段名称改为 KingSoft*/
function test() {
    Worksheets.Item("Sheet1").PivotTables(1).DataPivotField.PivotItems(1).Name = "KingSoft"
}
```
