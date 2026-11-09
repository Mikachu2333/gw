# ODBCConnection.SourceDataFile

返回或设置一个 **String** 类型的值，该值指示 ODBC 连接的源数据文件。可读/写。



## 语法

express.**SourceDataFile**

express   一个代表 **ODBCConnection** 对象的变量。

## 类型

string

## 说明


对于基于文件的数据源（如 Access）， **SourceDataFile** 属性包含源数据文件的完全限定路径。对于基于服务器的数据源（如 SQL Server），该属性为 null。如果通过编程方式更改 **Connection** 属性，则 **SourceDataFile** 属性设置为 null。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一个 ODBC 连接的源数据文件。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).ODBCConnection
    alert(connection.SourceDataFile)
}
```


```JavaScript
/*本示例在活动工作簿上创建新的工作簿连接，并设置该连接的源数据文件，然后刷新该连接。*/
function test() {
    let connectionString = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\示例数据.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let connection = ActiveWorkbook.Connections.Add2("connection_2", "example", connectionString, "SELECT * FROM `test1`", xlCmdSql)
    connection.ODBCConnection.SourceDataFile = "D:\\示例\\示例数据.accdb"
    connection.ODBCConnection.Refresh()
}
```
