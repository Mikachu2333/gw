# OLEDBConnection.MakeConnection

为指定的 OLE DB 连接建立连接。



## 语法

express.**MakeConnection()**

express   一个代表 **OLEDBConnection** 对象的变量。

## 返回值

void

## 说明


 **MakeConnection** 方法可在断开连接和用户想要重新建立连接时使用。

如果断开连接，则各种对象和方法可能都会返回运行时错误。使用该方法可确保在执行其他对象或方法之前已建立一个连接。



## 示例


```JavaScript
/*本示例为活动工作表上第一张查询表的 OLEDB 连接建立连接。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    connection.MaintainConnection = true
    connection.MakeConnection()
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的 OLEDB 连接的Connection、CommandType和CommandText属性，并为该 OLEDB 连接建立连接，然后刷新该 OLEDB 连接。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    let connectionString = "OLEDB;Provider=Microsoft.ACE.OLEDB.12.0;User ID=Admin;Data Source=D:\\示例\\示例数据.accdb;Mode=Share Deny None;Jet OLEDB:Engine Type=6;Jet OLEDB:Database Locking Mode=0;Jet OLEDB:Global Partial Bulk Ops=2;Jet OLEDB:Global Bulk Transactions=1;Jet OLEDB:Create System Database=False;Jet OLEDB:Encrypt Database=False;Jet OLEDB:Don't Copy Locale on Compact=False;Jet OLEDB:Compact Without Replica Repair=False;Jet OLEDB:SFP=False;Jet OLEDB:Support Complex Data=False;Jet OLEDB:Bypass UserInfo Validation=False;Jet OLEDB:Limited DB Caching=False;Jet OLEDB:Bypass ChoiceField Validation=False"
    connection.Connection = connectionString
    connection.CommandType = xlCmdSql
    connection.CommandText = "SELECT * FROM `specialized` WHERE `评级` = '优秀'"
    connection.MakeConnection()
    connection.Refresh()
}
```
