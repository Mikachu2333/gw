# ListColumns 对象

指定的 **ListObject** 对象中所有 **ListColumn** 对象的集合。

## 说明


每个 **ListColumn** 对象都代表表格中的一列。

该列的名称会自动生成。在添加完该列后可更改其名称。

使用 ListObject 对象的 **ListColumns** 属性可返回 **ListColumns** 集合。


## 示例


```JavaScript
/*下例给工作簿的第一张工作表的默认 ListObject 对象添加一个新列。由于未指定位置，因此在最右边添加一个新列。*/
function test() {
    let newColumn = Application.Worksheets.Item(1).ListObjects.Item(1).ListColumns.Add()
}
```


```JavaScript
/*本示例将活动工作表的第一个 ListObject 对象的第四列删除。*/
function test() {
    let listObj = Application.ActiveSheet.ListObjects.Item(1)
    listObj.ListColumns.Item(4).Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumns/member/Add) | 向列表对象中添加新列。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumns/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumns/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumns/member/Count) | 返回一个 **Integer** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumns/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumns/member/Parent) | 返回指定对象的父对象。只读。 |