# Range.QueryTable

返回一个 **[QueryTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/obj)** 对象，它代表与指定 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象相交的查询表。



## 语法

express.**QueryTable**

express   一个代表 **Range** 对象的变量。

## 类型

QueryTable

## 示例


```JavaScript
/*此示例刷新与第一张工作表上的 B1 单元格相交的 QueryTable 对象。*/
function test() {
    Worksheets.Item(1).Range("B1").QueryTable.Refresh()
}
```


```JavaScript
/*此示例设置第一张工作表上包含 B1 单元格的查询表的 ODBC 数据源的命令串。注意，该命令串是一个 SQL 语句。*/
function test() {
    let qyTable = Worksheets.Item(1).Range("B1").QueryTable
    qyTable.CommandType = xlCmdSql
    qyTable.CommandText = "SELECT * FROM `student` WHERE `age` < '12' "
    qyTable.Refresh()
}
```
