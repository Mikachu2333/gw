# PivotCache.CreatePivotTable

创建一个基于 **PivotCache** 对象的数据透视表。返回一个 **PivotTable** 对象。



## 语法

express.**CreatePivotTable(TableDestination, TableName, ReadData, DefaultVersion)**

express   一个代表 **PivotCache** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| TableDestination | 必选 | any | 数据透视表目标区域（工作表中用于放置所生成的数据透视表的区域）左上角的单元格。目标区域必须位于工作簿（此工作簿包含由 expression 指定的 PivotCache 对象）的某个工作表中。 |
| TableName | 可选 | any | 新的数据透视表的名称。 |
| ReadData | 可选 | any | 如果该值为 True，则创建一个包含外部数据库中所有记录的数据透视表高速缓存；此高速缓存可以很大。如果为 False，则允许在实际读取数据之前将某些字段设置为基于服务器的页字段。 |
| DefaultVersion | 可选 | any | 数据透视表的默认版本。 |

## 返回值

PivotTable

## 说明


有关创建基于数据透视表高速缓存的数据透视表的另一种方法，请参阅 **PivotTables** 对象的 **Add** 方法。



## 示例


```JavaScript
/*本示例在活动工作表的 A1 单元格上新建一个基于 OLAP 提供程序的数据透视表高速缓存，然后基于该高速缓存新建一个数据透视表。*/
function test() {
    let pvtCache = ActiveWorkbook.PivotCaches().Create(xlExternal, Workbooks.Item(1).Connections.AddFromFile("D:\\示例数据.accdb"), xlPivotTableVersion15)
    pvtCache.Connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例数据.accdb;DefaultDir=D:\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    pvtCache.CommandType = xlCmdSql
    pvtCache.CommandText = "SELECT * FROM `specialized` WHERE `id` > 2"
    pvtCache.MaintainConnection = true
    pvtCache.CreatePivotTable(Range("A1"), "PivotTable1")
    let pvtTable = ActiveSheet.PivotTables("PivotTable1")
    pvtTable.SmallGrid = false
    pvtTable.PivotCache.RefreshPeriod = 0
    let pvtField1 = pvtTable.PivotFields("id")
    pvtField1.Orientation = xlColumnField
    pvtField1.Position = 1
    let pvtField2 = pvtTable.PivotFields("专业")
    pvtField2.Orientation = xlDataField
    pvtField2.Position = 1
}
```


```JavaScript
/*本示例在活动工作表的 I1 单元格上新建一个基于 OLAP 提供程序的数据透视表高速缓存，然后基于该高速缓存新建一个数据透视表。*/
function test() {
    // Create a PivotTable cache .
    let pvtCache = ActiveWorkbook.PivotCaches().Create(xlExternal, Workbooks.Item(1).Connections.AddFromFile("D:\\test1.accdb", true, true), xlPivotTableVersion15)
    pvtCache.CreatePivotTable(Range("I1"), "Performance")
    let pvtTable = ActiveSheet.PivotTables("Performance")
    pvtTable.SmallGrid = false
    let pvtField1 = pvtTable.PivotFields("name")
    pvtField1.Orientation = xlRowField
    pvtField1.Position = 1
    let pvtField2 = pvtTable.PivotFields("date")
    pvtField2.Orientation = xlColumnField
    pvtField2.Position = 1
    let pvtField3 = pvtTable.PivotFields("age")
    pvtField3.Orientation = xlDataField
    pvtField3.Position = 1
}
```
