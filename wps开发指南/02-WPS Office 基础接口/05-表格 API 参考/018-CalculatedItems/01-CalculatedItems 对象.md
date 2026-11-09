# CalculatedItems 对象

由 **PivotItem** 对象组成的集合，这些对象代表指定数据透视表中的所有计算项。


## 示例


```JavaScript
/*本示例为工作表 Sheet1 上数据透视表的第四个字段添加计算项。*/
function test() {
    let pvtField = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields(4)
    pvtField.CalculatedItems().Add("公式1", "='21'+1")
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张数据透视表的字段“name”的“公式2”计算项的位置。*/
function test() {
    let pvtItem = Worksheets.Item("Sheet1").PivotTables(1).PivotFields("name").CalculatedItems().Item("公式2")
    alert(pvtItem.Position)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CalculatedItems/member/Add) | 新建计算项。返回 **PivotItem** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CalculatedItems/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CalculatedItems/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CalculatedItems/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CalculatedItems/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CalculatedItems/member/Parent) | 返回指定对象的父对象。只读。 |