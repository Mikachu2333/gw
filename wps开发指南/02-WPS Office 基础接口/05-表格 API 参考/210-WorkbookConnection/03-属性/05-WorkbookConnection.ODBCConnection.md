# WorkbookConnection.ODBCConnection

返回指定的 **WorkbookConnection** 对象的 ODBC 连接详细信息。只读 **ODBCConnection** 类型。



## 语法

express.**ODBCConnection**

express   一个代表 **WorkbookConnection** 对象的变量。

## 类型

ODBCConnection

## 示例


```JavaScript
/*本示例将活动工作簿上第一个 ODBC 连接保存为名为“ODCFile”的 ODC 文件。*/
function test() {
    ActiveWorkbook.Connections.Item(1).ODBCConnection.SaveAsODC("D:\\ODCFile.odc")
}
```


```JavaScript
/*本示例显示活动工作表上第一张查询表的 ODBC 连接的数据连接文件。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.ODBCConnection
    alert(connection.SourceConnectionFile)
}
```
