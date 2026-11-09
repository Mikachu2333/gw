# OLEDBConnection.SourceDataFile

返回或设置一个 **String** 类型的值，该值指示 OLE DB 连接的源数据文件。可读/写。



## 语法

express.**SourceDataFile**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

string

## 说明


对于基于文件的数据源（如 Access）， **SourceDataFile** 属性包含源数据文件的完全限定路径。对于基于服务器的数据源（如 SQL Server），该属性为 null。如果通过编程方式更改 **Connection** 属性，则 **SourceDataFile** 属性设置为 null。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一个 OLEDB 连接的源数据文件。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    alert(connection.SourceDataFile)
}
```


```JavaScript
/*本示例在活动工作簿上创建新的工作簿连接，并设置该OLEDB连接的源数据文件。*/
function test() {
    let connectionString = "OLEDB;Provider=Microsoft.ACE.OLEDB.12.0;User ID=Admin;Data Source=D:\\示例\\示例数据.accdb;Mode=Share Deny None;Jet OLEDB:Engine Type=6;Jet OLEDB:Database Locking Mode=0;Jet OLEDB:Global Partial Bulk Ops=2;Jet OLEDB:Global Bulk Transactions=1;Jet OLEDB:Create System Database=False;Jet OLEDB:Encrypt Database=False;Jet OLEDB:Don't Copy Locale on Compact=False;Jet OLEDB:Compact Without Replica Repair=False;Jet OLEDB:SFP=False;Jet OLEDB:Support Complex Data=False;Jet OLEDB:Bypass UserInfo Validation=False;Jet OLEDB:Limited DB Caching=False;Jet OLEDB:Bypass ChoiceField Validation=False"
    let connection = ActiveWorkbook.Connections.Add2("connection_1", "example", connectionString, "SELECT * FROM `test1`", xlCmdSql)
    connection.OLEDBConnection.SourceDataFile = "D:\\示例\\示例数据.accdb"
    connection.OLEDBConnection.Refresh()
}
```
