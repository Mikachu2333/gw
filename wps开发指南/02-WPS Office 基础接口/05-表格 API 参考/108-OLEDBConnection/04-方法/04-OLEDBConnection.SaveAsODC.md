# OLEDBConnection.SaveAsODC

将 OLE DB 连接保存为 WPS Office 数据连接文件。



## 语法

express.**SaveAsODC(ODCFileName, Description, Keywords)**

express   一个代表 **OLEDBConnection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ODCFileName | 必选 | string | 保存文件的位置。 |
| Description | 可选 | any | 将保存在文件中的说明。 |
| Keywords | 可选 | any | 可用于搜索该文件的以空格分隔的关键字。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将连接保存为名为“ODCFile”的 ODC 文件。此示例假定 OLEDB 连接位于活动工作簿上。*/
function test() {
    ActiveWorkbook.Connections.Item(1).OLEDBConnection.SaveAsODC("D:\\示例\\ODCFile.odc")
}
```


```JavaScript
/*本示例在活动工作簿上创建新的工作簿连接，并将该OLEDB连接保存为 ODC 连接文件。*/
function test() {
    let connectionString = "OLEDB;Provider=Microsoft.ACE.OLEDB.12.0;User ID=Admin;Data Source=D:\\示例\\示例数据.accdb;Mode=Share Deny None;Jet OLEDB:Engine Type=6;Jet OLEDB:Database Locking Mode=0;Jet OLEDB:Global Partial Bulk Ops=2;Jet OLEDB:Global Bulk Transactions=1;Jet OLEDB:Create System Database=False;Jet OLEDB:Encrypt Database=False;Jet OLEDB:Don't Copy Locale on Compact=False;Jet OLEDB:Compact Without Replica Repair=False;Jet OLEDB:SFP=False;Jet OLEDB:Support Complex Data=False;Jet OLEDB:Bypass UserInfo Validation=False;Jet OLEDB:Limited DB Caching=False;Jet OLEDB:Bypass ChoiceField Validation=False"
    let wbConnection = ActiveWorkbook.Connections.Add2("connection_1", "example", connectionString, "SELECT * FROM `test1`", xlCmdSql)
    wbConnection.OLEDBConnection.SaveAsODC("D:\\示例\\ODCFile_1.odc", "example", "OLEDB")
}
```
