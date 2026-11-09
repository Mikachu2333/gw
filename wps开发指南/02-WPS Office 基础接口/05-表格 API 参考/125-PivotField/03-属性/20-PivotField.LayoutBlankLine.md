# PivotField.LayoutBlankLine

如果在数据透视表的指定行字段后插入了一个空行，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**LayoutBlankLine**

express   一个代表 **PivotField** 对象的变量。

## 类型

boolean

## 说明


可以对任意数据透视表字段设置此属性；然而，只有当指定字段是除最里层（最低级别（级别：OLAP 维的一部分。在维中，数据的明细级别会有高、低之分，如在时间维内分为年、季度、月和日等级别。））行字段之外的其他行字段时，该空行才会出现。对于非 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。）数据源，当重新排列该字段或将其添加到数据透视表中时，此属性的值不会改变。

不能在数据透视表的空行中输入数据。



## 示例


```JavaScript
/*本示例在活动工作表的第一个数据透视表的字段“age”后添加一个空行。*/
function test() {
    ActiveSheet.PivotTables(1).PivotFields("age").LayoutBlankLine = true
}
```


```JavaScript
/*本示例显示第一张工作表的数据透视表的字段“score”后是否存在空行。*/
function test() {
    alert(Worksheets.Item(1).Range("I1").PivotTable.PivotFields("score").LayoutBlankLine)
}
```
