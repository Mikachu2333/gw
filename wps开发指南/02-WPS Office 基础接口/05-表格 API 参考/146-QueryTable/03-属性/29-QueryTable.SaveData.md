# QueryTable.SaveData

如果将查询表的数据随工作簿一起保存，则为 **True** 。如果仅保存查询表的定义，则为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**SaveData**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


对于 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源，此属性始终设置为 **False** 。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **SaveData** 属性。



## 示例


```JavaScript
/*本示例显示第一张工作表上查询表“ExternalData_1”的数据是否随工作簿一起保存。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item("ExternalData_1")
    alert(qyTable.SaveData)
}
```


```JavaScript
/*本示例将第一张工作表上第一张查询表设置为仅保存查询表的定义，并刷新该查询表。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    qyTable.SaveData = false
    qyTable.Refresh()
}
```
