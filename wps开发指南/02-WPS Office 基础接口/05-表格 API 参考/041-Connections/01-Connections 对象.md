# Connections 对象

指定工作簿的 **WorkbookConnection** 对象的集合。


## 示例


```JavaScript
/*本示例从现有文件向工作簿添加连接。*/
function test() {
    Application.ActiveWorkbook.Connections.AddFromFile("D:\\我的数据源\\示例数据 test1.odc")
}
```


```JavaScript
/*此示例显示第一张工作簿上第一个 ODBC 连接的 CommandType 属性是否为 xlCmdSql。*/
function test() {
    let wbConnection = Workbooks.Item(1).Connections.Item(1)
    alert(wbConnection.ODBCConnection.CommandType == xlCmdSql)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Connections/member/Add2) | 添加到工作簿的新连接。 |
| [AddFromFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Connections/member/AddFromFile) | 添加从指定文件的连接。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Connections/member/Item) | 此方法返回一个连接项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Connections/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Connections/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Connections/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Connections/member/Parent) | 返回指定对象的父对象。只读。 |