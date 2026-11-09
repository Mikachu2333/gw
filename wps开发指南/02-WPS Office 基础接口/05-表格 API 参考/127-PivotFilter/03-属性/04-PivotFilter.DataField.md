# PivotFilter.DataField

此属性仅适用于非 OLAP 数据透视表，可为值筛选提供作为筛选依据的 **值** 字段（值区域中的透视字段）。只读 **PivotField** 。



## 语法

express.**DataField**

express   一个代表 **PivotFilter** 对象的变量。

## 类型

PivotField

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中数据透视表的字段“name”的第一个筛选器中作为筛选依据的值字段的名称。*/
function test() {
    let pvtFilter = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields("name").PivotFilters.Item(1)
    alert(pvtFilter.DataField.Value)
}
```


```JavaScript
/*本示例设置活动工作表中第一个数据透视表的字段“id”的第二个筛选器中作为筛选依据的值字段的公式。*/
function test() {
    let pvtFilter = ActiveSheet.PivotTables(1).PivotFields("id").PivotFilters.Item(2)
    pvtFilter.DataField.Formula = "score*0.9"
}
```
