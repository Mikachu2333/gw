# ODBCConnection 对象

代表 ODBC 连接。

## 说明


ODBC 连接可存储在 ET 工作簿中。当 ET 打开此工作簿时， ET 会创建一个称为 **ODBCConnection** 对象的 ODBC 连接的内存副本。

 **ODBCConnection** 对象包含与连接相关的信息，例如，要连接到的服务器的名称和要在该服务器上打开的对象的名称。（可选） **ODBCConnection** 对象也可以包括身份验证凭据信息或要传递到服务器并执行的命令（例如，要由 SQL Server 执行的 `SELECT` 语句）。


## 示例


```JavaScript
/*本示例在活动工作簿上创建新的工作簿连接，并设置该ODBC连接的数据连接文件，然后将该连接保存为ODC文件。*/
function test() {
    let connectionString = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\示例数据.accdb;DefaultDir=D:\\示例;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let connection = ActiveWorkbook.Connections.Add2("connection_2", "example", connectionString, "SELECT * FROM `test1`", xlCmdSql).ODBCConnection
    connection.SourceConnectionFile = "D:\\我的数据源\\示例数据.accdb test1.odc"
    connection.SaveAsODC("D:\\ODCFile_1.odc")
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的 ODBC 连接的Connection、CommandType和CommandText属性，并刷新该 ODBC 连接。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.ODBCConnection
    let conString = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\示例数据.accdb;DefaultDir=D:\\示例;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    connection.Connection = conString
    connection.CommandType = xlCmdSql
    connection.CommandText = "SELECT * FROM `specialized` WHERE `评级` = '优秀'"
    connection.Refresh()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Refresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/Refresh) | 刷新 ODBC 连接。 |
| [SaveAsODC](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/SaveAsODC) | 将 ODBC 连接保存为一个 WPS Office 数据连接文件。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AlwaysUseConnectionFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/AlwaysUseConnectionFile) | 如果连接文件始终用于建立与数据源的连接，则为 **True** 。 **Boolean** 类型，可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [BackgroundQuery](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/BackgroundQuery) | 如果 ODBC 连接的查询是异步执行（在后台执行）的，则为 **True** 。可读/写 **Boolean** 类型。 |
| [CommandText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/CommandText) | 返回或设置指定数据源的命令字符串。可读写， **Variant** 类型。 |
| [CommandType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/CommandType) | 返回或设置 **XlCmdType** 常量之一。 **XlCmdType** 类型，可读写。 |
| [Connection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/Connection) | 返回或设置一个包含 ODBC 设置的字符串，这些设置使 ET 可以连接 ODBC 数据源。可读写 **Variant** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [EnableRefresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/EnableRefresh) | 如果用户可刷新连接，则为 **True** 。默认值是 **True** 。可读/写 **Boolean** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/Parent) | 返回指定对象的父对象。只读。 |
| [RefreshDate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/RefreshDate) | 返回上次刷新 ODBC 连接的日期。只读 **Date** 类型。 |
| [RefreshOnFileOpen](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/RefreshOnFileOpen) | 如果每次打开工作簿都自动更新连接，则为 **True** 。默认值为 **False** 。可读/写 **Boolean** 类型。 |
| [RefreshPeriod](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/RefreshPeriod) | 返回或设置两次刷新之间的时间间隔（单位为分钟）。可读/写 **Long** 类型。 |
| [Refreshing](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/Refreshing) | 如果正在进行指定 ODBC 连接的后台 ODBC 查询，则为 **True** 。只读 **Boolean** 类型。 |
| [RobustConnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/RobustConnect) | 返回或设置 ODBC 连接与其数据源连接的方式。可读/写 **XlRobustConnect** 类型。 |
| [SavePassword](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/SavePassword) | 如果将 ODBC 连接字符串中的密码信息保存在连接字符串中，则为 **True** 。如果删除密码，则为 **False** 。可读/写 **Boolean** 类型。 |
| [SourceConnectionFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/SourceConnectionFile) | 返回或设置一个 **String** 类型的值，该值指示用于创建连接的 WPS Office 数据连接文件或类似文件。可读/写。 |
| [SourceDataFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ODBCConnection/member/SourceDataFile) | 返回或设置一个 **String** 类型的值，该值指示 ODBC 连接的源数据文件。可读/写。 |