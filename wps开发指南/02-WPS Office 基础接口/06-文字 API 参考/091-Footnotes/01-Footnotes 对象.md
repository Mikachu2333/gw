# Footnotes 对象

表示所选内容、范围或文档中的所有脚注的 **Footnote** 对象的集合。

## 说明


使用 **Footnotes** 属性可返回 **Footnotes** 集合。


## 示例


```JavaScript
/*本示例将活动文档中的所有脚注改成尾注，所有尾注改成脚注。*/
function test() {
    ActiveDocument.Footnotes.SwapWithEndnotes()
}
```
使用 **Add** 方法将脚注添加到 **Footnotes** 集合中。



```JavaScript
/*本示例在所选内容后添加脚注。*/
function test() {
    Selection.Collapse(wdCollapseEnd)
    ActiveDocument.Footnotes.Add(Selection.Range, null, "The Willow Tree, (Lone Creek Press, 1996).")
}
```
使用 **Footnotes** (*index*)（其中 *index* 是索引号）可返回单个 **[Footnote](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnote/obj)** 对象。索引号代表选定内容、 范围或文档中脚注的位置。



```JavaScript
/*本示例将所选内容中的第一个脚注设置红色。*/
function test() {
    if (Selection.Footnotes.Count >= 1) {
        Selection.Footnotes.Item(1).Reference.Font.ColorIndex = wdRed
    }
}
```
位于文档或章节末尾的脚注被视为尾注，并包含在 **[Endnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/obj)** 集合中。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/member/Add) | 返回一个 **Footnote** 对象，该对象代表添加到区域中的脚注。 |
| [Convert](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/member/Convert) | 将尾注转换为脚注，或将脚注转换为尾注。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/member/Item) | 返回集合中的单个 **Footnote** 对象。 |
| [ResetContinuationNotice](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/member/ResetContinuationNotice) | 将脚注或尾注延续标记重新设置为默认标记。 |
| [ResetContinuationSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/member/ResetContinuationSeparator) | 将脚注或尾注延续分隔符重新设置为默认分隔符。 |
| [ResetSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/member/ResetSeparator) | 将脚注分隔符重新设置为默认分隔符。 |
| [SwapWithEndnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/member/SwapWithEndnotes) | 将文档中的所有脚注转换为尾注，反之亦然。要将一系列脚注转换为尾注，请使用 **Convert** 方法。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/member/Count) | 返回一个 **Long** 类型的值，它表示集合中的脚注数。只读。 |
| [Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/member/Location) | 返回或设置所有脚注的位置。可读写， **[WdFootnoteLocation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFootnoteLocation)** 类型。 |
| [NumberStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/member/NumberStyle) | 返回或设置脚注的编号样式。可读/写 **WdNoteNumberStyle** 。 |
| [NumberingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/member/NumberingRule) | 返回或设置在分页符或分节符之后的脚注或尾注的编号方式。可读写 **[WdNumberingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdNumberingRule)** 类型。 |
| [StartingNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/member/StartingNumber) | 返回或设置注释编号、行号或页码的起始值。可读/写 **Long** 类型。 |