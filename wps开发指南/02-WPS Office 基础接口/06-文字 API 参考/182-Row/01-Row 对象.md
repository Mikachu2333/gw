# Row 对象

代表表格中的一行。 **Row** 对象是 **[Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/obj)** 集合的一个成员。 **Rows** 集合包含指定的所选内容、范围或表格中的所有行。

## 说明


使用 **Rows** (Index)（其中 Index 是索引号）返回单个 **Row** 对象。索引号表示行在所选内容、范围或表中的位置。


## 示例


```JavaScript
/*本示例删除活动文档中第一个表格的第一行。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Item(1).Delete()
}
```
使用 **Add** 方法向表中添加行。



```JavaScript
/*本示例在所选内容的第一行之前插入一行。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Rows.Add(Selection.Rows.Item(1))
    }
}
```
使用 **Cells** 属性可以修改 **Row** 对象中的各个单元格。



```JavaScript
/*本示例在所选内容中添加一个表，并在表格第二行中的每个单元格插入数字。*/
function test() {
    Selection.Collapse(wdCollapseEnd)
    if (!Selection.Information(wdWithInTable)) {
        let cells = ActiveDocument.Tables.Add(Selection.Range, 3, 5).Rows.Item(2).Cells
        for (let i = 1; i <= cells.Count; i++) {
            cells.Item(i).Range.Text = i
        }
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ConvertToText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/ConvertToText) | 将表格转换为文本并返回一个 **Range** 对象，该对象代表带分隔符的文本。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/Delete) | 删除指定的表格行 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/Select) | 选择指定的表格行。 |
| [SetHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/SetHeight) | 设置表格行的高度。 |
| [SetLeftIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/SetLeftIndent) | 设置表格中行的缩进。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/Alignment) | 返回或设置一个 **WdRowAlignment** 常量，该常量代表指定行的对齐方式。可读写。 |
| [AllowBreakAcrossPages](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/AllowBreakAcrossPages) | 如果允许分页符拆分表格中一行或多行中的文本，则该属性值为 **msoTrue** 。可读写 **Long** 类型。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/Borders) | 返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/obj)** 集合，该集合代表指定对象的所有边框。 |
| [Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/Cells) | 返回一个 **[Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/obj)** 集合，该集合代表在某一列、行、选定内容或区域中的表格单元格。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [HeadingFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/HeadingFormat) | 如果为 **msoTrue** ，则将指定一行或数行的格式设置为表格标题。当表格不止一页时，可将多行的格式重复设置为表格标题。可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。 **Long** 类型，可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/Height) | 返回或设置表格中指定行的高度。Single 类型，可读写。 |
| [HeightRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/HeightRule) | 返回或设置确定指定单元格或行高度的规则。 **WdRowHeightRule** 类型，可读写。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/Index) | 返回 **Long** 值，该值表示项目在集合中的位置。只读。 |
| [IsFirst](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/IsFirst) | 如果指定的行是表格中的首行，则该属性值为 **True** 。只读 **Boolean** 类型。 |
| [IsLast](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/IsLast) | 如果指定的行是表格中的末行，则该属性值为 **True** 。否则为 **False** 。只读 **Boolean** 。 |
| [LeftIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/LeftIndent) | 返回或设置一个 **Single** 类型的值，该值代表指定表格行的左缩进值（以磅为单位）。可读写。 |
| [NestingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/NestingLevel) | 返回指定表格行的嵌套层。只读 **Long** 类型。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/Next) | 返回一个 **Row** 对象，该对象代表表格中行的集合中的下一个表格行。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Row** 对象的父对象。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/Previous) | 返回一个 **Row** 对象，该对象代表指定行的前一个表格行。只读。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/member/Range) | 返回一个 **Range** 对象，该对象代表指定表格行内包含的文档部分 |