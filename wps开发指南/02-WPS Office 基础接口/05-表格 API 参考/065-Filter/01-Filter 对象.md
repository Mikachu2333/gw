# Filter 对象

代表单个列的筛选。

## 说明


 **Filter** 对象是 [ **Filters** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filters/obj) 集合的成员。 **Filters** 集合包含自动筛选区域中的所有筛选。

使用 **[Filters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filters/obj)** ( *index*)（其中 *index* 是筛选的标题或索引号）可返回单个 **Filter** 对象。


## 示例


```JavaScript
/*本示例将一个变量设置为第一张工作表上的筛选区域中第一列的筛选的 On 属性的值。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    if (worksheet.AutoFilterMode) {
        filterIsOn = worksheet.AutoFilter.Filters.Item(1).On
    }
}
```


```JavaScript
/*本示例对第二列应用自动筛选器，并显示第一张工作表上筛选区域中第二列的第一个筛选值。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    worksheet.Cells.AutoFilter(2, "Crucial", xlOr, "Important")
    alert(worksheet.AutoFilter.Filters.Item(2).Criteria1)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filter/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filter/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filter/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Criteria1](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filter/member/Criteria1) | 返回筛选区域内指定列上的第一个筛选值。 **Variant** 类型，只读。 |
| [Criteria2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filter/member/Criteria2) | 返回已筛选区域中指定列的第二个筛选值。 **Variant** 类型，只读。 |
| [On](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filter/member/On) | 如果打开指定的筛选，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [Operator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filter/member/Operator) | 返回一个 **[XlAutoFilterOperator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlAutoFilterOperator)** 值，它代表与指定筛选所应用的两个条件相关的操作符。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Filter/member/Parent) | 返回指定对象的父对象。只读。 |