# PivotField 对象

代表数据透视表中的一个字段。

## 说明


 **PivotField** 对象是 **PivotFields** 集合的成员。 **PivotFields** 集合包含数据透视表中的所有字段，包括隐藏字段。

下列属性返回数据透视表字段的子集，在某些情况下，使用这些属性会更为方便：

* **ColumnFields** 属性
* **DataFields** 属性
* **HiddenFields** 属性
* **PageFields** 属性
* **RowFields** 属性
* **VisibleFields** 属性

使用 **PivotFields** ( *index* )（其中 *index* 是字段名称或索引号）可返回一个 **PivotField** 对象。


## 示例


```JavaScript
/*本示例使 Sheet1 上第一张数据透视表中的字段“id”成为行字段。*/
function test() {
    Application.Worksheets.Item("Sheet1").PivotTables(1).PivotFields("id").Orientation = xlRowField
}
```


```JavaScript
/*本示例删除工作表 Sheet1 中数据透视表应用于字段“score”的所有筛选。*/
function test() {
    let pvtfield = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields("score")
    pvtfield.ClearAllFilters()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AutoSort](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/AutoSort) | 为数据透视表建立自动字段排序规则。 |
| [CalculatedItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/CalculatedItems) | 返回一个 **CalculatedItems** 集合，该集合表示指定数据透视表中的所有计算项。只读。 |
| [ClearAllFilters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/ClearAllFilters) | 调用此方法将删除当前应用于透视字段的所有筛选。包括从透视字段的 **PivotFilters** 集合中删除所有筛选以及删除应用于透视字段的所有手动筛选。如果透视字段位于报表筛选区域中，则所选项将被设置为默认项。 |
| [ClearLabelFilters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/ClearLabelFilters) | 此方法将删除透视字段的 **PivotFilters** 集合中的所有标签筛选或所有日期筛选。 |
| [ClearValueFilters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/ClearValueFilters) | 调用此方法将删除透视字段的 **PivotFilters** 集合中的所有值筛选。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Delete) | 删除对象。 |
| [HiddenItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/HiddenItems) | 返回一个对象，该对象表示单个隐藏数据透视表项（ **PivotItem** 对象），或表示指定字段中所有隐藏项的集合（ **PivotItems** 对象）。只读。 |
| [PivotItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/PivotItems) | 返回一个对象，该对象表示指定字段中的单个数据透视表项（ **PivotItem** 对象）或所有可见项和隐藏项的集合（ **PivotItems** 对象）。只读。 |
| [Subtotals](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Subtotals) | 返回或设置与指定字段同时显示的分类汇总。仅对非数据字段有效。 **Variant** 类型，可读写。 |
| [VisibleItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/VisibleItems) | 返回一个对象，该对象表示指定字段中的单个可见数据透视表项（ **PivotItem** 对象），或指定字段中的所有可见项的集合（ **PivotItems** 对象）。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AllItemsVisible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/AllItemsVisible) | 用于检索指示是否对透视字段应用任何手动筛选的 Boolean 值。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AutoSortField](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/AutoSortField) | 返回用于对指定数据透视表字段进行自动排序的数据字段的名称。 **String** 类型，只读。 |
| [AutoSortOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/AutoSortOrder) | 返回用于对指定数据透视表字段进行自动排序的次序。可为 **XlSortOrder** 常量之一。 **Long** 类型，只读。 |
| [BaseField](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/BaseField) | 返回或设置自定义计算的基准字段。本属性仅对数据字段有效。 **Variant** 类型，可读写。 |
| [BaseItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/BaseItem) | 返回或设置自定义计算基准字段的数据项，仅对数据字段有效。 **Variant** 类型，可读写。 |
| [Calculation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Calculation) | 返回或设置一个 **XlPivotFieldCalculation** 值，它代表指定字段执行的计算类型。此属性仅对数据字段有效。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Caption) | 返回一个 **String** 值，它代表数据透视字段的标签文本。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [CurrentPage](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/CurrentPage) | 返回或设置页字段的当前页显示（仅对页字段有效）。 **PivotItem** 类型，可读写。 |
| [DataRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/DataRange) | 返回一个 **Range** 对象，如下表所示。只读。 |
| [DataType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/DataType) | 返回一个 **XlPivotFieldDataType** 值，它代表数据透视表字段中的数据类型。 |
| [EnableItemSelection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/EnableItemSelection) | 如果为 **False** ，则在用户界面中禁止使用下拉字段的功能。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [EnableMultiplePageItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/EnableMultiplePageItems) | 用于指定对于页面区域中的字段是否在筛选器下拉列表中显示复选框。可读/写 **Boolean** 类型。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Formula) | 返回或设置一个 **String** 值，它代表 A1 样式表示法和宏语言中的对象的公式。 |
| [Function](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Function) | 返回或设置对数据透视表字段汇总时所使用的函数（仅用于数据字段）。 **XlConsolidationFunction** 类型，可读写。 |
| [GroupLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/GroupLevel) | 返回一组字段中指定字段的位置（如果该字段是分组字段集合中的成员）。只读。 |
| [IncludeNewItemsInFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/IncludeNewItemsInFilter) | 在将手动筛选应用于透视字段时，此属性允许开发人员指定是应跟踪排除的项目还是应跟踪包含的项目。 **Boolean** 类型，可读写。 |
| [IsCalculated](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/IsCalculated) | 如果数据透视表字段为计算字段或计算项，则此属性为 **True** 。 **Boolean** 类型，只读。 |
| [LayoutBlankLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/LayoutBlankLine) | 如果在数据透视表的指定行字段后插入了一个空行，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [LayoutCompactRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/LayoutCompactRow) | 指定在选择行时是否压缩透视字段（在一列中显示多个透视字段的项目）。可读/写 **Boolean** 类型。 |
| [LayoutForm](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/LayoutForm) | 返回或设置指定的数据透视表项出现的方式，即以表格格式还是以分级显示格式显示。 **XlLayoutFormType** 类型，可读写。 |
| [LayoutPageBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/LayoutPageBreak) | 如果在字段的每项后都插入了分页符，则该值为 **True** 。 默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [LayoutSubtotalLocation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/LayoutSubtotalLocation) | 返回或设置与指定字段相关（在其上面或下面）的数据透视表字段分类汇总的位置。 **XlSubtototalLocationType** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Name) | 返回或设置一个 **String** 值，它代表对象的名称。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/NumberFormat) | 返回或设置一个 **String** 值，它代表对象的格式代码。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Orientation) | 返回或设置一个 **XlPivotFieldOrientation** 值，它代表字段在指定的数据透视表中的位置。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Parent) | 返回指定对象的父对象。只读。 |
| [PivotFilters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/PivotFilters) | 返回或设置指定 **PivotField** 对象的 PivotFilters。只读。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Position) | 返回或设置一个 Variant 值，他代表数据透视表上所有字段的位置，包括属于所有行、列、页以及数据方向上的字段（第一字段、第二字段、第三字段等等）。 |
| [RepeatLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/RepeatLabels) | 返回或设置在数据透视表中是否对指定的透视字段重复项目标签。可读/写 |
| [ShowAllItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/ShowAllItems) | 如果显示数据透视表中的所有项目（即使这些项目中不包含汇总数据），则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [ShowDetail](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/ShowDetail) | 获取或设置指定的 **PivotField** 是否显示明细数据。可读/写 **Boolean** 类型。 |
| [SourceName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/SourceName) | 返回一个 **String** 值，它代表指定的对象出现在指定的数据透视表的原始源数据中时的名称。 |
| [StandardFormula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/StandardFormula) | 返回或设置一个 **String** 值，该值指定使用标准英语（美国）格式的公式。可读写。 |
| [TotalLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/TotalLevels) | 返回当前字段组中的字段总数。如果字段没有分组或数据源基于的是 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。），则 **TotalLevels** 将返回值 1。 **Long** 类型，只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/member/Value) | 返回或设置一个 **String** 值，它代表数据透视表中指定的字段的名称。 |