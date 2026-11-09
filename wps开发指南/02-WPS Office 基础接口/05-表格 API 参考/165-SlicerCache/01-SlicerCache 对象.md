# SlicerCache 对象

表示切片器的当前筛选状态，以及有关切片器连接到哪个 **[PivotCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/obj)** 或 **[WorkbookConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorkbookConnection/obj)** 的信息。

## 说明


使用 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象的 **[SlicerCaches](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SlicerCaches)** 属性可访问工作簿中 **SlicerCache** 对象的集合。

每个切片器都有一个基 **SlicerCache** 对象，该对象表示在切片器中显示的项目，以及与对应的项目标题一起显示的平铺的当前用户界面状态。用户在 ET 中看到的每个切片器控件由带有关联的 **SlicerCache** 对象的 **[Slicer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/obj)** 对象表示。


## 示例


```JavaScript
/*本示例在第一张工作簿上添加新的切片器缓存，并在工作表 Sheet2 中创建切片器。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").Range("I1").PivotTable
    let sliCache = Workbooks.Item(1).SlicerCaches.Add2(pvtTable, "name", "Slicer_name")
    sliCache.Slicers.Add(Worksheets.Item("Sheet2"), null, "Name")
}
```


```JavaScript
/*本示例显示活动工作簿上所有切片器缓存的名称。*/
function test() {
    for (let i = 1; i <= ActiveWorkbook.SlicerCaches.Count; i++) {
        alert(ActiveWorkbook.SlicerCaches(i).Name)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearAllFilters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/ClearAllFilters) | 清除切片器或时间线的筛选器，具体取决于切片器缓存类型。 |
| [ClearDateFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/ClearDateFilter) | 清除时间线的筛选器 (日期筛选器) 。 |
| [ClearManualFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/ClearManualFilter) | 清除与指定的切片器缓存关联的所有切片器的筛选。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/Delete) | 删除指定的切片器缓存及其关联的切片器。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [CrossFilterType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/CrossFilterType) | 返回或设置切片器是否与共享同一切片器缓存的其他切片器一起参与交叉筛选，以及如何显示交叉筛选。可读/写 |
| [FilterCleared](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/FilterCleared) | 返回是否清除切片器或时间线筛选器状态。 **Boolean** 类型，只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/Index) | 返回 **[SlicerCaches](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCaches/obj)** 集合中指定 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 对象的索引。只读 |
| [List](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/List) | 如果切片器缓存适用于表上的切片器，则为 **True** ；否则为 **False** 。 只读 **Boolean** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/Name) | 返回或设置切片器缓存的名称。 |
| [OLAP](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/OLAP) | 返回与指定的切片器缓存关联的切片器是否基于 OLAP 数据源。只读 |
| [PivotTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/PivotTables) | 返回一个 **[SlicerPivotTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerPivotTables/obj)** 集合，其中包含有关切片器缓存当前正在筛选的数据透视表的信息。只读 |
| [ShowAllItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/ShowAllItems) | 返回或设置连接到指定切片器缓存的切片器是否显示已从对应的透视缓存中删除的项。可读/写。 |
| [SlicerCacheType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/SlicerCacheType) | 返回切片器缓存的类型：切片器 (xlSlicer) 或时间线 (xlTimeline) 。只读。 |
| [SlicerItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/SlicerItems) | 返回一个 **[SlicerItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItems/obj)** 集合，该集合包含切片器缓存中所有项的集合。只读 |
| [Slicers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/Slicers) | 返回一个 **[Slicers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicers/obj)** 集合，其中包含与指定的 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 关联的 **[Slicer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/obj)** 对象的集合。只读 |
| [SortItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/SortItems) | 返回或设置是否对切片器中的项排序。可读/写 |
| [SortUsingCustomLists](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/SortUsingCustomLists) | 返回或设置指定切片器缓存中的项是否将按自定义列表排序。可读/写 |
| [SourceName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/SourceName) | 返回切片器所连接到的数据源的名称。只读 |
| [SourceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/SourceType) | 返回切片器所连接到的数据源的类型。只读 |
| [VisibleSlicerItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/VisibleSlicerItems) | 返回一个 **[SlicerItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItems/obj)** 集合，该集合包含指定的切片器缓存中所有可见项的集合。只读。 |