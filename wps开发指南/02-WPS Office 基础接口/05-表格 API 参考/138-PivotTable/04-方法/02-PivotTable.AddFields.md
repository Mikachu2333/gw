# PivotTable.AddFields

向数据透视表或数据透视图中添加行字段、列字段和页字段。



## 语法

express.**AddFields(RowFields, ColumnFields, PageFields, AddToTable)**

express   一个代表 **PivotTable** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| RowFields | 可选 | any | 指定要作为行添加或要添加到类别坐标轴中的字段名（或字段名数组）。 |
| ColumnFields | 可选 | any | 指定要作为列添加或要添加到序列坐标轴中的字段名（或字段名数组）。 |
| PageFields | 可选 | any | 指定要作为页添加或要添加到页区域中的字段名（或字段名数组）。 |
| AddToTable | 可选 | any | 仅适用于数据透视表。如果为 True，则将指定的字段添加到报表中（不替换现有字段）。如果为 False，则用新的字段替换现有的字段。默认值为 False。 |

## 返回值

Variant

## 说明


必须指定其中某个字段参数。

字段名指定由 **PivotField** 对象的 **SourceName** 属性返回的唯一名称。

这个方法对 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源不可用。



## 示例


```JavaScript
/*本示例以“Status”字段和“Closed_By”字段替换 Sheet1 的第一个数据透视表的现有列字段。*/
function test() {
    Worksheets.Item("Sheet1").PivotTables(1).AddFields(null, ["Status", "Closed_By"])
}
```


```JavaScript
/*本示例为活动工作表中数据透视表添加行字段、列字段和页字段且不替换现有字段。*/
function test() {
    let pvtTable = ActiveSheet.Range("I1").PivotTable
    pvtTable.AddFields("x", "Status", "Closed_By", true)
}
```
