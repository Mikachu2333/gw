# Style 对象

代表单个内置样式或用户定义的样式。 **Style** 对象将样式属性（如字体、字形、段落间距）添加为 **Style** 对象的属性。 **Style** 对象是 **Styles** 集合的成员。 **[Styles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Styles/obj)** 集合包含指定文档中的所有样式。

## 说明


使用 **Styles** (*Index*) 可返回一个 **Style** 对象，其中 *Index* 为样式名、 **WdBuiltinStyle** 常量或索引号。样式名的拼写和间距必须完全匹配，但是其大小写不必完全匹配。


## 示例


```JavaScript
/*本示例更改活动文档中名为“Color”的用户定义的样式的字体名称。*/
function test() {
    ActiveDocument.Styles.Item("Color").Font.Name = "Arial"
}
```


```JavaScript
/*本示例将内置“标题 1”样式设置为非加粗。*/
function test() {
    ActiveDocument.Styles.Item(wdStyleHeading1).Font.Bold = msoFalse
}
```
样式索引编号代表样式在按字母顺序排列的样式名列表中的位置。请注意，Styles(1) 是按字母顺序排列的列表中的第一个样式。



```JavaScript
/*本示例显示 Styles 集合中第一个样式的基准样式的名称和样式名。*/
function test() {
    let style = ActiveDocument.Styles.Item(1)
    alert(`Base style= ${style.BaseStyle}\nStyle name= ${style.NameLocal}`)
}
```
要将样式应用于范围、段落或多个段落，请将 **Style** 属性设为用户定义的样式名或内置样式名。



```JavaScript
/*本示例对活动文档的前四段应用“正文”样式。*/
function test() {
    let range = ActiveDocument.Range(ActiveDocument.Paragraphs.Item(1).Range.Start, ActiveDocument.Paragraphs.Item(4).Range.End)
    range.Style = wdStyleNormal
}
```


```JavaScript
/*本示例对所选内容的第一段应用“标题 1”样式。*/
function test() {
    Selection.Paragraphs.Item(1).Style = wdStyleHeading1
}
```


```JavaScript
/*本示例创建一个名为“Bolded”的字符样式，并将其应用于所选内容。*/
function test() {
    let style = ActiveDocument.Styles.Add("Bolded", wdStyleTypeCharacter)
    style.Font.Bold = msoTrue
    Selection.Range.Style = "Bolded"
}
```
使用 **OrganizerCopy** 方法可在文档和模板之间复制样式。使用 **UpdateStyles** 方法可更新活动文档中的样式，使其与附加模板中的样式定义相匹配。使用 **OpenAsDocument** 方法可将模板作为文档打开，以便可以修改该模板的样式。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Delete) | 删除指定的样式。 |
| [LinkToListTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/LinkToListTemplate) | 将指定的样式与一个列表模板链接，如此该样式中的格式就可以应用于列表。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [AutomaticallyUpdate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/AutomaticallyUpdate) | 如果样式根据选定内容重新定义，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [BaseStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/BaseStyle) | 返回或设置一种现有样式，根据此样式可以设置其他样式。 **Variant** 类型，可读写。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Borders) | 返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/obj)** 集合，该集合代表指定样式的所有边框。 |
| [BuiltIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/BuiltIn) | 如果指定对象是 WPS 的内置样式或题注标签之一，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Description](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Description) | 返回指定样式的说明。只读 **String** 类型。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Font) | 返回或设置 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定样式的字符格式。 **Font** 类型，可读写。 |
| [Frame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Frame) | 返回一个 **[Frame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/obj)** 对象，该对象代表指定样式的框架格式。只读。 |
| [InUse](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/InUse) | 如果为 **True** ，则指定的样式是一个已在文档中修改或应用的内置样式，或者是在文档中新建的样式。 **Boolean** 类型，只读。 |
| [LanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/LanguageID) | 返回或设置一个 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 常量，该常量代表指定范围的语言。可读写。 |
| [LanguageIDFarEast](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/LanguageIDFarEast) | 返回或设置指定对象的东亚语言。可读写 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 类型。 |
| [LinkStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/LinkStyle) | 设置或返回一个 **Variant** 类型的值，该值代表段落和字符样式之间的链接。可读写。 |
| [ListLevelNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/ListLevelNumber) | 返回指定样式的列表级别。只读 **Long** 类型。 |
| [ListTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/ListTemplate) | 返回一个 **ListTemplate** 对象，该对象代表指定 **Style** 对象的列表格式。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Locked) | 如果不能更改或编辑样式，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [NameLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/NameLocal) | 返回由用户语言表示的内置样式的名称。可读写 **String** 类型。 |
| [NextParagraphStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/NextParagraphStyle) | 返回或设置自动应用于在格式设置为指定样式的段落之后插入的新段落的样式。 **Variant** 类型，可读写。 |
| [ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/ParagraphFormat) | 返回或设置一个 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/obj)** 对象，该对象代表指定样式的段落设置。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Style** 对象的父对象。 |
| [Priority](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Priority) | 返回或设置一个 **Long** 类型的值，该值代表 **“样式”** 任务窗格中排序样式的优先级。可读写。 |
| [QuickStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/QuickStyle) | 返回或设置一个 **Boolean** 类型的值，该值代表样式是否对应于可用的快速样式。可读写。 |
| [Shading](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Shading) | 返回一个 **Shading** 对象，该对象代表指定对象的底纹格式。 |
| [Table](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Table) | 返回一个 **[TableStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/obj)** 对象，该对象代表可通过使用表格样式应用于表格的属性。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Type) | 返回样式的类型。只读 **[WdStyleType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdStyleType)** 类型。 |
| [UnhideWhenUsed](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/UnhideWhenUsed) | 如果指定样式在用于文档中后显示为 WPS 中 **“样式”** 和 **“样式和格式”** 任务窗格中的推荐样式，则该属性值为 **True** 。可读/写。 |
| [Visibility](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/member/Visibility) | 如果指定样式显示为 **“样式”** 库和 **“样式和格式”** 任务窗格中的推荐样式，则该属性值为 **True** 。可读/写。 |