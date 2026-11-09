# PivotCache.Connection

返回或设置包含下列某项的字符串：允许 ET 连接到 OLE DB 数据源的 OLE DB 设置；允许 ET 连接到 ODBC 数据源的 ODBC 设置；允许 ET 连接到 Web 数据源的 URL；或者文本文件的名称或路径，或是指定某个数据库或 Web 查询的文件名称或路径。 **Variant** 型，可读写。



## 语法

express.**Connection**

express   一个代表 **PivotCache** 对象的变量。

## 类型

any

## 说明


在使用脱机多维数据集文件（脱机多维数据集文件：创建于硬盘或网络共享位置上的文件，用于存储数据透视表或数据透视图的 OLAP 源数据。脱机多维数据集文件允许用户在断开与 OLAP 服务器的连接后继续进行操作。）时，请将 **UseLocalConnection** 属性设置为 **True** ，并使用 **LocalConnection** 属性，而不是用 **Connection** 属性。



## 示例


```JavaScript
/*此示例在活动工作表的 A3 单元格上新建一个基于 OLAP 提供程序的数据透视表高速缓存，然后基于该高速缓存新建一个数据透视表。*/
function test() {
    let pvtCache = ActiveWorkbook.PivotCaches().Create(xlExternal, Workbooks.Item(1).Connections.AddFromFile("D:\\test1.accdb", true, true), xlPivotTableVersion15)
    pvtCache.Connection = "ODBC;DSN=MS Access Database;DBQ=D:\\test1.accdb;DefaultDir=D:\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    pvtCache.MaintainConnection = true
    pvtCache.CreatePivotTable(Range("A3"), "PivotTable1")
    let pvtTable = ActiveSheet.PivotTables("PivotTable1")
    pvtTable.SmallGrid = false
    pvtTable.PivotCache.RefreshPeriod = 0
    let pvtField1 = pvtTable.PivotFields("name")
    pvtField1.Orientation = xlColumnField
    pvtField1.Position = 1
    let pvtField2 = pvtTable.PivotFields("score")
    pvtField2.Orientation = xlDataField
    pvtField2.Position = 1
}
```


```JavaScript
/*本示例设置工作表 Sheet2 第一张数据透视表的缓存的连接文件，并设置其缓存的命令串，然后设置数据透视表字段的位置。*/
function test() {
    let pvtCache = Worksheets.Item("Sheet2").PivotTables(1).PivotCache()
    pvtCache.SourceConnectionFile = "D:\\test1.accdb"
    pvtCache.Connection = "Provider=Microsoft.ACE.OLEDB.12.0;User ID=Admin;Data Source=D:\\test1.accdb;Mode=Share Deny None;Jet OLEDB:Engine Type=6;Jet OLEDB:Database Locking Mode=0;Jet OLEDB:Global Partial Bulk Ops=2;Jet OLEDB:Global Bulk Transactions=1;Jet OLEDB:Create System Database=False;Jet OLEDB:Encrypt Database=False;Jet OLEDB:Don't Copy Locale on Compact=False;Jet OLEDB:Compact Without Replica Repair=False;Jet OLEDB:SFP=False;Jet OLEDB:Support Complex Data=False;Jet OLEDB:Bypass UserInfo Validation=False;Jet OLEDB:Limited DB Caching=False;Jet OLEDB:Bypass ChoiceField Validation=False"
    pvtCache.CommandText = "SELECT * FROM `student` WHERE `name` = '张三'"
    pvtCache.Refresh()
    let pvtTable = Worksheets.Item("Sheet2").PivotTables(1)
    pvtTable.PivotFields("name").Orientation = xlRowField
    pvtTable.PivotFields("score").Orientation = xlDataField
}
```
