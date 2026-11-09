# PivotTable.SaveData

如果数据透视表的数据随工作簿一起保存，则为 **True** 。如果仅保存数据透视表的定义，则为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**SaveData**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 说明


对于 OLAP （OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。）数据源，此属性始终设置为 **False** 。



## 示例


```JavaScript
/*此示例使数据透视表的数据随工作簿一起保存。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").Range("F1").PivotTable
    pvtTable.SaveData = true
}
```


```JavaScript
/*本示例显示第一张数据透视表 SaveData 属性的数据类型，并将其设置为 false。*/
function test() {
    alert(typeof ActiveSheet.PivotTables(1).SaveData)
    ActiveSheet.PivotTables(1).SaveData = false
}
```
