# ODBCConnection.RefreshDate

返回上次刷新 ODBC 连接的日期。只读 **Date** 类型。



## 语法

express.**RefreshDate**

express   一个代表 **ODBCConnection** 对象的变量。

## 类型

Date

## 说明


对于 OLAP 数据源，在每次查询后都会更新此属性。



## 示例


```JavaScript
/*本示例显示活动工作表上第一张查询表的 ODBC 连接上次刷新的日期。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.ODBCConnection
    alert(connection.RefreshDate)
}
```


```JavaScript
/*本示例刷新活动工作簿上第一个ODBC连接，并显示刷新的日期。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).ODBCConnection
    connection.Refresh()
    alert(connection.RefreshDate)
}
```
