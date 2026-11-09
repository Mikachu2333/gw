# PivotFilter.Name

此属性提供选项可指定引用筛选。索引值可能发生更改，因此不能依赖于这些值获得准确的引用。



## 语法

express.**Name**

express   一个代表 **PivotFilter** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作表中第一个数据透视表的字段“name”的第一个筛选器的名称。*/
function test() {
    let pvtFilter = ActiveSheet.PivotTables(1).PivotFields("name").PivotFilters.Item(1)
    alert(pvtFilter.Name)
}
```


```JavaScript
/*本示例显示活动工作表中数据透视表的字段“id”的第二个筛选器的名称。*/
function test() {
    let pvtFilter = ActiveSheet.Range("I1").PivotTable.PivotFields("id").PivotFilters.Item(2)
    alert(`筛选器的名称：${pvtFilter.Name}`)
}
```
