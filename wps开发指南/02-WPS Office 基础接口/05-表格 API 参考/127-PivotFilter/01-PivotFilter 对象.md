# PivotFilter 对象

PivotFilter 应用于 **PivotField** 对象。

## 说明


开发人员可以选择命名筛选器以供引用，因为索引不可靠。 **DataField** 属性指定要基于值筛选器的 PivotField。


## 示例


```JavaScript
/*本示例显示第一张工作表中数据透视表的字段“id”的第一个筛选器的参数。*/
function test() {
    let pvtField = Worksheets.Item(1).Range("I1").PivotTable.PivotFields("id")
    alert(pvtField.PivotFilters.Item(1).Value1)
}
```


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的字段“score”的第二个筛选器是否是活动的。*/
function test() {
    alert(ActiveSheet.PivotTables(1).PivotFields("score").PivotFilters.Item(2).Active)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Active](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilter/member/Active) | 返回指定透视筛选是否是活动的。只读 **Boolean** 。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilter/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilter/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [DataField](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilter/member/DataField) | 此属性仅适用于非 OLAP 数据透视表，可为值筛选提供作为筛选依据的 **值** 字段（值区域中的透视字段）。只读 **PivotField** 。 |
| [Description](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilter/member/Description) | 为 **PivotFilter** 对象提供可选说明。只读 **String** 。 |
| [FilterType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilter/member/FilterType) | 指定要应用的筛选器类型。只读 **xlPivotFilterType** 类型。 |
| [IsMemberPropertyFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilter/member/IsMemberPropertyFilter) | 指定标签筛选器是基于字段的成员属性的 PivotItem 标题还是基于透视字段本身的 PivotItem 标题。只读 **Boolean** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilter/member/Name) | 此属性提供选项可指定引用筛选。索引值可能发生更改，因此不能依赖于这些值获得准确的引用。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilter/member/Parent) | 返回指定 **PivotFilter** 对象的父对象。只读。 |
| [PivotField](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilter/member/PivotField) | 指定应用筛选器的透视字段。只读。 |
| [Value1](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilter/member/Value1) | 此属性是由用户提供的用于定义透视字段筛选器的参数。 **Variant** 类型，只读。 |
| [Value2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilter/member/Value2) | 此属性是由用户提供的用于定义透视字段筛选器的参数。 **Variant** 类型，只读。 |
| [WholeDayFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilter/member/WholeDayFilter) | 设置或获取日期筛选器的筛选语义。 可读写 **Boolean** 类型。 |