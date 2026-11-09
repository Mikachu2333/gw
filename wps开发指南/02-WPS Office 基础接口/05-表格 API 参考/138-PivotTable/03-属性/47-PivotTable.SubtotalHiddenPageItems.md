# PivotTable.SubtotalHiddenPageItems

如果在行或列的分类汇总、块汇总和总计中包括数据透视表中的隐藏页字段项，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**SubtotalHiddenPageItems**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 说明


对于 OLAP （OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源，该属性值总是 **True** 。



## 示例


```JavaScript
/*本示例将第一张工作表上的数据透视表设置为在分类汇总中包括隐藏的页字段项。*/
function test() {
    Worksheets.Item(1).PivotTables("Pivot1").SubtotalHiddenPageItems = true
}
```


```JavaScript
/*本示例显示数据透视表 SubtotalHiddenPageItems 属性的数据类型，并设置为 false。*/
function test() {
    alert(typeof ActiveSheet.PivotTables(1).SubtotalHiddenPageItems)
    ActiveSheet.PivotTables(1).SubtotalHiddenPageItems = false
}
```
