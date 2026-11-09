# PivotItems 对象

数据透视表字段中所有 **PivotItem** 对象的集合。

## 说明


这些项目是某个字段类型中的各个数据项。

使用 **PivotItems** 方法可返回 **PivotItems** 集合。


## 示例


```JavaScript
/*本示例为 Sheet1 上第一张数据透视表创建那些字段中包含的字段名和项目的枚举列表。*/
function test() {
    Worksheets.Item("Sheet2").Activate()
    let pTab = Worksheets.Item("Sheet1").PivotTables(1)
    let c = 1
    for (let i = 1; i <= pTab.PivotFields().Count; i++) {
        let r = 1
        Cells.Item(r, c).Value2 = pTab.PivotFields(i).Name
        r++
        for (let x = 1; x <= pTab.PivotFields(i).PivotItems().Count; x++) {
            Cells.Item(r, c).Value2 = pTab.PivotFields(i).PivotItems(x).Name
            r++
        }
        c++
    }
}
```
使用 **PivotItems** (*index*)（其中 *index* 是项目索引号或名称）可返回一个 **PivotItem** 对象。



```JavaScript
/*此示例隐藏工作表 Sheet1 中第一张数据透视表的字段“id”的数据项“4”。*/
function test() {
    let pvtItems = Worksheets.Item("sheet1").PivotTables(1).PivotFields("id").PivotItems()
    pvtItems.Item("4").Visible = false
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItems/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItems/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItems/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItems/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItems/member/Parent) | 返回指定对象的父对象。只读。 |