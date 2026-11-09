# PivotField.TotalLevels

返回当前字段组中的字段总数。如果字段没有分组或数据源基于的是 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。），则 **TotalLevels** 将返回值 1。 **Long** 类型，只读。



## 语法

express.**TotalLevels**

express   一个代表 **PivotField** 对象的变量。

## 类型

any

## 说明


同一分组内的所有字段具有相同的 **TotalLevels** 值。



## 示例


```JavaScript
/*本示例显示包含活动单元格的字段组中字段的总数。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    alert("This group has " + ActiveCell.PivotField.TotalLevels + " levels")
}
```


```JavaScript
/*本示例显示活动工作表第一张数据透视表的字段“name”中字段组的字段总数。*/
function test() {
    alert(ActiveSheet.PivotTables(1).PivotFields("name").TotalLevels)
}
```
