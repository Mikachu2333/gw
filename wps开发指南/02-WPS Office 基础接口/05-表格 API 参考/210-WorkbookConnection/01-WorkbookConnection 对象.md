# WorkbookConnection 对象

连接是从 ET 工作簿之外的外部数据源获取数据所需要的一组信息。

## 说明


连接可存储在 ET 工作簿中。工作簿打开时，ET 创建连接的内存副本，称为连接对象。连接对象包含服务器名称和服务器上打开的对象的名称等信息。连接对象也可以选择包含身份验证凭据和/或一个命令，该命令可传递给服务器执行（例如：由 SQL Server 执行的 SELECT 语句）。

连接的确切形式取决于数据检索的机制。


## 示例


```JavaScript
/*本示例显示活动工作簿上名为“test1”的连接的简要说明。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item("test1")
    alert(connection.Description)
}
```


```JavaScript
/*本示例将基于活动工作表上第一张查询表的连接的第一个范围中的字体设置为斜体。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    connection.Ranges.Item(1).Font.Italic = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/member/Delete) | 删除工作簿连接。 |
| [Refresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/member/Refresh) | 刷新工作簿连接。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Description](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/member/Description) | 返回或设置 **WorkbookConnection** 对象的简要说明。可读/写 **String** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/member/Name) | 返回或设置工作簿连接对象的名称。可读/写 **String** 类型。 |
| [ODBCConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/member/ODBCConnection) | 返回指定的 **WorkbookConnection** 对象的 ODBC 连接详细信息。只读 **ODBCConnection** 类型。 |
| [OLEDBConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/member/OLEDBConnection) | 返回指定的 **WorkbookConnection** 对象的 OLEDB 连接详细信息。只读 **OLEDBConnection** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/member/Parent) | 返回指定对象的父对象。只读。 |
| [Ranges](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/member/Ranges) | 返回指定的 **WorkbookConnection** 对象的对象区域。只读 **Ranges** 类型。 |
| [RefreshWithRefreshAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/member/RefreshWithRefreshAll) | 确定在执行“全部刷新”时是否应刷新连接。 可读/写 **Boolean** 类型。 |
| [TextConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/member/TextConnection) | 返回一个 **[TextConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/obj)** 对象，该对象包含有关文本文件查询的信息。 此为只读属性。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/member/Type) | 返回工作簿连接类型。只读 **XlConnectionType** 类型。 |