# PivotField.PivotFilters

返回或设置指定 **PivotField** 对象的 PivotFilters。只读。



## 语法

express.**PivotFilters**

express   一个代表 **PivotField** 对象的变量。

## 类型

PivotFilters

## 示例


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的字段“score”的筛选器的数量。*/
function test() {
    alert(ActiveSheet.PivotTables(1).PivotFields("score").PivotFilters.Count)
}
```


```JavaScript
/*本示例显示第一张工作表中数据透视表的字段“id”第一个筛选器的参数。*/
function test() {
    let pvtField = Worksheets.Item(1).Range("I3").PivotTable.PivotFields("id")
    alert(pvtField.PivotFilters.Item(1).Value1)
}
```
