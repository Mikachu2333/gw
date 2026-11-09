# PivotFilter.Active

返回指定透视筛选是否是活动的。只读 **Boolean** 。



## 语法

express.**Active**

express   一个代表 **PivotFilter** 对象的变量。

## 类型

boolean

## 说明


当筛选的透视字段在数据透视表中，且数据透视表更新时会计算该筛选时，此属性返回 **True** 。当筛选的透视字段不在数据透视表中，且对数据透视表计算没有影响时，此属性返回 **False** 。



## 示例


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的字段“score”的第二个筛选器是否为活动的。*/
function test() {
    alert(ActiveSheet.PivotTables(1).PivotFields("score").PivotFilters.Item(2).Active)
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中数据透视表字段“name”的第一个筛选器是否为活动的。*/
function test() {
    let pvtFilter = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields("name").PivotFilters.Item(1)
    alert(pvtFilter.Active)
}
```
