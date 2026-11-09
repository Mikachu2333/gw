# ODBCConnection.Connection

返回或设置一个包含 ODBC 设置的字符串，这些设置使 ET 可以连接 ODBC 数据源。可读写 **Variant** 类型。



## 语法

express.**Connection**

express   一个代表 **ODBCConnection** 对象的变量。

## 类型

any

## 说明


设置 **Connection** 属性并不会立即初始化到数据源的连接。必须使用 **Refresh** 方法建立连接并检索数据。



## 示例


```JavaScript
/*本示例将活动工作簿上第一个 ODBC 连接的字符串赋值给 A7 单元格。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).ODBCConnection
    Range("A7").Value2 = connection.Connection
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的 ODBC 连接的Connection、CommandType和CommandText属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.ODBCConnection
    let ConnectionString = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\示例数据.accdb;DefaultDir=D:\\示例;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    connection.Connection = ConnectionString
    connection.CommandType = xlCmdSql
    connection.CommandText = "SELECT * FROM `specialized`"
    connection.Refresh()
}
```
