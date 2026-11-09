# PivotFilter.Value2

此属性是由用户提供的用于定义透视字段筛选器的参数。 **Variant** 类型，只读。



## 语法

express.**Value2**

express   一个代表 **PivotFilter** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示第一张工作表中数据透视表的第一个字段的第一个筛选器的参数。*/
function test() {
    let pvtField = Worksheets.Item(1).Range("I1").PivotTable.PivotFields(1)
    alert(pvtField.PivotFilters.Item(1).Value2)
}
```


```JavaScript
/*本示例显示活动工作表中第一个数据透视表的第三个字段的第二个筛选器的参数。*/
function test() {
    let pvtFilter = ActiveSheet.PivotTables(1).PivotFields(3).PivotFilters.Item(2)
    alert(pvtFilter.Value2)
}
```
