# QueryTable.QueryType

表示 ET 填充查询表时所使用的查询类型。 **XlQueryType** 类型，只读。



## 语法

express.**QueryType**

express   一个代表 **QueryTable** 对象的变量。

## 类型

XlQueryType

## 说明


| **XlQueryType** 可为以下这些 **XlQueryType** 常量之一。                                                                 |
| ------------------------------------------------------------------------------------------------------------ |
| **xlTextImport** 。基于文本文件，仅用于查询表                                                                               |
| **xlOLEDBQuery** 。基于 OLE DB 查询，包括 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源 |
| **xlWebQuery** 。基于网页，仅用于查询表                                                                                   |
| **xlADORecordset** 。基于 ADO 记录集查询                                                                              |
| **xlDAORecordSet** 。基于 DAO 记录集查询，只用于查询表                                                                       |
| **xlODBCQuery** 。基于 ODBC 数据源                                                                                  |

在 **Connection** 属性值的前缀中指定数据源。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **QueryType** 属性。



## 示例


```JavaScript
/*本示例判断如果第一张工作簿上第一张工作表上的第一个查询表的查询类型是基于网页，则刷新该查询表。*/
function test() {
    let qtQtrResults = Application.Workbooks.Item(1).Worksheets.Item(1).QueryTables.Item(1)
    if (qtQtrResults.QueryType == xlWebQuery) {
        qtQtrResults.Refresh()
    }
}
```


```JavaScript
/*本示例显示工作表 Sheet2 上包含 B1 单元格的查询表的查询类型是否为 xlOLEDBQuery。*/
function test() {
    let qyTable = Application.Worksheets.Item("Sheet2").Range("B1").QueryTable
    alert(qyTable.QueryType == xlOLEDBQuery)
}
```
