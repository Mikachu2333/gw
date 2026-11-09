# OLEDBConnection 对象

代表 OLE DB 连接。

## 说明


OLE DB 连接可存储在 ET 工作簿中。当 ET 打开此工作簿时， ET 会创建一个称为 OLEDBConnection 对象的 OLE DB 连接的内存副本。

OLEDBConnection 对象包含与连接相关的信息，例如，要连接到的服务器的名称和要在该服务器上打开的对象的名称。（可选）OLEDBConnection 对象也可以包括身份验证凭据信息或要传递到服务器并执行的命令（例如，要由 SQL Server 执行的 SELECT 语句）。


## 示例


```JavaScript
/*本示例在活动工作簿上创建新的工作簿连接，并设置该OLEDB连接的源数据文件，然后将该OLEDB连接保存为 ODC 连接文件。*/
function test() {
    let connectionString = "OLEDB;Provider=Microsoft.ACE.OLEDB.12.0;User ID=Admin;Data Source=D:\\示例\\示例数据.accdb;Mode=Share Deny None;Jet OLEDB:Engine Type=6;Jet OLEDB:Database Locking Mode=0;Jet OLEDB:Global Partial Bulk Ops=2;Jet OLEDB:Global Bulk Transactions=1;Jet OLEDB:Create System Database=False;Jet OLEDB:Encrypt Database=False;Jet OLEDB:Don't Copy Locale on Compact=False;Jet OLEDB:Compact Without Replica Repair=False;Jet OLEDB:SFP=False;Jet OLEDB:Support Complex Data=False;Jet OLEDB:Bypass UserInfo Validation=False;Jet OLEDB:Limited DB Caching=False;Jet OLEDB:Bypass ChoiceField Validation=False"
    let connection = ActiveWorkbook.Connections.Add2("connection_1", "example", connectionString, "SELECT * FROM `test1`", xlCmdSql).OLEDBConnection
    connection.SourceDataFile = "D:\\示例\\示例数据.accdb"
    connection.SaveAsODC("D:\\ODCFile_1.odc")
    connection.Refresh()
}
```


```JavaScript
/*本示例将活动工作簿上第一个 OLEDB 连接的命令串和字符串赋值到单元格中。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    Range("I1").Value2 = connection.CommandText
    Range("I2").Value2 = connection.Connection
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [MakeConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/MakeConnection) | 为指定的 OLE DB 连接建立连接。 |
| [Reconnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/Reconnect) | 先放弃再重新连接指定的连接。 |
| [Refresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/Refresh) | 刷新 OLE DB 连接。 |
| [SaveAsODC](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/SaveAsODC) | 将 OLE DB 连接保存为 WPS Office 数据连接文件。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AlwaysUseConnectionFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/AlwaysUseConnectionFile) | 如果连接文件始终用于建立与数据源的连接，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [BackgroundQuery](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/BackgroundQuery) | 如果 OLE DB 连接的查询是异步执行（在后台执行）的，则为 **True** 。可读/写 **Boolean** 类型。 |
| [CommandText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/CommandText) | 返回或设置指定数据源的命令字符串。可读/写 **Variant** 类型。 |
| [CommandType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/CommandType) | 返回或设置 **XlCmdType** 常量之一。可读/写 **XlCmdType** 。 |
| [Connection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/Connection) | 返回或设置一个包含 OLE DB 设置的字符串，这些设置使 ET 可以连接 OLE DB 数据源。可读/写 **Variant** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [EnableRefresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/EnableRefresh) | 如果用户可刷新连接，则为 **True** 。默认值是 **True** 。可读/写 **Boolean** 类型。 |
| [IsConnected](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/IsConnected) | 如果 **MaintainConnection** 属性为 **True** ，则返回 **True** ，如果它当前未与其源相连，则返回 **False** 。只读 **Boolean** 类型。 |
| [LocalConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/LocalConnection) | 返回或设置脱机多维数据集文件的连接字符串。可读/写 **String** 类型。 |
| [MaintainConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/MaintainConnection) | 如果从刷新操作开始直至关闭工作簿，都一直保留与指定数据源的连接，则返回 **True** 。可读/写 **Boolean** 类型。 |
| [OLAP](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/OLAP) | 如果 OLE DB 连接与联机分析处理 (OLAP) 服务器相连，则返回 **True** ，只读 **Boolean** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/Parent) | 返回指定对象的父对象。只读。 |
| [RefreshDate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/RefreshDate) | 返回上次刷新 OLE DB 连接的日期。只读 **Date** 类型。 |
| [RefreshOnFileOpen](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/RefreshOnFileOpen) | 如果每次打开工作簿都自动更新连接，则为 **True** 。默认值为 **False** 。可读/写 **Boolean** 类型。 |
| [RefreshPeriod](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/RefreshPeriod) | 返回或设置两次刷新之间的时间间隔（单位为分钟）。可读/写 **Long** 类型。 |
| [Refreshing](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/Refreshing) | 如果正在进行指定 OLE DB 连接的后台 OLE DB 查询，则为 **True** 。只读 **Boolean** 类型。 |
| [RobustConnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/RobustConnect) | 返回或设置 OLE DB 连接与其数据源连接的方式。可读/写 **XlRobustConnect** 类型。 |
| [SavePassword](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/SavePassword) | 如果将 OLE DB 连接字符串中的密码信息保存在连接字符串中，则为 **True** 。如果删除密码，则为 **False** 。可读/写 **Boolean** 类型。 |
| [SourceConnectionFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/SourceConnectionFile) | 返回或设置一个 **String** 类型的值，该值指示用于创建连接的 WPS Office 数据连接文件或类似文件。可读/写。 |
| [SourceDataFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/SourceDataFile) | 返回或设置一个 **String** 类型的值，该值指示 OLE DB 连接的源数据文件。可读/写。 |
| [UseLocalConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEDBConnection/member/UseLocalConnection) | 如果 **LocalConnection** 属性用于指定使 ET 能够连接到数据源的字符串，则为 **True** 。如果使用 **Connection** 属性指定的连接字符串，则为 **False** 。可读/写 **Boolean** 类型。 |