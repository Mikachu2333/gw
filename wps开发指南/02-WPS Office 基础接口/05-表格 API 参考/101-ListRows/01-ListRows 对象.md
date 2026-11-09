# ListRows 对象

指定的 **ListObject** 对象中 **ListRow** 对象的集合。

## 说明


每一个 **ListRow** 对象都代表表格中的一行。

使用 **ListObject** 对象的 **ListRows** 属性可返回 **ListRows** 集合。


## 示例


```JavaScript
/*下例给第一张工作表的默认 ListObject 对象添加新行。由于未指定位置，因此在表格结束处添加一个新行。*/
function test() {
    let row = Application.Worksheets.Item(1).ListObjects.Item(1).ListRows.Add()
}
```


```JavaScript
/*本示例显示活动工作表的第一个 ListObject 对象中行的数量。*/
function test() {
    let listObj = Application.ActiveSheet.ListObjects.Item(1)
    alert(listObj.ListRows.Count)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListRows/member/Add) | 向指定的 **ListObject** 所代表的表格中添加新行。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListRows/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListRows/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListRows/member/Count) | 返回一个 **Integer** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListRows/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListRows/member/Parent) | 返回指定对象的父对象。只读。 |