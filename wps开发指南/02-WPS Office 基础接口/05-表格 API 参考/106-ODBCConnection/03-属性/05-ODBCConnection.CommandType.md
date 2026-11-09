# ODBCConnection.CommandType

返回或设置 **XlCmdType** 常量之一。 **XlCmdType** 类型，可读写。



## 语法

express.**CommandType**

express   一个代表 **ODBCConnection** 对象的变量。

## 类型

XlCmdType

## 说明


返回或设置的常量描述了 **CommandText** 属性的值。默认值是 **xlCmdSql** 。



## 示例


```JavaScript
/*本示例为第一张工作簿上第一张工作表中第一张查询表的 ODBC 数据源设置命令字符串。注意，该命令字符串是一个 SQL 语句。*/
function test() {
    let connection = Workbooks.Item(1).Worksheets.Item(1).QueryTables.Item(1).WorkbookConnection.ODBCConnection
    connection.CommandType = xlCmdSql
    connection.CommandText = "SELECT * FROM `student` WHERE `age` < '14'"
    connection.Refresh()
}
```


```JavaScript
/*本示例显示活动工作簿上第一个 ODBC 连接的 CommandType 属性是否为 xlCmdSql。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).ODBCConnection
    alert(connection.CommandType == xlCmdSql)
}
```
