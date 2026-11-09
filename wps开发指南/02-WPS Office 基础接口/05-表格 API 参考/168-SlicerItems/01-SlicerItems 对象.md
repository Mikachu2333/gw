# SlicerItems 对象

表示包含在 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 或 **[SlicerCacheLevel](#TODO)** 对象中的 **[SlicerItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/obj)** 对象的集合。

## 说明


如果切片器基于工作簿中的数据或非 OLAP 外部数据，那么若要访问表示该切片器中项目的 **SlicerItems** 集合，请使用与该切片器关联的 **SlicerCache** 对象的 **[SlicerItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/SlicerItems)** 属性。

如果切片器基于 OLAP 数据连接，那么若要访问表示该切片器中项目的 **SlicerItems** 集合，请使用代表层次结构级别的 **SlicerCacheLevel** 对象的 **[SlicerItems](#TODO)** 属性。


## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表第一个切片器的缓存中切片器项的数量。*/
function test() {
    let sliItems = ActiveSheet.Range("I1").PivotTable.Slicers.Item(1).SlicerCache.SlicerItems
    alert(`切片器项的数量：${sliItems.Count}`)
}
```


```JavaScript
/*本示例将活动工作簿上名为“切片器_score”的切片器缓存中切片器项的名称逐个赋值到单元格中。*/
function test() {
    let sliItems = ActiveWorkbook.SlicerCaches("切片器_score").SlicerItems
    for (let i = 1; i <= sliItems.Count; i++) {
        Cells.Item(11, i).Value2 = sliItems.Item(i).Name
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItems/member/Item) | 从集合中返回一个 **[SlicerItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/obj)** 对象。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItems/member/Count) | 返回集合中对象的数量。只读。 |