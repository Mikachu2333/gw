# OLEDBConnection.Connection

返回或设置一个包含 OLE DB 设置的字符串，这些设置使 ET 可以连接 OLE DB 数据源。可读/写 **Variant** 类型。



## 语法

express.**Connection**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

any

## 说明


设置 **Connection** 属性并不会立即初始化到数据源的连接。必须使用 **Refresh** 方法建立连接并检索数据。 在使用脱机多维数据集文件时，请将 **UseLocalConnection** 属性设置为 **True** 并使用 **LocalConnection** 属性，而不是 **Connection** 属性。



## 示例


```JavaScript
/*本示例在活动工作簿创建一个基于第一张查询表的OLEDB连接的数据透视表缓存，然后在 I1 单元格基于该缓存创建一个数据透视表。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let pvtCache = ActiveWorkbook.PivotCaches().Create(xlExternal, connection, xlPivotTableVersion15)
    pvtCache.Connection = connection.OLEDBConnection.Connection
    pvtCache.MaintainConnection = true
    let pvtTable = pvtCache.CreatePivotTable(Range("I1"), "PivotTable1")
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
/*本示例显示活动工作簿上第一个 OLEDB 连接的字符串。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    alert(connection.Connection)
}
```
