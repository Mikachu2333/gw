# ODBCConnection.EnableRefresh

如果用户可刷新连接，则为 **True** 。默认值是 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**EnableRefresh**

express   一个代表 **ODBCConnection** 对象的变量。

## 类型

boolean

## 说明


如果 **EnableRefresh** 属性设置为 **False** ，则 **RefreshOnFileOpen** 属性被忽略。对于 OLAP 数据源，如果将此属性设置为 **False** ，则会禁用更新。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一个 ODBC 连接用户是否可刷新。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).ODBCConnection
    alert(connection.EnableRefresh)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的 ODBC 连接设置为用户不可刷新。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.ODBCConnection
    connection.EnableRefresh = false
}
```
