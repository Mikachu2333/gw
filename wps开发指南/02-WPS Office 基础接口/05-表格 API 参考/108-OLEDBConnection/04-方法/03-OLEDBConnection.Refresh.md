# OLEDBConnection.Refresh

刷新 OLE DB 连接。



## 语法

express.**Refresh()**

express   一个代表 **OLEDBConnection** 对象的变量。

## 返回值

void

## 说明


创建到 OLE DB 数据源的连接时，ET 使用 **Connection** 属性指定的连接字符串。如果指定的连接字符串缺少必需的值，则显示对话框提示用户输入必需的信息。如果 **DisplayAlerts** 属性为 **False** ，则不显示对话框， **Refresh** 方法将失败，并引发“连接信息无效”异常。

ET 成功创建连接之后，将存储完整的连接字符串，这样，以后在同一编辑会话中调用 **Refresh** 方法时就不会显示提示。通过检查 **Connection** 属性的值，可以获得完整的连接字符串。

建立数据库连接后，将检查 SQL 查询的有效性。如果该查询无效， **Refresh** 方法将失败并引发“SQL 语法错误”异常。

如果查询成功完成或成功启动，则 **Refresh** 方法返回 **True** ；如果用户取消连接，则返回 **False** 。

要查看取回的行数是否超过了工作表中的可用行数，请检查 **FetchedRowOverflow** 属性。每次调用 **Refresh** 方法之前，该属性都将被初始化。



## 示例


```JavaScript
/*本示例判断如果活动工作簿上第一个 OLEDB 连接的CommandType属性为xlCmdSql，则刷新该 OLEDB 连接。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    if (connection.CommandType == xlCmdSql) {
        connection.Refresh()
    }
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的 OLEDB 连接的Connection、CommandType和CommandText属性，并刷新该 OLEDB 连接。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    let connectionString = "OLEDB;Provider=Microsoft.ACE.OLEDB.12.0;User ID=Admin;Data Source=D:\\示例\\示例数据.accdb;Mode=Share Deny None;Jet OLEDB:Engine Type=6;Jet OLEDB:Database Locking Mode=0;Jet OLEDB:Global Partial Bulk Ops=2;Jet OLEDB:Global Bulk Transactions=1;Jet OLEDB:Create System Database=False;Jet OLEDB:Encrypt Database=False;Jet OLEDB:Don't Copy Locale on Compact=False;Jet OLEDB:Compact Without Replica Repair=False;Jet OLEDB:SFP=False;Jet OLEDB:Support Complex Data=False;Jet OLEDB:Bypass UserInfo Validation=False;Jet OLEDB:Limited DB Caching=False;Jet OLEDB:Bypass ChoiceField Validation=False"
    connection.Connection = connectionString
    connection.CommandType = xlCmdSql
    connection.CommandText = "SELECT * FROM `specialized` WHERE `专业` = 'JavaScript'"
    connection.Refresh()
}
```
