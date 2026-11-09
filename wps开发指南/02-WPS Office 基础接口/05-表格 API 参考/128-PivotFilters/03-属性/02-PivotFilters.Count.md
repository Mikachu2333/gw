# PivotFilters.Count

返回 **PivotFilters** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **PivotFilters** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的字段“score”的筛选器的数量。*/
function test() {
    alert(ActiveSheet.PivotTables(1).PivotFields("score").PivotFilters.Count)
}
```


```JavaScript
/*本示例显示第一张工作表中数据透视表的字段“id”的筛选器的数量。*/
function test() {
    let pvtFilters = Worksheets.Item(1).Range("I1").PivotTable.PivotFields("id").PivotFilters
    alert(`筛选器的数量：${pvtFilters.Count}`)
}
```
