# PivotFields 对象

指定的数据透视表中所有 **PivotField** 对象的集合。

## 说明


下列存取器方法返回数据透视表字段的子集，在某些情况下，使用这些属性会更为方便：

* **ColumnFields** 属性
* **DataFields** 属性
* **HiddenFields** 属性
* **PageFields** 属性
* **RowFields** 属性
* **VisibleFields** 属性

使用 **PivotTable** 对象的 **PivotFields** 方法可返回 **PivotFields** 集合。


## 示例


```JavaScript
/*本示例显示 Sheet1 上第一张数据透视表中的字段名称。*/
function test() {
    let pTab = Worksheets.Item("Sheet1").PivotTables(1)
    for (let i = 1; i <= pTab.PivotFields().Count; i++) {
        alert(pTab.PivotFields(i).Name)
    }
}
```
使用 **PivotFields** (*index*)（其中 *index* 是字段名称或索引号）可返回一个 **PivotField** 对象。



```JavaScript
/*本示例使 Sheet1 上第一张数据透视表中的字段“name”成为行字段。*/
function test() {
    Worksheets.Item("sheet1").PivotTables(1).PivotFields("name").Orientation = xlRowField
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFields/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFields/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFields/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFields/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFields/member/Parent) | 返回指定对象的父对象。只读。 |