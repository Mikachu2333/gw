# QueryTables 对象

 **QueryTable** 对象的集合。

## 说明


每一个 **QueryTable** 对象都代表一个利用从外部数据源返回的数据生成的工作表表格。


## 示例


```JavaScript
/*此示例显示第一张工作表上第一张查询表的名称并删除该查询表。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    alert(qyTable.Name)
    qyTable.Delete()
}
```


```JavaScript
/*此示例在第一张工作表上新增查询表，并设置其数据连接文件。*/
function test() {
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\test1.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let qyTable = Application.Worksheets.Item(1).QueryTables.Add(connection, Range("I1"), "SELECT * FROM `student`")
    qyTable.SourceConnectionFile = "D:\\我的数据源\\test1.accdb student.odc"
    qyTable.Refresh()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTables/member/Add) | 新建一个查询表。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTables/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTables/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTables/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTables/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTables/member/Parent) | 返回指定对象的父对象。只读。 |