# ODBCConnection.CommandText

返回或设置指定数据源的命令字符串。可读写， **Variant** 类型。



## 语法

express.**CommandText**

express   一个代表 **ODBCConnection** 对象的变量。

## 类型

any

## 说明


应使用 **CommandText** 属性，而不应使用 **SQL** 属性，现在 SQL 属性的存在主要是为了与 ET 的早期版本兼容。如果您同时使用这两个属性，则 **CommandText** 属性的值优先。

 **CommandType** 属性描述了 **CommandText** 属性的值。



## 示例


```JavaScript
/*本示例为第一张工作簿上第一张工作表中第一张查询表的 ODBC 数据源设置命令字符串。注意，该命令字符串是一个 SQL 语句。*/
function test() {
    let connection = Workbooks.Item(1).Worksheets.Item(1).QueryTables.Item(1).WorkbookConnection.ODBCConnection
    connection.CommandType = xlCmdSql
    connection.CommandText = "SELECT * FROM `student` WHERE `ID` < 3"
    connection.Refresh()
}
```


```JavaScript
/*本示例显示活动工作簿上第一个 ODBC 连接的命令串。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).ODBCConnection
    alert(connection.CommandText)
}
```
