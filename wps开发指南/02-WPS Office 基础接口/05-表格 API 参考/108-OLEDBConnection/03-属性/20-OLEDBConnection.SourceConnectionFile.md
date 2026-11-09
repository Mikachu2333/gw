# OLEDBConnection.SourceConnectionFile

返回或设置一个 **String** 类型的值，该值指示用于创建连接的 WPS Office 数据连接文件或类似文件。可读/写。



## 语法

express.**SourceConnectionFile**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作表上第一张查询表的 OLEDB 连接的数据连接文件。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    alert(connection.SourceConnectionFile)
}
```


```JavaScript
/*本示例在活动工作簿上创建新的工作簿连接，并设置该OLEDB连接的数据连接文件。*/
function test() {
    let connectionString = "OLEDB;Provider=Microsoft.ACE.OLEDB.12.0;User ID=Admin;Data Source=D:\\示例\\示例数据.accdb;Mode=Share Deny None;Jet OLEDB:Engine Type=6;Jet OLEDB:Database Locking Mode=0;Jet OLEDB:Global Partial Bulk Ops=2;Jet OLEDB:Global Bulk Transactions=1;Jet OLEDB:Create System Database=False;Jet OLEDB:Encrypt Database=False;Jet OLEDB:Don't Copy Locale on Compact=False;Jet OLEDB:Compact Without Replica Repair=False;Jet OLEDB:SFP=False;Jet OLEDB:Support Complex Data=False;Jet OLEDB:Bypass UserInfo Validation=False;Jet OLEDB:Limited DB Caching=False;Jet OLEDB:Bypass ChoiceField Validation=False"
    let wbConnection = ActiveWorkbook.Connections.Add2("connection_1", "example", connectionString, "SELECT * FROM `test1`", xlCmdSql)
    wbConnection.OLEDBConnection.SourceConnectionFile = "D:\\我的数据源\\示例数据.accdb test1.odc"
    wbConnection.OLEDBConnection.Refresh()
}
```
