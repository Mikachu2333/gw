# PivotCaches 对象

代表工作簿中数据透视表的内存缓存的集合。

## 说明


每一个内存缓存都由一个 **PivotCache** 对象代表。

使用 **PivotCaches** 方法可返回 **PivotCaches** 集合。


## 示例


```JavaScript
/*本示例将活动工作簿上所有数据透视缓存设置为自动进行更新。*/
function test() {
    let pvtCaches = ActiveWorkbook.PivotCaches()
    for (let i = 1; i <= pvtCaches.Count; i++) {
        pvtCaches.Item(i).RefreshOnFileOpen = true
    }
}
```


```JavaScript
/*本示例在第一张工作簿上创建新的 PivotCache ，并以该 PivotCache 创建新的数据透视表。*/
function test() {
    let pvtCache = Workbooks.Item(1).PivotCaches().Create(xlDatabase, ActiveSheet.UsedRange, xlPivotTableVersion15)
    pvtCache.CreatePivotTable(ActiveSheet.Range("I1"), "pivot1")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Create](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCaches/member/Create) | 创建新的 PivotCache。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCaches/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCaches/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCaches/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCaches/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCaches/member/Parent) | 返回指定对象的父对象。只读。 |