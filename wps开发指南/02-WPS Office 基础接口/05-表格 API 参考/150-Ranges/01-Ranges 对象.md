# Ranges 对象

由 **Range** 对象组成的集合。


## 示例


```JavaScript
/*本示例显示基于活动工作簿上第一个连接的第一个范围的宽度。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1)
    alert(connection.Ranges.Item(1).Width)
}
```


```JavaScript
/*本示例清除基于活动工作表上第一张查询表的连接的第一个范围。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    connection.Ranges.Item(1).Clear()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Ranges/member/Item) | 返回一个 **Range** 对象，该对象代表工作簿中的项的区域。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Ranges/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Ranges/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Ranges/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Ranges/member/Parent) | 返回指定对象的父对象。只读。 |