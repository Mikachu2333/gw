# CalculatedFields 对象

由 **PivotField** 对象组成的集合，这些对象代表指定数据透视表中的所有计算字段。


## 示例


```JavaScript
/*此示例为活动工作表中数据透视表添加计算字段。*/
function test() {
    ActiveSheet.Range("I1").PivotTable.CalculatedFields().Add("new date", "= date + 10")
}
```


```JavaScript
/*此示例显示第一张工作表中第一张数据透视表的第一个计算字段的标签文本。*/
function test() {
    let pvtField = Application.Worksheets.Item(1).PivotTables(1).CalculatedFields().Item(1)
    alert(pvtField.Caption)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CalculatedFields/member/Add) | 创建新的计算字段。返回 **PivotField** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CalculatedFields/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CalculatedFields/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 Application 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CalculatedFields/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CalculatedFields/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CalculatedFields/member/Parent) | 返回指定对象的父对象。只读。 |