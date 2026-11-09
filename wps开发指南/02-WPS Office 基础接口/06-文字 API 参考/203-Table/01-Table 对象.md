# Table 对象

代表单个表格。 **Table** 对象是 **Tables** 集合的一个成员。 **Tables** 集合包含指定的所选内容、范围或文档中的所有表格。

## 说明


使用 **Tables** (*Index*) 可返回一个 **Table** 对象，其中 *Index* 为索引号。索引号代表表格在所选内容、范围或文档中的位置。


## 示例


```JavaScript
/*本示例将活动文档中的第一个表格转换为文本。*/
function test() {
    ActiveDocument.Tables.Item(1).ConvertToText(wdSeparateByTabs)
}
```
使用 **Add** 方法可在指定范围添加表格。



```JavaScript
/*本示例在第一个文档的开头添加一个 3x4 的表格。*/
function test() {
    let range = Documents.Item(1).Range(0, 0)
    Documents.Item(1).Tables.Add(range, 3, 4)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AutoFitBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/AutoFitBehavior) | 确定 WPS 如何使用自动调整功能来调整表格的大小。 |
| [Cell](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Cell) | 返回一个 **Cell** 对象，该对象代表表格中的一个单元格。 |
| [ConvertToText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/ConvertToText) | 将表格转换为文本并返回一个 **Range** 对象，该对象代表带分隔符的文本。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Delete) | 删除指定的表格。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Select) | 选择指定的表格。 |
| [Sort](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Sort) | 对指定的表格进行排序。 |
| [SortAscending](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/SortAscending) | 按字母数字升序对段落或表格行进行排序。 |
| [SortDescending](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/SortDescending) | 以字母数字降序排列表格行。 |
| [Split](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Split) | 在表格中紧靠指定行的上面插入一空段落，并且返回一个 **Table** 对象，此对象包含指定行及其后面的行。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AllowAutoFit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/AllowAutoFit) | 使 WPS 可以自动调整表格中的单元格的大小以适应内容。 **Boolean** 类型，可读写。 |
| [AllowPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/AllowPageBreaks) | 允许 WPS 对指定表格进行跨页断行。 **Boolean** 类型，可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Borders) | 返回一个 **Borders** 集合，该集合代表指定对象的所有边框。 |
| [BottomPadding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/BottomPadding) | 返回或设置在表格中单独的单元格或所有单元格内容的下方添加的间距（以磅为单位）。 **Single** 类型，可读写。 |
| [Columns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Columns) | 返回一个 **Columns** 集合，该集合代表表格中的所有列。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Descr](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Descr) | 返回或设置包含指定表格的说明的 **String** 类型值。可读/写。 |
| [LeftPadding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/LeftPadding) | 返回或设置在表格中所有单元格的内容左侧要增加的间距（以磅为单位）。可读写 **Single** 类型。 |
| [NestingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/NestingLevel) | 返回指定表格的嵌套层。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Table** 对象的父对象。 |
| [PreferredWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/PreferredWidth) | 返回或设置指定表格的指定宽度（以磅为单位或以窗口宽度的百分比表示）。可读写 **Single** 类型。 |
| [PreferredWidthType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/PreferredWidthType) | 返回或设置用于指定表格宽度的指定度量单位。可读写 **[WdPreferredWidthType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPreferredWidthType)** 类型。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Range) | 返回一个 **Range** 对象，该对象代表指定表格中所含的文档部分。 |
| [RightPadding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/RightPadding) | 返回或设置在表格的所有单元格的内容右侧要增加的间距（以磅为单位）。可读写 **Single** 类型。 |
| [Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Rows) | 返回一个 **Rows** 集合，该集合代表表格中所有的表格行。只读。 |
| [Shading](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Shading) | 返回一个 **Shading** 对象，该对象代表指定对象的底纹格式。 |
| [Spacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Spacing) | 返回或设置表格中单元格的间距（以磅为单位）。可读写 **Single** 类型。 |
| [Tables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Tables) | 返回一个 **Tables** 集合，该集合代表指定表格中的所有嵌套表格。只读。 |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Title) | 返回或设置包含指定表格的标题的 **String** 类型值。可读/写。 |
| [TopPadding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/TopPadding) | 返回或设置表格中所有单元格的内容上方要增加的间距（以磅为单位）。可读写 **Single** 类型。 |
| [Uniform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/member/Uniform) | 如果表格中所有的行具有相同的列数，则该属性值为 **True** 。 **Boolean** 类型，只读。 |