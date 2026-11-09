# PivotTables.Add

添加新的数据透视表。返回一个 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象。



## 语法

express.**Add(PivotCache, TableDestination, TableName, ReadData, DefaultVersion)**

express   一个代表 **PivotTables** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PivotCache | 必选 | PivotCache | 表示一个数据透视表缓存，而新的数据透视表将基于此缓存。缓存用于为报表提供数据。 |
| TableDestination | 必选 | any | 数据透视表目标区域（工作表中用于放置所生成的报表的区域）左上角的单元格。必须在工作表中（此工作表包含由 _expression_ 指定的 **PivotTables** 对象）指定一个目标区域。 |
| TableName | 可选 | any | 新的数据透视表的名称。 |
| ReadData | 可选 | any | 如果为 **True** ，则创建数据透视表缓存以包含外部数据库中的所有记录；此时缓存可能会很大。如果为 **False** ，则允许在实际读取数据之前将某些字段设置为基于服务器的页字段。 |
| DefaultVersion | 可选 | any | 以前创建数据透视表所使用的 ET 版本。 |

## 返回值

一个代表新数据透视表的 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象。

## 示例


```JavaScript
/*本示例在活动工作簿创建一个基于 OLAP 提供程序的新数据透视表缓存，然后基于该缓存在 I1 单元格创建一个新的数据透视表。*/
function test() {
    // Create the PivotTable cache.
    let pvtCache = ActiveWorkbook.PivotCaches().Create(xlExternal, Workbooks.Item(1).Connections.AddFromFile("D:\\test1.accdb", true, true), xlPivotTableVersion15)
    let pvtTable = ActiveSheet.PivotTables().Add(pvtCache, Range("I1"), "Performance")
    pvtTable.SmallGrid = false
    let pvtField1 = pvtTable.PivotFields("age")
    pvtField1.Orientation = xlRowField
    pvtField1.Position = 1
    let pvtField2 = pvtTable.PivotFields("date")
    pvtField2.Orientation = xlColumnField
    pvtField2.Position = 1
    let pvtField3 = pvtTable.PivotFields("name")
    pvtField3.Orientation = xlDataField
    pvtField3.Position = 1
}
```


```JavaScript
/*本示例基于工作表 Sheet1 中第一张数据透视表的缓存在新工作表上创建新数据透视表。*/
function test() {
    Worksheets.Add().Activate()
    let pvtCache = Worksheets.Item("Sheet1").PivotTables(1).PivotCache()
    ActiveSheet.PivotTables().Add(pvtCache, Range("A10"), "pivot1", false, xlPivotTableVersion15)
}
```
