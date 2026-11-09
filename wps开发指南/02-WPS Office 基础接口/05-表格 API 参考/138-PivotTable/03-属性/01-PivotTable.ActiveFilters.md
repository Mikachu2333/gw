# PivotTable.ActiveFilters

指示指定数据透视表中的当前活动的筛选。只读。



## 语法

express.**ActiveFilters**

express   一个代表 **PivotTable** 对象的变量。

## 类型

PivotFilters

## 示例


```JavaScript
/*本示例显示 A2 单元格所在数据透视表活动筛选的数量*/
function test() {
    alert(Range("A2").PivotTable.ActiveFilters.Count)
}
```


```JavaScript
/*本示例显示 A2 单元格所在数据透视表的活动筛选中的最后一项的Value1*/
function test() {
    let filters = Range("A2").PivotTable.ActiveFilters
    alert(filters.Item(filters.Count).Value1)
}
```
