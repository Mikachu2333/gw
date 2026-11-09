# SlicerItem 对象

表示切片器中的一个项目。

## 说明


若要访问表示切片器中当前选中的按钮的 **SlicerItem** 对象，请使用 **[Slicer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/obj)** 对象的 **[ActiveItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/ActiveItem)** 属性。如果切片器筛选数据透视表，那么若要访问表示该切片器中所有项目的 **[SlicerItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItems/obj)** 集合，请使用与该 **Slicer** 对象关联的 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 对象的 **[SlicerItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/SlicerItems)** 属性。如果切片器筛选 OLAP 层次结构级别，那么若要访问表示该切片器中项目的 **SlicerItems** 集合，请使用表示该层次结构级别的 **[SlicerCacheLevel](#TODO)** 对象的 **[SlicerItems](#TODO)** 属性。


## 示例


```JavaScript
/*本示例选中第一张工作簿上名为“切片器_id”的切片器缓存中所有切片器项。*/
function test() {
    let sliItems = Workbooks.Item(1).SlicerCaches("切片器_id").SlicerItems
    for (let i = 1; i <= sliItems.Count; i++) {
        sliItems.Item(i).Selected = true
    }
}
```


```JavaScript
/*本示例显示第一张工作簿上名为“切片器_name”的切片器缓存中第二个切片器项的源名称。*/
function test() {
    let sliItem = Workbooks.Item(1).SlicerCaches("切片器_name").SlicerItems(2)
    alert(sliItem.SourceName)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/member/Caption) | 返回切片器项的标签文本。只读。 |
| [HasData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/member/HasData) | 返回切片器项是否包含与当前手动筛选状态相符的数据。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/member/Name) | 返回切片器项的名称。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/member/Parent) | 返回切片器项的父 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 对象。只读。 |
| [Selected](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/member/Selected) | 返回或设置是否选择了切片器项。连接到非 OLAP 数据源的切片器，可读/写。连接到 OLAP 数据源的切片器，只读。 |
| [SourceName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/member/SourceName) | 返回切片器项的源名称。只读。 |
| [SourceNameStandard](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/member/SourceNameStandard) | 返回以标准英语（美国）格式设置表示的切片器项的源名称。只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/member/Value) | 返回切片器项的值。只读。 |