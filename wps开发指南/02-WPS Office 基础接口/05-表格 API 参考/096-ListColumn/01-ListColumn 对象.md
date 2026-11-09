# ListColumn 对象

代表表格中的一列。

## 说明


 **ListColumn** 对象是 **ListColumns** 集合的成员。 **ListColumns** 集合包含表格中的所有列（ **ListObject** 对象）。

使用 **ListObject** 对象的 ListColumns 属性可返回一个 **ListColumns** 集合。


## 示例


```JavaScript
/*下例给活动工作簿的第一个工作表的默认 ListObject 对象添加新 ListColumn 对象。由于未指定位置，因此在最右边添加一个新列，并显示列名。*/
function test() {
    let worksheet = Application.ActiveWorkbook.Worksheets.Item("Sheet1")
    let listColumn = worksheet.ListObjects.Item(1).ListColumns.Add()
    alert(listColumn.Name)
}
```


```JavaScript
/*本示例将活动工作表的第一个 ListObject 对象的第二列删除。*/
function test() {
    let listObj = Application.ActiveSheet.ListObjects.Item(1)
    listObj.ListColumns.Item(2).Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/member/Delete) | 在列表中删除数据列。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [DataBodyRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/member/DataBodyRange) | 返回一个 **Range** 对象，该对象为列的数据部分的大小。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/member/Index) | 返回一个 **Long** 值，它代表 **ListColumn** 对象在 **ListColumns** 集合中的索引号。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/member/Name) | 返回或设置一个 **String** 值，它代表列表列的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/member/Parent) | 返回指定对象的父对象。只读。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/member/Range) | 返回一个 **Range** 对象，它代表在以上列表中的指定列表对象所应用的区域。 |
| [Total](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/member/Total) | 返回 **ListColumn** 对象的总计行。只读。 |
| [TotalsCalculation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/member/TotalsCalculation) | 基于 **XlTotalsCalculation** 枚举的值，确定列表列的“总计”行中的计算类型。可读写。 |
| [XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListColumn/member/XPath) | 返回一个 **XPath** 对象，它代表映射到指定 **Range** 对象的元素的 XPath。该区域的上下文确定操作是否成功，或返回空对象。只读。 |