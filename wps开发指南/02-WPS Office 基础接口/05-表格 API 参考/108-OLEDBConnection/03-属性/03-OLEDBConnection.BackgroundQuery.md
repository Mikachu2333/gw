# OLEDBConnection.BackgroundQuery

如果 OLE DB 连接的查询是异步执行（在后台执行）的，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**BackgroundQuery**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

boolean

## 说明


对于 OLAP 数据源，此属性是只读的，并且始终返回 **False** 。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一个 OLEDB 连接的查询是否为异步执行（在后台执行）的。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    alert(connection.BackgroundQuery)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的 OLEDB 连接的查询设置为异步执行（在后台执行）的。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    connection.BackgroundQuery = true
}
```
