# PivotTable 对象

代表工作表上的数据透视表。

## 说明


 **PivotTable** 对象是 **PivotTables** 集合的成员。 **PivotTables** 集合包含某一张工作表上的所有 **PivotTable** 对象。

因为对数据透视表进行编程可能会很复杂，所以，最方便的做法是将数据透视表操作录制到宏中，然后再修订所录制的宏代码。

使用 **PivotTables** (*index*)（其中 *index* 是数据透视表索引号或名称）可返回一个 **PivotTable** 对象。


## 示例


```JavaScript
/*本示例使 Sheet1 上第一张数据透视表中的字段“age”成为行字段。*/
function test() {
    Worksheets.Item("Sheet1").PivotTables(1).PivotFields("age").Orientation = xlRowField
}
```


```JavaScript
/*本示例使第一张工作表上的第一个数据透视表使用合并单元格外部行项、列项、分类汇总和总计的标志。*/
function test() {
    Application.Worksheets.Item(1).PivotTables(1).MergeLabels = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddDataField](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/AddDataField) | 将数据字段添加到数据透视表中。返回一个 **PivotField** 对象，该对象表示新的数据字段。 |
| [AddFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/AddFields) | 向数据透视表或数据透视图中添加行字段、列字段和页字段。 |
| [CalculatedFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/CalculatedFields) | 返回一个 **CalculatedFields** 集合，该集合表示指定数据透视表中的所有计算字段。只读。 |
| [ChangePivotCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ChangePivotCache) | 更改指定 **PivotTable** 的 **PivotCache** 。 |
| [ClearAllFilters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ClearAllFilters) | **ClearAllFilters** 方法将删除当前应用于数据透视表的所有筛选。包括删除 **PivotTable** 对象的 **PivotFilters** 集合中的所有筛选，删除应用的所有手动筛选以及将报表筛选区域中的所有筛选字段设置为默认项。 |
| [ClearTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ClearTable) | **ClearTable** 方法用于清除数据透视表。清除数据透视表包括删除所有字段以及删除应用于数据透视表的所有筛选和排序。此方法将数据透视表重置为该表刚创建而尚未添加任何字段时的状态。 |
| [ColumnFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ColumnFields) | 返回一个对象，该对象表示单个的数据透视表字段（ **PivotField** 对象）或当前显示为列字段的所有字段的集合（ **PivotFields** 对象）。只读。 |
| [DataFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/DataFields) | 返回一个对象，该对象表示单个数据透视表字段（ **PivotField** 对象）或当前显示为数据字段的所有字段集合（ **PivotFields** 对象）。只读。 |
| [ListFormulas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ListFormulas) | 在分离工作表上创建数据透视表的计算项和计算字段的列表。 |
| [PageFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/PageFields) | 返回一个对象，该对象表示单个数据透视表字段（ **PivotField** 对象），或者当前显示为页字段的所有字段的一个集合（ **PivotFields** 对象）。只读。 |
| [PivotCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/PivotCache) | 返回一个 **PivotCache** 对象，该对象表示指定数据透视表的缓存。只读。 |
| [PivotFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/PivotFields) | 返回一个对象，该对象表示数据透视表中单个字段（ **PivotField** 对象）或可见及隐藏字段集合（ **PivotFields** 对象）。只读。 |
| [PivotSelect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/PivotSelect) | 选定数据透视表的一部分。 |
| [RefreshTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/RefreshTable) | 用源数据刷新数据透视表。如果成功，则返回 **True** 。 |
| [RepeatAllLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/RepeatAllLabels) | 指定是否要对指定数据透视表中的所有透视字段重复项目标签。 |
| [RowAxisLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/RowAxisLayout) | 此方法用于同时为所有现有的透视字段设置版式选项。 |
| [RowFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/RowFields) | 返回一个对象，该对象表示数据透视表中的单个字段（ **PivotField** 对象），或者当前未显示为行字段的所有字段的一个集合（ **PivotFields** 对象）。只读。 |
| [ShowPages](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ShowPages) | 为页字段中的每个数据项创建新的数据透视表。每个新报表都创建在新的工作表上。 |
| [SubtotalLocation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/SubtotalLocation) | 此方法可更改所有现有透视字段的分类汇总位置。更改分类汇总位置仅对大纲形式的字段产生直接的视觉效果，但是也会对表格形式的字段设置该方法。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActiveFilters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ActiveFilters) | 指示指定数据透视表中的当前活动的筛选。只读。 |
| [AllowMultipleFilters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/AllowMultipleFilters) | 设置或检索一个值，该值指示是否可同时将多个筛选应用于一个透视字段。可读写 **Boolean** 。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [CacheIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/CacheIndex) | 返回或设置数据透视表缓存的索引号。 **Long** 类型，可读写。 |
| [ColumnGrand](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ColumnGrand) | 如果数据透视表显示列总计，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CompactLayoutColumnHeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/CompactLayoutColumnHeader) | 指定透视数据表在压缩行布局表单中时标题中显示的标题。可读写 **String** 。 |
| [CompactLayoutRowHeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/CompactLayoutRowHeader) | 指定透视数据表在压缩行布局表单中时行标题中显示的标题。可读写 **String** 。 |
| [CompactRowIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/CompactRowIndent) | 当启用压缩行布局表单时，返回或设置透视项目的缩进增量。可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [DataBodyRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/DataBodyRange) | 返回一个 **Range** 对象，它代表数据透视表中数值区域。只读。 |
| [DataPivotField](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/DataPivotField) | 返回一个 **PivotField** 对象，该对象表示数据透视表中所有数据字段。只读。 |
| [DisplayContextTooltips](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/DisplayContextTooltips) | 控制是否显示数据透视表单元格的工具提示。可读写 **Boolean** 。 |
| [DisplayErrorString](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/DisplayErrorString) | 如果数据透视表在有错误的单元格中显示用户自定义的错误字符串，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [DisplayFieldCaptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/DisplayFieldCaptions) | 控制是否在网格中显示筛选器按钮以及行和列的透视字段标题。可读/写。 |
| [DisplayNullString](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/DisplayNullString) | 如果数据透视表在包含空值的单元格中显示用户自定义的字符串，则该值为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [EnableDrilldown](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/EnableDrilldown) | 如果启用“显示明细数据”，则该值为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [ErrorString](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ErrorString) | 返回或设置一个 **String** 值，它代表 **DisplayErrorString** 属性为 **True** 时如果单元格中有错误而显示的字符串。 |
| [FieldListSortAscending](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/FieldListSortAscending) | 控制数据透视表字段列表中字段的排序顺序。当此属性设置为 **True** 时，字段按升序顺序排序。当它设置为 **False** 时，字段按数据源顺序排序。可读/写。 |
| [GrandTotalName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/GrandTotalName) | 返回或设置显示在指定数据透视表的总计列或行标题中的文本串标志。默认值为字符串“Grand Total”。 **String** 类型，可读写。 |
| [HasAutoFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/HasAutoFormat) | 如果在刷新数据透视表或移动字段时自动设置格式，则该属性值为 **True** 。 读/写 **Boolean** 。 |
| [InGridDropZones](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/InGridDropZones) | 此属性用于为 **PivotTable** 对象切换网格中的拖放区域。在一些情况下，它还会影响数据透视表的布局。可读/写 **Boolean** 类型。 |
| [InnerDetail](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/InnerDetail) | 当最内部行或列字段的 **ShowDetail** 属性设为 **True** 时，返回或设置这些详细数据的字段名称。 **String** 类型，可读写。 |
| [LayoutRowDefault](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/LayoutRowDefault) | 此属性指定初次将透视字段添加到数据透视表中时它们的布局设置。可读/写 **xlLayoutRowType** 类型。 |
| [Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/Location) | 获取或设置一个 **String** 类型的值，该值代表指定 **PivotTable** 主体中左上角的单元格地址。可读/写。 |
| [MergeLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/MergeLabels) | 如果指定的数据透视表的外部行项、列项、分类汇总和总计标志使用合并单元格，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/Name) | 返回或设置一个 **String** 值，它代表对象的名称。 |
| [NullString](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/NullString) | 返回或设置当 **DisplayNullString** 为 **True** 时，在包含 null 值的单元格中显示的字符串。默认值为空字符串 ("")。 **String** 类型，可读写。 |
| [PageFieldOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/PageFieldOrder) | 返回或设置页字段在数据透视表布局上的顺序。可为以下 **XlOrder** 常量之一： **xlDownThenOver** 或 **xlOverThenDown** 。默认常量是 **xlDownThenOver** 。 **Long** 类型，可读写。 |
| [PageFieldWrapCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/PageFieldWrapCount) | 返回或设置数据透视表中每行或每列的页字段数目。 **Long** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/Parent) | 返回指定对象的父对象。只读。 |
| [PivotColumnAxis](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/PivotColumnAxis) | 返回 **PivotAxis** 对象，该对象表示整个列轴。只读 **PivotAxis** 类型。 |
| [PivotFormulas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/PivotFormulas) | 返回一个 **PivotFormulas** 对象，该对象表示指定数据透视表的公式集合。只读。 |
| [PivotRowAxis](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/PivotRowAxis) | 返回 **PivotAxis** 对象，该对象表示整个行轴。只读 **PivotAxis** 类型。 |
| [PreserveFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/PreserveFormatting) | 当使用数据透视、筛选或更改页字段项等操作刷新或重新计算报告时，如果格式处于被保护状态，则为 **True** 。对于查询表，如果数据前五行的任何常规格式设置将应用于查询表数据的新行，则此属性为 **True** 。对未使用的单元格不进行设置。如果将查询表应用的最近一次自动套用格式应用于新数据行，则此属性为 **False** 。默认值是 **True** 。 |
| [RowGrand](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/RowGrand) | 如果数据透视表显示行的总数，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [SaveData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/SaveData) | 如果数据透视表的数据随工作簿一起保存，则为 **True** 。如果仅保存数据透视表的定义，则为 **False** 。 **Boolean** 类型，可读写。 |
| [ShowDrillIndicators](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ShowDrillIndicators) | **ShowDrillIndicators** 属性用于切换数据透视表中深化指示符的显示。可读/写 **Boolean** 类型。 |
| [ShowTableStyleColumnHeaders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ShowTableStyleColumnHeaders) | 如果列标题应显示在数据透视表中，则将 **ShowTableStyleColumnHeaders** 属性设置为 **True** 。可读/写 **Boolean** 类型。 |
| [ShowTableStyleColumnStripes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ShowTableStyleColumnStripes) | **ShowTableStyleColumnStripes** 属性显示镶边列，这些列中的偶数列和奇数列的格式互不相同。这样使数据透视表更易于阅读。可读/写 **Boolean** 类型。 |
| [ShowTableStyleLastColumn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ShowTableStyleLastColumn) | 如果为指定的 **PivotTable** 对象显示最后一列，则返回或设置。读/写 **Boolean** 。 |
| [ShowTableStyleRowHeaders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ShowTableStyleRowHeaders) | 如果行标题应显示在数据透视表中，则将 **ShowTableStyleRowHeaders** 属性设置为 **True** 。可读/写 **Boolean** 类型。 |
| [ShowTableStyleRowStripes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ShowTableStyleRowStripes) | **ShowTableStyleRowStripes** 属性显示镶边行，这些行中的偶数行和奇数行的格式互不相同。这样使数据透视表更易于阅读。可读/写 **Boolean** 类型。 |
| [ShowValuesRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/ShowValuesRow) | 返回或设置是否显示值行。可读/写 |
| [Slicers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/Slicers) | 返回指定数据透视表的 **[Slicers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Slicers/obj)** 集合。只读 |
| [SortUsingCustomLists](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/SortUsingCustomLists) | **SortUsingCustomLists** 属性控制最初在初始化透视字段并按 PivotItems 标题对 PivotItems 进行排列时，以及稍后在用户应用排序时，是否将自定义列表用于对字段项进行排序。可读/写 **Boolean** 类型。 |
| [SourceData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/SourceData) | 返回数据透视表的数据源，如下表所示。 **Variant** 型，可读写。 |
| [SubtotalHiddenPageItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/SubtotalHiddenPageItems) | 如果在行或列的分类汇总、块汇总和总计中包括数据透视表中的隐藏页字段项，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [TableRange1](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/TableRange1) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示包括整个数据透视表但不包括页字段的区域。只读。 |
| [TableRange2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/TableRange2) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示包括整个数据透视表（含页字段）的区域。只读。 |
| [TableStyle2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/TableStyle2) | **TableStyle2** 属性指定当前应用于数据透视表的数据透视表样式。可读/写。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/Value) | 返回或设置一个 **String** 值，它代表数据透视表的名称。 |
| [Version](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/member/Version) | 返回一个 **[XlPivotTableVersionList](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPivotTableVersionList)** 值，它代表 ET 版本号。 |