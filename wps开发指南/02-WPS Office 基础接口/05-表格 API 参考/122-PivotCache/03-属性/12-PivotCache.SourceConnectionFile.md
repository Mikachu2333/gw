# PivotCache.SourceConnectionFile

返回或设置一个 **String** ，它指明用于创建数据透视表的 ET 数据连接文件或类似的文件。可读写。



## 语法

express.**SourceConnectionFile**

express   一个代表 **PivotCache** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例确定是否存在与数据透视表缓存相连的连接，如果存在，则显示该文件的名称。如果不存在连接，则代码将处理运行错误，并通知用户。此示例假定活动工作表上存在数据透视表。*/
function test() {
    let pvtCache = Application.ActiveWorkbook.PivotCaches().Item(1)
    try {
        alert(`The source connection is: ${pvtCache.SourceConnectionFile}`)
    } catch (exception) {
        alert("PivotCache source can not be determined.")
    }
}
```


```JavaScript
/*本示例设置工作表 Sheet2 第一张数据透视表的缓存的连接文件，并设置其缓存的命令串。*/
function test() {
    let pvtCache = Worksheets.Item("Sheet2").PivotTables(1).PivotCache()
    pvtCache.SourceConnectionFile = "D:\\test1.accdb"
    pvtCache.Connection = "Provider=Microsoft.ACE.OLEDB.12.0;User ID=Admin;Data Source=D:\\test1.accdb;Mode=Share Deny None;Jet OLEDB:Engine Type=6;Jet OLEDB:Database Locking Mode=0;Jet OLEDB:Global Partial Bulk Ops=2;Jet OLEDB:Global Bulk Transactions=1;Jet OLEDB:Create System Database=False;Jet OLEDB:Encrypt Database=False;Jet OLEDB:Don't Copy Locale on Compact=False;Jet OLEDB:Compact Without Replica Repair=False;Jet OLEDB:SFP=False;Jet OLEDB:Support Complex Data=False;Jet OLEDB:Bypass UserInfo Validation=False;Jet OLEDB:Limited DB Caching=False;Jet OLEDB:Bypass ChoiceField Validation=False"
    pvtCache.CommandText = "SELECT * FROM `student` WHERE `id` < 4"
    pvtCache.Refresh()
}
```
