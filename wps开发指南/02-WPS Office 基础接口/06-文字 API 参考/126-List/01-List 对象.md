# List 对象

代表已应用于文档中指定段落的单一列表格式。 **List** 对象是 **[Lists](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Lists/obj)** 集合的一个成员。

## 说明


使用 **Lists** (*Index*) 可返回一个 **List** 对象，其中 *Index* 是索引号。


## 示例


```JavaScript
/*本示例显示活动文档的第一个列表的项目符号或编号项目的数量。*/
function test() {
    alert(ActiveDocument.Lists.Item(1).CountNumberedItems())
}
```


```JavaScript
/*本示例为第一个文档上的第一个列表应用该文档上第三列表模板的格式。*/
function test() {
    let document = Documents.Item(1)
    let list = document.Lists.Item(1)
    list.ApplyListTemplateWithLevel(document.ListTemplates.Item(3))
}
```
要返回具有列表格式的所有段落，请使用 **ListParagraphs** 属性。要将这些段落作为范围返回，请使用 **Range** 属性。

要对现有列表应用不同的列表格式，请使用 **List** 对象的 **ApplyListTemplate** 方法。要向文档添加新列表，使用指定区域的 **[ListFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/obj)** 对象的 **ApplyListTemplate** 方法。

使用 **CanContinuePreviousList** 方法可确定是否能继续使用以前应用于文档的列表中的列表格式。

使用 **CountNumberedItems** 方法可返回编号列表或项目符号列表中的项目数，包括 LISTNUM 域。

要确定一个列表是否包含多个列表模板，请使用 **SingleListTemplate** 属性。

您可以处理文档中的单个 **List** 对象，但是要更精确地控制，则应使用 **ListFormat** 对象。

图片项目符号列表不包含在 **[Lists](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Lists/obj)** 集合中，并且不能使用 **List** 对象进行处理。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ApplyListTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/List/member/ApplyListTemplate) | 为指定的 **List** 对象设置列表格式。 |
| [ApplyListTemplateWithLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/List/member/ApplyListTemplateWithLevel) | 对指定 **List** 对象应用一组列表格式特征，可以选择用于指定级别。 |
| [ConvertNumbersToText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/List/member/ConvertNumbersToText) | 将指定的 **List** 对象中的列表编号和 LISTNUM 域更改为文本。 |
| [CountNumberedItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/List/member/CountNumberedItems) | 返回指定 **List** 对象中的项目符号或编号项目和 LISTNUM 域的数量。 |
| [RemoveNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/List/member/RemoveNumbers) | 删除指定列表中的编号或项目符号。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ListParagraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/List/member/ListParagraphs) | 返回一个 **[ListParagraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListParagraphs/obj)** 集合，该集合代表列表、文档或范围中的所有编号段落。只读。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/List/member/Range) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定对象所包含的文档部分。 |
| [SingleListTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/List/member/SingleListTemplate) | 如果整个列表都使用同一列表模板，则该属性值为 **True** 。只读 **Boolean** 类型。 |