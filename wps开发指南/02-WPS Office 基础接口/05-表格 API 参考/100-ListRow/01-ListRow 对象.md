# ListRow 对象

代表表格中的一行。 **ListRow** 对象是 **ListRows** 集合的成员。

## 说明


ListRows 集合包含列表对象中的所有行。 **ListRows** 

使用 **ListObject** 对象的 **ListRows** 属性可返回一个 **ListRows** 集合。


## 示例


```JavaScript
/*下例给活动工作簿的第一张工作表的默认 ListObject 对象添加新 ListRow 对象。由于未指定位置，因此在表格结束处添加一个新行。*/
function test() {
    let worksheet = Application.ActiveWorkbook.Worksheets.Item("Sheet1")
    let listRow = worksheet.ListObjects.Item(1).ListRows.Add()
}
```


```JavaScript
/*本示例将第一张工作表的第一个 ListObject 对象的第三行删除。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    listObj.ListRows.Item(3).Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListRow/member/Delete) | 删除列表行的单元格并向上移动被删除行下面的任何剩余单元格。即使列表被链接到 SharePoint 网站，您也可以删除该列表中的行。但是，在同步更改之前，SharePoint 网站上的列表将不会进行更新。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListRow/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListRow/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListRow/member/Index) | 返回一个 **Long** 值，它代表 **ListRow** 对象在 **ListRows** 集合中的索引号。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListRow/member/Parent) | 返回指定对象的父对象。只读。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListRow/member/Range) | 返回一个 **Range** 对象，它代表在以上列表中的指定列表对象所应用的区域。 |