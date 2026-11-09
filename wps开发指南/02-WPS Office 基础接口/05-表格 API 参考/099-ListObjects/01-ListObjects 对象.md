# ListObjects 对象

工作表上所有 **ListObject** 对象的集合。每个 **ListObject** 对象都代表工作表中的一个表格。

## 说明


使用 Worksheet 对象的 **ListObjects** 属性可返回 **ListObjects** 集合。


## 示例


```JavaScript
/*本示例创建一个新 ListObjects 集合，该集合代表第一张工作表中所有的表格，并显示表格数量。*/
function test() {
    let listObjects = Application.Worksheets.Item(1).ListObjects
    alert(listObjects.Count)
}
```


```JavaScript
/*本示例显示活动工作表上第二个列表的 SourceType 属性是否为 xlSrcRange。*/
function test() {
    let listObj = Application.ActiveSheet.ListObjects.Item(2)
    alert(listObj.SourceType == xlSrcRange)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObjects/member/Add) | 创建新的列表对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObjects/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObjects/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObjects/member/Count) | 返回一个 **Integer** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObjects/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObjects/member/Parent) | 返回指定对象的父对象。只读。 |