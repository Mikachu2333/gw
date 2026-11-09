# PivotFilter.Value1

此属性是由用户提供的用于定义透视字段筛选器的参数。 **Variant** 类型，只读。



## 语法

express.**Value1**

express   一个代表 **PivotFilter** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示第一张工作表中数据透视表的字段“id”的第二个筛选器的参数。*/
function test() {
    let pvtField = Worksheets.Item(1).Range("I1").PivotTable.PivotFields("id")
    alert(pvtField.PivotFilters.Item(2).Value1)
}
```


```JavaScript
/*本示例显示活动工作表中第一个数据透视表的“name”字段的第一个筛选器的参数。*/
function test() {
    let pvtFilter = ActiveSheet.PivotTables(1).PivotFields("name").PivotFilters.Item(1)
    alert(pvtFilter.Value1)
}
```
