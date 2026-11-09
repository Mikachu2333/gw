# PivotItemList 对象

指定的数据透视表中所有 **PivotItem** 对象的集合。

## 说明


每个 **PivotItem** 代表数据透视表字段中的一个项。

使用 **PivotCell** 对象的 **RowItems** 或 **ColumnItems** 属性可返回一个 **PivotItemList** 集合。

一旦返回了 **PivotItemList** 集合，您就可以使用 **Item** 方法来标识某个特定的 **PivotItem** 列表。


## 示例


```JavaScript
/*本示例显示包含单元格 L10 的数据透视项行轴上第一个数据项的标签文本。*/
function test() {
    // Identify contents associated with PivotItemList.
    alert("Contents associated with cell L10: " + Application.Range("L10").PivotCell.RowItems.Item(1).Caption)
}
```


```JavaScript
/*本示例将工作表 Sheet1 上包含单元格 L4 的数据透视项行轴上第一个数据项的详细信息设置为不可见。*/
function test() {
    let pvtItem = Application.Worksheets.Item("Sheet1").Range("L4").PivotCell.RowItems.Item(1)
    pvtItem.ShowDetail = false
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItemList/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItemList/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItemList/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItemList/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItemList/member/Parent) | 返回指定对象的父对象。只读。 |