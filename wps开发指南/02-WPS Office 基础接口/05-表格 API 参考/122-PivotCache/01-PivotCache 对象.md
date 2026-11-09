# PivotCache 对象

代表数据透视表的缓存。

## 说明


 **PivotCache** 对象是 **PivotCaches** 集合的成员。


## 示例


```JavaScript
/*本示例设置工作表 Sheet1 中第一张数据透视表缓存的数据源，并显示。*/
function test() {
    let pvtCache = Worksheets.Item("Sheet1").PivotTables(1).PivotCache()
    pvtCache.SourceData = "=Sheet1!R1C1:R8C3"
    alert(pvtCache.SourceData)
}
```


```JavaScript
/*此示例刷新第一张工作簿中第一个数据缓存。*/
function test() {
    Workbooks.Item(1).PivotCaches().Item(1).Refresh()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [CreatePivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/CreatePivotTable) | 创建一个基于 **PivotCache** 对象的数据透视表。返回一个 **PivotTable** 对象。 |
| [Refresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/Refresh) | 使指定的 PivotCache 立即重绘。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [CommandText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/CommandText) | 返回或设置指定数据源的命令串。 **Variant** 型，可读写。 |
| [CommandType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/CommandType) | 返回或设置说明部分的下表中列出的 **XlCmdType** 常量之一。返回或设置的常量用于描述 **CommandText** 属性的值。默认值为 **xlCmdSQL** 。 **XlCmdType** 类型，可读写。 |
| [Connection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/Connection) | 返回或设置包含下列某项的字符串：允许 ET 连接到 OLE DB 数据源的 OLE DB 设置；允许 ET 连接到 ODBC 数据源的 ODBC 设置；允许 ET 连接到 Web 数据源的 URL；或者文本文件的名称或路径，或是指定某个数据库或 Web 查询的文件名称或路径。 **Variant** 型，可读写。 |
| [EnableRefresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/EnableRefresh) | 如果用户可刷新数据透视表高速缓存或查询表，则为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/Index) | 返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。 |
| [IsConnected](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/IsConnected) | 如果 **MaintainConnection** 属性为 **True** ，并且数据透视表缓存当前与其源相连，则返回 **True** 。如果数据透视表缓存当前未与其源相连，则返回 **False** 。只读 **Boolean** 类型。 |
| [MissingItemsLimit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/MissingItemsLimit) | 返回或设置每个数据透视表字段的唯一项的最大数量，即使在缓存记录中没有支持数据，唯一项也能保留。 **[XlPivotTableMissingItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPivotTableMissingItems)** 类型，可读写。 |
| [QueryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/QueryType) | 可表示 ET 在生成数据透视表缓存时所使用的查询类型。 **[XlQueryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlQueryType)** 类型，只读。 |
| [RefreshOnFileOpen](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/RefreshOnFileOpen) | 如果每次打开工作簿时，数据透视表缓存都自动进行更新，则为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [SavePassword](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/SavePassword) | 如果将 ODBC 连接字符串中的密码信息与指定查询一起保存，则为 **True** 。如果不保存密码信息，则该值为 **False** 。 **Boolean** 类型，可读写。 |
| [SourceConnectionFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/SourceConnectionFile) | 返回或设置一个 **String** ，它指明用于创建数据透视表的 ET 数据连接文件或类似的文件。可读写。 |
| [SourceData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/SourceData) | 返回数据透视表的数据源，如下表所示。 **Variant** 型，可读写。 |
| [SourceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/SourceType) | 返回 **[XlPivotTableSourceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPivotTableSourceType)** 值，它代表所发布项目的类型。 |
| [UpgradeOnRefresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/UpgradeOnRefresh) | 包含有关是否在下一次刷新时升级 PivotCache 及所有连接的数据透视表的信息。可读/写 **Boolean** 类型。 |
| [Version](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/Version) | 返回在其中创建数据透视表缓存的 ET 版本。只读。 |
| [WorkbookConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/WorkbookConnection) | 建立当前工作簿与 **PivotCache** 对象之间的连接。只读。 |