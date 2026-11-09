# PivotCache.QueryType

可表示 ET 在生成数据透视表缓存时所使用的查询类型。 **[XlQueryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlQueryType)** 类型，只读。



## 语法

express.**QueryType**

express   一个代表 **PivotCache** 对象的变量。

## 类型

XlQueryType

## 说明


| **XlQueryType** 可为以下这些 **XlQueryType** 常量之一。                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **xlTextImport** 。基于文本文件，仅用于查询表                                                                                                                                        |
| **xlOLEDBQuery** 。基于 OLE DB 查询，包括 OLAP （OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。）数据源 |
| **xlWebQuery** 。基于网页，仅用于查询表                                                                                                                                            |
| **xlADORecordset** 。基于 ADO 记录集查询                                                                                                                                       |
| **xlDAORecordSet** 。基于 DAO 记录集查询，只用于查询表                                                                                                                                |
| **xlODBCQuery** 。基于 ODBC 数据源                                                                                                                                           |

在 **[Connection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/Connection)** 属性值的前缀中指定数据源。



## 示例


```JavaScript
/*本示例显示 ET 在生成活动工作表上数据透视表缓存时使用的查询类型是否为 xlOLEDBQuery。*/
function test() {
    let pvtCache = ActiveSheet.Range("A1").PivotTable.PivotCache()
    alert(pvtCache.QueryType == xlOLEDBQuery)
}
```


```JavaScript
/*本示例判断 ET 在生成活动工作簿上第一个数据透视表缓存时使用的查询类型是否为 xlODBCQuery，并通知用户。*/
function test() {
    let pvtCache = ActiveWorkbook.PivotCaches().Item(1)
    if (pvtCache.QueryType == xlODBCQuery) {
        alert("查询类型是 xlODBCQuery")
    } else {
        alert("查询类型不是 xlODBCQuery")
    }
}
```
