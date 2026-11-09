# QueryTable.CommandType

返回或设置备注部分的下表中列出的 **XlCmdType** 常量之一。返回或设置的常量用于描述 **CommandText** 属性的值。默认值为 **xlCmdSQL** 。 **XlCmdType** 类型，可读写。



## 语法

express.**CommandType**

express   一个代表 **QueryTable** 对象的变量。

## 类型

XlCmdType

## 说明


| **XlCmdType** 可为以下这些 **XlCmdType** 常量之一。                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **xlCmdCube** 。包含 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源的多维数据集（多维数据集：一种 OLAP 数据结构。多维数据集包含维度，如“国家/地区/省（或市/自治区）/市（或县）”，还包括数据字段，如“销售额”。维度将各种类型的数据组织到带有明细数据级别的分层结构中，而数据字段度量数量。）名称。 |
| **xlCmdDefault** 。包含 OLE DB 提供者可识别的命令文本。                                                                                                                                                                              |
| **xlCmdSql** 。包含一个 SQL 语句。                                                                                                                                                                                            |
| **xlCmdTable** 。包含用于访问 OLE DB 数据源的表名称。                                                                                                                                                                                |

只有当查询表或数据透视表缓存的 **QueryType** 属性值为 **xlOLEDBQuery** 时，才可以设置 **CommandType** 属性。

当 **CommandType** 属性的值为 **xlCmdCube** 时，如果没有与查询表相关联的数据透视表，则不能更改该值。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **CommandType** 属性。



## 示例


```JavaScript
/*此示例设置第一张工作簿上第一张工作表中第一张查询表的 ODBC 数据源的命令串。注意，该命令串是一个 SQL 语句。*/
function test() {
    let qyTable = Application.Workbooks.Item(1).Worksheets.Item(1).QueryTables.Item(1)
    qyTable.CommandType = xlCmdSql
    qyTable.CommandText = "SELECT * FROM `student` WHERE `age` < '14'"
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第一张工作表中第一张查询表的 CommandType 属性是否为 xlCmdSql。*/
function test() {
    alert(Worksheets.Item(1).QueryTables.Item(1).CommandType == xlCmdSql)
}
```
