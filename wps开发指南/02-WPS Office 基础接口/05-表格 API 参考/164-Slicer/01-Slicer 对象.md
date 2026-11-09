# Slicer 对象

代表工作簿中的一个切片器。

## 说明


每个 **Slicer** 对象都代表工作簿中的一个切片器。切片器用于筛选数据透视表或 OLAP 数据源中的数据。

使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicers/member/Add)** 方法可将 **Slicer** 对象添加到 **[Slicers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicers/obj)** 集合。若要访问表示切片器中当前选中的按钮的 **SlicerItem** 对象，请使用 **Slicer** 对象的 **[ActiveItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/ActiveItem)** 属性。


## 示例


```JavaScript
/*本示例将活动工作簿上第一个切片器缓存中第一个切片器的标题更改为“My Slicer”。*/
function test() {
    ActiveWorkbook.SlicerCaches(1).Slicers.Item(1).Caption = "My Slicer"
}
```


```JavaScript
/*本示例将活动工作簿上第一个切片器缓存中第一个切片器的宽度设置为 200 磅。*/
function test() {
    ActiveWorkbook.SlicerCaches(1).Slicers.Item(1).Width = 200
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Delete) | 删除切片器并将其从关联的 **[Slicers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicers/obj)** 集合中删除。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActiveItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/ActiveItem) | 返回一个 **[SlicerItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItem/obj)** 对象，该对象代表指定切片器的当前获得焦点的切片器按钮。只读。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Caption) | 返回或设置指定切片器的标题。可读/写。 |
| [ColumnWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/ColumnWidth) | 获取或设置切片器控件中每一列的宽度（以磅为单位）。可读/写。 |
| [DisableMoveResizeUI](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/DisableMoveResizeUI) | 返回或设置是否可以使用用户界面来移动指定的切片器或者调整其大小。可读/写。 |
| [DisplayHeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/DisplayHeader) | 返回或设置显示切片器 **[Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Caption)** 的页眉是否可见。可读/写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Height) | 返回或设置指定切片器的高度（单位磅）。可读/写。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Left) | 返回或设置指定切片器在工作表上相对于单元格 A1 左上角的水平位置（单位为磅）。可读/写。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Locked) | 返回或设置在包含指定切片器的工作表受到保护时，是否可以修改该切片器。可读/写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Name) | 返回或设置指定切片器的名称。可读/写。 |
| [NumberOfColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/NumberOfColumns) | 返回或设置指定切片器内的列数。可读/写。 |
| [RowHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/RowHeight) | 返回或设置指定切片器中每一行的高度（单位为磅）。可读/写。 |
| [Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Shape) | 返回与指定的切片器关联的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。只读。 |
| [SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/SlicerCache) | 返回与切片器关联的 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 对象。只读。 |
| [SlicerCacheType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/SlicerCacheType) | 返回切片器缓存的类型：切片器 (xlSlicer) 或时间线 (xlTimeline) 。只读。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Style) | 返回或设置当前应用于指定切片器的样式。可读/写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Top) | 返回或设置指定切片器在工作表上相对于单元格 A1 左上角的垂直位置（单位为磅）。可读/写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicer/member/Width) | 获取或设置指定切片器的宽度（以磅为单位）。可读/写。 |