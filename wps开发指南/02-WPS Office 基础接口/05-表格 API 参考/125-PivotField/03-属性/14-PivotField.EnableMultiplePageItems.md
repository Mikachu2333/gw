# PivotField.EnableMultiplePageItems

用于指定对于页面区域中的字段是否在筛选器下拉列表中显示复选框。可读/写 **Boolean** 类型。



## 语法

express.**EnableMultiplePageItems**

express   一个代表 **PivotField** 对象的变量。

## 类型

boolean

## 说明


为 OLAP 保留现有属性值。

如果创建 ET 早期版本的 OLAP 数据透视表 (PivotTable.Version < 3)，且 **PivotTable** 对象的 **SubtotalHiddenPageItems** 属性和 **PivotField** 对象的 **EnableMultiplePageItems** 属性均设置为 **True** ，则更改页面区域的筛选器下拉菜单中的复选框的状态将不会有效果。在这种情况下，筛选器将始终设置为 **All** ，并包含未选中（隐藏）的项目。



## 示例


```JavaScript
/*本示例显示活动工作表中数据透视表的页字段“name”的筛选器下拉列表中是否存在复选框。*/
function test() {
    let pvtField = ActiveSheet.Range("I1").PivotTable.PivotFields("name")
    alert(pvtField.EnableMultiplePageItems)
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一个数据透视表的页字段“grades”的筛选器下拉列表中复选框隐藏。*/
function test() {
    let pvtField = Worksheets.Item("Sheet1").PivotTables(1).PivotFields("grades")
    pvtField.EnableMultiplePageItems = false
}
```
