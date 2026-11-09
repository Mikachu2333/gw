# EndnoteOptions 对象

代表指定给文档中尾注的某范围或所选内容的属性。

## 说明


使用 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 或 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象的 **EndnoteOptions** 属性可返回 **EndnoteOptions** 对象。

使用 **EndnoteOptions** 对象可为文档的不同区域指定不同的尾注属性。例如，您可能希望将长文档说明部分的尾注用小写罗马数字显示，而文档中其余部分的尾注用阿拉伯数字显示。


## 示例


```JavaScript
/*本示例使用 NumberingRule、NumberStyle 和 StartingNumber 属性来设置活动文档第一节中的尾注的格式。*/
function test() {
    //Sets the range as section one of the active document
    let range = Application.ActiveDocument.Sections.Item(1).Range

    //Formats the EndnoteOptions properties
    let options = range.EndnoteOptions
    options.NumberingRule = wdRestartSection
    options.NumberStyle = 2
    options.StartingNumber = 1
}
```


```JavaScript
/*本示例判断活动文档上第一节的文档部分的尾注的位置是否在活动文档的末尾，并通知用户。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    if (range.EndnoteOptions.Location == wdEndOfDocument) {
        alert("在活动文档的末尾")
    } else {
        alert("在当前节的末尾")
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/EndnoteOptions/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/EndnoteOptions/member/Location) | 返回或设置所有尾注的位置。 **WdEndnoteLocation** 类型，可读写。 |
| [NumberStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/EndnoteOptions/member/NumberStyle) | 返回或设置尾注的编号样式。 **WdNoteNumberStyle** 类型，可读写。 |
| [NumberingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/EndnoteOptions/member/NumberingRule) | 返回或设置在分页符或分节符之后脚注或尾注的编号方式。可读写 **[WdNumberingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdNumberingRule)** 。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/EndnoteOptions/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **EndnoteOptions** 对象的父对象。 |
| [StartingNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/EndnoteOptions/member/StartingNumber) | 返回或设置尾注的起始编号。 **Long** 类型，可读写。 |