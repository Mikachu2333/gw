# Connections.Add2

添加到工作簿的新连接。



## 语法

express.**Add2(Name, Description, ConnectionString, CommandText, lCmdtype, CreateModelConnection, ImportRelationships)**

express   一个代表 **Connections** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 连接的名称。 |
| Description | 必选 | string | 连接的简要说明。 |
| ConnectionString | 必选 | any | 连接字符串。 |
| CommandText | 必选 | any | 用于创建连接的命令文本。 |
| lCmdtype | 可选 | any | 命令类型。 |
| CreateModelConnection | 可选 | any | 指定是否创建到 PowerPivot 模型的连接。 |
| ImportRelationships | 可选 | any | 指定是否导入任何现有关系。 |

## 返回值

WorkbookConnection

## 示例


```JavaScript
/*本示例在活动工作簿上创建新的工作簿连接，并显示该工作簿上连接的数量。*/
function test() {
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\test1.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let sql = "SELECT * FROM `student`"
    ActiveWorkbook.Connections.Add2("connection_1", "example", connection, sql, xlCmdSql)
    alert(ActiveWorkbook.Connections.Count)
}
```


```JavaScript
/*本示例在活动工作簿上创建新的工作簿连接，并基于该连接创建新的数据透视缓存。然后基于该数据透视缓存创建新的数据透视表。*/
function test() {
    let connection = "OLEDB;Provider=Microsoft.ACE.OLEDB.12.0;User ID=Admin;Data Source=D:\\示例\\example1.xlsx;Mode=Share Deny Write;Extended Properties='HDR=YES';Jet OLEDB:Engine Type=37;Jet OLEDB:Database Locking Mode=0;Jet OLEDB:Global Partial Bulk Ops=2;Jet OLEDB:Global Bulk Transactions=1;Jet OLEDB:Create System Database=False;Jet OLEDB:Encrypt Database=False;Jet OLEDB:Don't Copy Locale on Compact=False;Jet OLEDB:Compact Without Replica Repair=False;Jet OLEDB:SFP=False;Jet OLEDB:Support Complex Data=False;Jet OLEDB:Bypass UserInfo Validation=False;Jet OLEDB:Limited DB Caching=False;Jet OLEDB:Bypass ChoiceField Validation=False"
    let workbookcn = ActiveWorkbook.Connections.Add2("connection_2", "example", connection, "SELECT * FROM `Sheet1$`", xlCmdSql)
    let pvtCache = ActiveWorkbook.PivotCaches().Create(xlExternal, workbookcn, xlPivotTableVersion15)
    pvtCache.CreatePivotTable(Range("A1"), "PivotTable1")
}
```
