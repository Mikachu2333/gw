# PivotFilters 对象

 **PivotFilters** 对象是 **PivotFilter** 对象的集合。

## 说明


 **PivotFilters** 集合包含用于添加新筛选器、计算集合中现有筛选器个数以及引用特定 **PivotFilter** 对象的属性和方法。


## 示例


```JavaScript
/*本示例为活动工作表的数据透视表的的字段“date”添加筛选器。*/
function test() {
    ActiveSheet.Range("I1").PivotTable.PivotFields("date").PivotFilters.Add2(xlDateThisWeek)
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中数据透视表字段“name”的第一个筛选器中作为筛选依据的值字段。*/
function test() {
    let pvtFilter = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields("name").PivotFilters.Item(1)
    alert(pvtFilter.DataField.Value)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilters/member/Add2) | 将新筛选添加到 **PivotFilters** 集合。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilters/member/Item) | 根据 **PivotFilters** 集合对象特定元素在集合中的位置返回该特定元素。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilters/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilters/member/Count) | 返回 **PivotFilters** 集合中的项数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilters/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotFilters/member/Parent) | 返回指定 **PivotFilters** 对象的父对象。只读。 |