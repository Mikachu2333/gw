# PivotTable.ListFormulas

在分离工作表上创建数据透视表的计算项和计算字段的列表。



## 语法

express.**ListFormulas()**

express   一个代表 **PivotTable** 对象的变量。

## 返回值

void

## 说明


本方法对 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源无效。



## 示例


```JavaScript
/*本示例为第一个工作表上的第一个数据透视表创建一个计算项和计算字段的列表。*/
function test() {
    Worksheets.Item(1).PivotTables(1).ListFormulas()
}
```


```JavaScript
/*本示例为选中区域所在的数据透视表创建一个计算项和计算字段的列表。*/
function test() {
    Selection.PivotTable.ListFormulas()
}
```
