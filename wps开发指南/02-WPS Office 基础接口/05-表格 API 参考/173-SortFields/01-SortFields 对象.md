# SortFields 对象

 **[SortFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortFields/obj)** 集合是 **[SortField](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortField/obj)** 对象的集合。开发人员可以使用该集合存储工作簿、列表和自动筛选的排序状态。


## 示例


```JavaScript
/*本示例为活动工作表创建两个新的排序字段。*/
function test() {
    Application.ActiveSheet.Sort.SortFields.Add(Range("A1"), null, xlDescending)
    Application.ActiveSheet.Sort.SortFields.Add(Range("B1"), null, xlDescending)
}
```


```JavaScript
/*本示例清除第一张工作表上所有的 SortField 对象，并创建新的排序字段。*/
function test() {
    Application.Sheets.Item(1).Sort.SortFields.Clear()
    Application.Sheets.Item(1).Sort.SortFields.Add(Range("A1:A11"), xlSortOnValues, xlAscending)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortFields/member/Add) | 创建新的排序字段，并返回一个 **SortFields** 对象。 |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortFields/member/Clear) | 清除所有 **SortField** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortFields/member/Item) | 返回一个 **SortField** 对象，该对象代表可在工作簿中排序的项的集合。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortFields/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortFields/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortFields/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SortFields/member/Parent) | 返回指定对象的父对象。只读。 |