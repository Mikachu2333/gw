# PivotTable.ShowPages

为页字段中的每个数据项创建新的数据透视表。每个新报表都创建在新的工作表上。



## 语法

express.**ShowPages(PageField)**

express   一个代表 **PivotTable** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PageField | 可选 | any | 命名报表中单个页字段的字符串。 |

## 返回值

Variant

## 说明


本方法对 OLAP （OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。）数据源无效。



## 示例


```JavaScript
/*本示例为工作表 Sheet1 中页字段的每一项创建一个新数据透视表，其字段名为“name”。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").Range("I1").PivotTable
    pvtTable.ShowPages("name")
}
```


```JavaScript
/*本示例为活动工作表中第一张数据透视表的页字段“id”中的每个数据项创建新的数据透视表。*/
function test() {
    ActiveSheet.PivotTables(1).ShowPages("id")
}
```
