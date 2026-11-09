# ListObject 对象

代表工作表中的表格。

## 说明


 **ListObject** 对象是 **ListObjects** 集合的成员。 **ListObjects** 集合包含工作表上所有的列表对象。

使用 **Worksheet** 对象的 ListObjects 属性可返回一个 **ListObjects** 集合。


## 示例


```JavaScript
/*本示例给活动工作簿的第一张工作表的默认 ListObject 对象添加新的 ListRow 对象。*/
function test() {
    let sheet = Application.ActiveWorkbook.Worksheets.Item(1)
    sheet.ListObjects.Item(1).ListRows.Add()
}
```


```JavaScript
/*本示例为工作表 Sheet1 上第一张列表添加新列，并设置该列表的表样式。*/
function test() {
    let listObj = Application.Worksheets.Item("Sheet1").ListObjects.Item(1)
    listObj.ListColumns.Add()
    listObj.TableStyle = "TableStylePreset5_Accent1"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/Delete) | 删除 **ListObject** 对象并从工作表中清除单元格数据。 |
| [Publish](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/Publish) | 将 **ListObject** 对象发布到运行 SharePoint Foundation 的服务器。 |
| [Refresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/Refresh) | 从运行 SharePoint Foundation 的服务器上检索列表的当前数据和架构。此方法只能被用于链接到 SharePoint 网站的列表。如果 SharePoint 网站不可用，调用此方法将返回错误。 |
| [Resize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/Resize) | **Resize** 方法允许 **ListObject** 对象在新区域内调整大小。不插入或移动单元格。 |
| [Unlist](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/Unlist) | 从 **ListObject** 对象删除列表功能。使用此方法后，组成列表的单元格区域将变为常规的数据区域。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Active](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/Active) | 返回一个 **Boolean** 类型的值，该值表示工作表中的 **ListObject** 对象是否是活动的，即活动的单元格是否在 **ListObject** 对象的区域之内。只读 **Boolean** 类型。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AutoFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/AutoFilter) | 使用“自动筛选”筛选一个列表。只读。 |
| [Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/Comment) | 返回或设置与列表对象关联的批注。可读/写 **String** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [DataBodyRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/DataBodyRange) | 返回 **Range** 对象，它代表表中值的范围，但不包括标题行。只读。 |
| [DisplayName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/DisplayName) | 返回或设置指定的 **ListObject** 对象的显示名称。可读/写 **String** 类型。 |
| [DisplayRightToLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/DisplayRightToLeft) | 如果指定的 **ListObject** 从右到左而不是从左到右显示，则此属性为 **True** 。如果对象从左到右显示，则此属性为 **False** 。 **Boolean** 类型，只读。 |
| [HeaderRowRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/HeaderRowRange) | 返回一个 **Range** 对象，该对象表示列表（列表：包含相关数据的一系列行，或使用 “创建列表” 命令作为数据表指定给函数的一系列行。）标题行的区域。 **Range** 类型，只读。 |
| [InsertRowRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/InsertRowRange) | 返回一个 **Range** 对象，该对象代表指定的 **ListObject** 对象的“插入”行（如果有）。 **Range** 类型，只读。 |
| [ListColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/ListColumns) | 返回一个 **ListColumns** 集合，该集合代表 **ListObject** 对象中的所有列。只读。 |
| [ListRows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/ListRows) | 返回一个 **ListRows** 对象，该对象代表 **ListObject** 对象中的所有数据行。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/Name) | 返回或设置一个 **String** 值，它代表 **ListObject** 对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/Parent) | 返回指定对象的父对象。只读。 |
| [QueryTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/QueryTable) | 返回 **QueryTable** 对象，它为 **ListObject** 对象提供了一个列表服务器的链接。只读。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/Range) | 返回一个 **Range** 对象，它代表在以上列表中的指定列表对象所应用的区域。 |
| [ShowAutoFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/ShowAutoFilter) | 返回一个 **Boolean** 类型的数值，该数值指示是否显示“自动筛选”。 **Boolean** 类型，可读写。 |
| [ShowAutoFilterDropDown](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/ShowAutoFilterDropDown) | 显示 **ListObject** 对象的“自动筛选”下拉列表时为 **True** 。 可读写 ， **Boolean** 类型。 |
| [ShowHeaders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/ShowHeaders) | 返回或设置是否显示指定的 **ListObject** 对象的标题信息。可读/写 **Boolean** 类型。 |
| [ShowTableStyleColumnStripes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/ShowTableStyleColumnStripes) | 返回或设置指定的 **ListObject** 对象是否使用“列条纹”表样式。可读/写 **Boolean** 类型。 |
| [ShowTableStyleFirstColumn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/ShowTableStyleFirstColumn) | 返回或设置是否显示指定的 **ListObject** 对象的第一列。可读/写 **Boolean** 类型。 |
| [ShowTableStyleLastColumn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/ShowTableStyleLastColumn) | 返回或设置是否显示指定的 **ListObject** 对象的最后一列。可读/写 **Boolean** 类型。 |
| [ShowTableStyleRowStripes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/ShowTableStyleRowStripes) | 返回或设置指定的 **ListObject** 对象是否使用“行条纹”表样式。可读/写 **Boolean** 类型。 |
| [ShowTotals](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/ShowTotals) | 获取或设置一个 **Boolean** 类型的数值以指示“总计”行是否可见。 **Boolean** 类型，可读写。 |
| [Sort](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/Sort) | 获取或设置 **ListObject** 集合的排序列和排序次序。 |
| [SourceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/SourceType) | 返回一个 **XlListObjectSourceType** 值，它代表列表的当前源。 |
| [TableStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/TableStyle) | 获取或设置指定的 **ListObject** 对象的表样式。可读/写 **Variant** 类型。 |
| [TotalsRowRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/TotalsRowRange) | 返回一个 **Range** ，代表指定的 **ListObject** 对象的“汇总”行（如果有）。只读。 |
| [XmlMap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/member/XmlMap) | 返回一个 **XmlMap** 对象，该对象表示用于指定表格的架构映射。只读。 |