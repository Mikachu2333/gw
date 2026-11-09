# PivotFilter.Description

为 **PivotFilter** 对象提供可选说明。只读 **String** 。



## 语法

express.**Description**

express   一个代表 **PivotFilter** 对象的变量。

## 类型

string

## 说明


说明字符串的最大长度为 255 个字符。



## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中数据透视表的字段“name”的第一个筛选器的可选说明。*/
function test() {
    let pvtFilter = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields("name").PivotFilters.Item(1)
    alert(pvtFilter.Description)
}
```


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的字段“id”的第二个筛选器的可选说明。*/
function test() {
    let pvtFilter = ActiveSheet.PivotTables(1).PivotFields("id").PivotFilters.Item(2)
    alert(pvtFilter.Description)
}
```
