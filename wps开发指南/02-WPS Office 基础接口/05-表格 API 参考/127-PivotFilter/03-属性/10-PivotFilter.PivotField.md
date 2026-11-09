# PivotFilter.PivotField

指定应用筛选器的透视字段。只读。



## 语法

express.**PivotField**

express   一个代表 **PivotFilter** 对象的变量。

## 类型

PivotField

## 示例


```JavaScript
/*本示例显示应用于工作表 Sheet1 中数据透视表的第二个字段的第二个筛选器的字段的名称。*/
function test() {
    let pvtFilter = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields(2).PivotFilters.Item(2)
    alert(pvtFilter.PivotField.Value)
}
```


```JavaScript
/*本示例选中应用于活动工作表中第一个数据透视表的第一个字段的第一个筛选器的字段的数据透视表项。*/
function test() {
    let pvtFilter = ActiveSheet.PivotTables(1).PivotFields(1).PivotFilters.Item(1)
    pvtFilter.PivotField.DataRange.Select()
}
```
