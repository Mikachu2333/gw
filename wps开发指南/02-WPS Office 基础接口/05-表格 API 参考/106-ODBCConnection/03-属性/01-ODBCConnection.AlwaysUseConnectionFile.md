# ODBCConnection.AlwaysUseConnectionFile

如果连接文件始终用于建立与数据源的连接，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AlwaysUseConnectionFile**

express   一个代表 **ODBCConnection** 对象的变量。

## 类型

boolean

## 说明


当此属性为 **True** 时，连接文件将用于建立与数据源的连接。如果在工作簿中嵌入的连接不同于外部连接文件，则忽略嵌入的连接，且外部连接文件将是唯一考虑的版本。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一个 ODBC 连接的文件是否始终用于建立与数据源的连接。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).ODBCConnection
    alert(connection.AlwaysUseConnectionFile)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的 ODBC 连接的文件设置为始终用于建立与数据源的连接。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.ODBCConnection
    connection.AlwaysUseConnectionFile = true
}
```
