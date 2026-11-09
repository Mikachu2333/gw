# FootnoteOptions 对象

代表分配给文档中脚注的范围或所选内容的属性。

## 说明


使用 **Range** 或 **Selection** 对象可返回 **FootnoteOptions** 对象。使用 **FootnoteOptions** 对象可为文档的不同区域分配不同的脚注属性。例如，您可能希望长文档说明部分的脚注以小写字母显示，而文档中其余部分的脚注以星号显示。


## 示例


```JavaScript
/*本示例使用 NumberingRule、NumberStyle 和 StartingNumber 属性来设置活动文档第一节中脚注的格式。*/
function test() {
    //Sets the range as section one of the active document
    let range = ActiveDocument.Sections.Item(1).Range

    //Formats the EndnoteOptions properties
    range.FootnoteOptions.NumberingRule = wdRestartPage
    range.FootnoteOptions.NumberStyle = wdNoteNumberStyleLowercaseLetter
    range.FootnoteOptions.StartingNumber = 1
}
```


```JavaScript
/*本示例显示所选内容中脚注的起始编号。*/
function test() {
    alert(Selection.FootnoteOptions.StartingNumber)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FootnoteOptions/member/Application) | 返回一个代表 WPS 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)** 对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FootnoteOptions/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [LayoutColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FootnoteOptions/member/LayoutColumns) | 返回或设置当包含引用标记的节具有多个列时脚注的列布局方式。可读写， **Long** 类型。 |
| [Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FootnoteOptions/member/Location) | 返回或设置所有脚注的位置。 **WdFootnoteLocation** 类型，可读写。 |
| [NumberStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FootnoteOptions/member/NumberStyle) | 返回或设置脚注的编号样式。 **WdNoteNumberStyle** 类型，可读写。 |
| [NumberingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FootnoteOptions/member/NumberingRule) | 返回或设置在分页符或分节符之后的脚注或尾注的编号方式。可读写 **[WdNumberingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdNumberingRule)** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FootnoteOptions/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **FootnoteOptions** 对象的父对象。 |
| [StartingNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FootnoteOptions/member/StartingNumber) | 返回或设置脚注的起始编号。 **Long** 类型，可读写。 |