# PivotCache.CommandType

返回或设置说明部分的下表中列出的 **XlCmdType** 常量之一。返回或设置的常量用于描述 **CommandText** 属性的值。默认值为 **xlCmdSQL** 。 **XlCmdType** 类型，可读写。



## 语法

express.**CommandType**

express   一个代表 **PivotCache** 对象的变量。

## 类型

XlCmdType

## 说明


| XlCmdType 可为以下这些 XlCmdType 常量之一。                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| xlCmdCube。包含一个 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源的多维数据集（多维数据集：一种 OLAP 数据结构。多维数据集包含维度，如“国家/地区/省（或市/自治区）/市（或县）”，还包括数据字段，如“销售额”。维度将各种类型的数据组织到带有明细数据级别的分层结构中，而数据字段度量数量。）名称。 |
| xlCmdDefault。包含 OLE DB 提供者可识别的命令文本。                                                                                                                                                                                |
| xlCmdSql。包含一个 SQL 语句。                                                                                                                                                                                              |
| xlCmdTable。包含用于访问 OLE DB 数据源的表名称。                                                                                                                                                                                  |

只有当查询表或数据透视表缓存的 **QueryType** 属性的值为 **xlOLEDBQuery** 时，才可以设置 **CommandType** 属性。

当 **CommandType** 属性的值为 **xlCmdCube** 时，如果没有与查询表相关联的数据透视表，则不能更改该值。



## 示例


```JavaScript
/*本示例设置第一个数据透视缓存的 ODBC 数据源的命令串。该命令串是一个 SQL 语句。*/
function test() {
    let pvtCache = Workbooks.Item(1).PivotCaches().Item(1)
    pvtCache.CommandType = xlCmdSql
    pvtCache.CommandText = "SELECT * FROM `test1` WHERE `age` < 23"
    pvtCache.Refresh()
}
```


```JavaScript
/*本示例判断如果活动工作表中第一个数据透视表缓存的 CommandType 属性为 xlCmdSql，则显示该数据透视缓存的数据源的命令串。*/
function test() {
    let pvtCache = ActiveSheet.PivotTables(1).PivotCache()
    if (pvtCache.CommandType == xlCmdSql) {
        alert(pvtCache.CommandText)
    }
}
```
