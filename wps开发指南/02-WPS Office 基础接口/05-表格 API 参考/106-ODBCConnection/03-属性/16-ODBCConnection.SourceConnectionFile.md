# ODBCConnection.SourceConnectionFile

返回或设置一个 **String** 类型的值，该值指示用于创建连接的 WPS Office 数据连接文件或类似文件。可读/写。



## 语法

express.**SourceConnectionFile**

express   一个代表 **ODBCConnection** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作表上第一张查询表的 ODBC 连接的数据连接文件。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.ODBCConnection
    alert(connection.SourceConnectionFile)
}
```


```JavaScript
/*本示例在活动工作簿上创建新的工作簿连接，并设置该ODBC连接的数据连接文件，然后刷新该ODBC连接。*/
function test() {
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\示例数据.accdb;DefaultDir=D:\\示例;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let wbConnection = ActiveWorkbook.Connections.Add2("connection_2", "example", connection, "SELECT * FROM `test1`", xlCmdSql)
    wbConnection.ODBCConnection.SourceConnectionFile = "D:\\我的数据源\\示例数据.accdb test1.odc"
    wbConnection.ODBCConnection.Refresh()
}
```
