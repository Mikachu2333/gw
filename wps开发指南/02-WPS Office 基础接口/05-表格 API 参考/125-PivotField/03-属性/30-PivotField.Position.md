# PivotField.Position

返回或设置一个 Variant 值，他代表数据透视表上所有字段的位置，包括属于所有行、列、页以及数据方向上的字段（第一字段、第二字段、第三字段等等）。



## 语法

express.**Position**

express   一个代表 **PivotField** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的字段“name”在行上的位置。*/
function test() {
    let pvtField = ActiveSheet.PivotTables(1).PivotFields("name")
    alert(pvtField.Position)
}
```


```JavaScript
/*本示例将第一张工作表中数据透视表的字段“id”在行上的位置设置为“1”。*/
function test() {
    let pvtField = Worksheets.Item(1).Range("I1").PivotTable.PivotFields("id")
    pvtField.Position = 1
}
```
