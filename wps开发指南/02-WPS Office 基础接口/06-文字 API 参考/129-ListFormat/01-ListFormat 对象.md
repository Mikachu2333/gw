# ListFormat 对象

代表可应用于范围中各段落的列表格式属性。

## 说明


使用 **ListFormat** 属性可为范围返回 **ListFormat** 对象。


## 示例


```JavaScript
/*本示例对选定内容应用默认的项目符号列表格式。*/
function test() {
    Selection.Range.ListFormat.ApplyBulletDefault()
}
```
应用列表格式的方便途径是使用 **ApplyBulletDefault** 、 **ApplyNumberDefault** 和 **ApplyOutlineNumberDefault** 方法，这些方法分别对应于 **“项目符号和编号”** 对话框中各选项卡上的第一种列表格式（不包括 **“无”** ）。

要应用一种非默认格式，请使用 **ApplyListTemplate** 方法，该方法允许您指定要应用的列表格式（列表模板）。

使用 **List** 或 **ListTemplate** 属性从指定范围中的第一段返回列表或列表模板。

对 **Range** 对象使用 **ListFormat** 属性，可以访问用于指定范围的列表格式的属性和方法。



```JavaScript
/*本示例将默认的项目符号列表格式应用到活动文档中第二段。*/
function test() {
    ActiveDocument.Paragraphs.Item(2).Range.ListFormat.ApplyBulletDefault()
}
```
但是，如果文档中已定义了列表，则可以使用 **Lists** 属性访问 **List** 对象。



```JavaScript
/*本示例将活动文档上第一个列表的格式更改为“项目符号和编号”对话框中“编号”选项卡上的第一种编号格式。*/
function test() {
    ActiveDocument.Lists.Item(1).Range.ListFormat.ApplyListTemplate(ListGalleries.Item(wdNumberGallery).ListTemplates(1))
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ApplyBulletDefault](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ApplyBulletDefault) | 向指定的 **[ListFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/obj)** 对象的区域中的段落添加项目符号和格式。 |
| [ApplyListTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ApplyListTemplate) | 为指定的 **ListFormat** 对象设置列表格式。 |
| [ApplyListTemplateWithLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ApplyListTemplateWithLevel) | 对指定级别应用一组列表格式特征。 |
| [ApplyNumberDefault](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ApplyNumberDefault) | 向指定的 **ListFormat** 对象的区域中的段落添加默认的编号格式。 |
| [ApplyOutlineNumberDefault](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ApplyOutlineNumberDefault) | 向指定的 **ListFormat** 对象的区域中的段落添加默认的多级符号格式。 |
| [CanContinuePreviousList](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/CanContinuePreviousList) | 返回一个 **WdContinue** 常量（ **wdContinueDisabled** 、 **wdResetList** 或 **wdContinueList** ），该常量表明是否接续上一列表格式。 |
| [ConvertNumbersToText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ConvertNumbersToText) | 将指定 **ListFormat** 对象中的列表编号和 LISTNUM 域更改为文本。 |
| [CountNumberedItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/CountNumberedItems) | 返回指定 **ListFormat** 对象中的项目符号或编号项目和 LISTNUM 域的数量。 |
| [ListIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ListIndent) | 增加指定 **ListFormat** 对象的区域中的段落的列表级别，增加量为一个级别。 |
| [ListOutdent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ListOutdent) | 降低指定的 **ListFormat** 对象的区域中段落的列表级别，减量为一个级别。 |
| [RemoveNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/RemoveNumbers) | 删除指定列表中的编号或项目符号。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [List](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/List) | 返回一个 **[List](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/List/obj)** 对象，该对象代表在指定 **ListFormat** 对象中包含的第一个已设置格式的列表。 |
| [ListLevelNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ListLevelNumber) | 返回或设置指定的 **ListFormat** 对象中段落的列表级别。可读写 **Long** 类型。 |
| [ListString](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ListString) | 返回一个 **String** 类型的值，该值代表指定的 **ListFormat** 对象区域中第一段的列表值的外观。例如，字母顺序列表中第二段的返回值为“B”。只读。 |
| [ListTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ListTemplate) | 返回一个 **ListTemplate** 对象，该对象代表指定 **ListFormat** 对象的列表格式。 |
| [ListType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ListType) | 返回指定的 **ListFormat** 对象区域中所包含的列表类型。 **WdListType** 类型，只读。 |
| [ListValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/ListValue) | 返回指定的 **ListFormat** 对象区域中第一段的数值。 **Long** 类型，只读。 |
| [SingleList](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/SingleList) | 如果指定的 **ListFormat** 对象只包含一个列表，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [SingleListTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/member/SingleListTemplate) | 如果整个 **ListFormat** 对象都使用同一列表模板，则该属性值为 **True** 。只读 **Boolean** 类型。 |