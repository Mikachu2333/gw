# SlicerPivotTables 对象

表示与指定的 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 对象关联的数据透视表集合相关的信息。

## 说明


 **SlicerPivotTables** 集合包含有关切片器缓存当前正在筛选的数据透视表的信息。它提供的属性可用来确定与该切片器关联的数据透视表的数量，可用来检索表示正被筛选的数据透视表的 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象。它还提供了在 **SlicerPivotTables** 集合中添加和删除数据透视表的方法。如果与指定的 **SlicerCache** 关联的切片器未连接到任何数据透视表，那么 **SlicerPivotTables** 集合将为空。

使用 **SlicerCache** 对象的 **[PivotTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/PivotTables)** 属性可返回与 **SlicerCache** 关联的 **SlicerPivotTables** 集合，而 SlicerCache 又可能与一个或多个切片器关联。


## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表的第一个切片器关联的缓存中第二个数据透视表的值。*/
function test() {
    let sliCache = ActiveSheet.Range("I1").PivotTable.Slicers.Item(1).SlicerCache
    alert(sliCache.PivotTables.Item(2).Value)
}
```


```JavaScript
/*本示例显示活动工作簿上名为“切片器_name”的切片器缓存关联的数据透视表的数量。*/
function test() {
    let pvtTables = ActiveWorkbook.SlicerCaches("切片器_name").PivotTables
    alert(`数据透视表的数量：${pvtTables.Count}`)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddPivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerPivotTables/member/AddPivotTable) | 将对数据透视表的引用添加到 **[SlicerPivotTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerPivotTables/obj)** 集合。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerPivotTables/member/Item) | 从集合中返回一个 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象。 |
| [RemovePivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerPivotTables/member/RemovePivotTable) | 从 **[SlicerPivotTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerPivotTables/obj)** 集合中删除对数据透视表的引用。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerPivotTables/member/Count) | 返回集合中对象的数目。 |