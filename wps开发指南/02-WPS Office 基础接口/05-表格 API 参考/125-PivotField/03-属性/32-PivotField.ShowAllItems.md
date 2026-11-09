# PivotField.ShowAllItems

如果显示数据透视表中的所有项目（即使这些项目中不包含汇总数据），则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowAllItems**

express   一个代表 **PivotField** 对象的变量。

## 类型

boolean

## 说明


对于 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源，该值总是 **False** 。



## 示例


```JavaScript
/*本示例显示第一个工作表上第一个数据透视表中“Month”字段的所有行，包括没有数据的月份。*/
function test() {
    Worksheets.Item(1).PivotTables(1).PivotFields("Month").ShowAllItems = true
}
```


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的字段“name”是否展示所有项。*/
function test() {
    alert(ActiveSheet.PivotTables(1).PivotFields("name").ShowAllItems)
}
```
