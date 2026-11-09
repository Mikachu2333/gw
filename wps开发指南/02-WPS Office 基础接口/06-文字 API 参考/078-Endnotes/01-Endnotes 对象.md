# Endnotes 对象

 **Endnote** 对象的集合，该集合中的对象代表所选内容、范围或文档中的所有尾注。

## 说明


使用 **Endnotes** 属性可返回 **Endnotes** 集合。


## 示例


```JavaScript
/*本示例设置活动文档上尾注的位置。*/
function test() {
    ActiveDocument.Endnotes.Location = wdEndOfSection
}
```
使用 **Add** 方法将尾注添加到 **Endnotes** 集合。



```JavaScript
/*本示例在活动文档上添加一个尾注。*/
function test() {
    Selection.Collapse(wdCollapseEnd)
    ActiveDocument.Endnotes.Add(Selection.Range, null, "The Willow Tree, (Lone Creek Press, 1996).")
}
```
使用 **Endnotes** (Index)（其中 Index 是索引号）可返回单个 **Endnote** 对象。索引号表示尾注在所选内容、范围或文档中的位置。



```JavaScript
/*本示例将所选内容中第一个尾注的引用标记的字体颜色设置为红色。*/
function test() {
    if (Application.Selection.Endnotes.Count >= 1) {
        Application.Selection.Endnotes.Item(1).Reference.Font.ColorIndex = wdRed
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/Add) | 返回一个 **Endnote** 对象，该对象代表添加到区域中的尾注。 |
| [Convert](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/Convert) | 将尾注转换为脚注。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/Item) | 返回集合中的单个 **Endnote** 对象。 |
| [ResetContinuationNotice](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/ResetContinuationNotice) | 将尾注延续标记重新设置为默认标记。 |
| [ResetContinuationSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/ResetContinuationSeparator) | 将尾注延续分隔符重新设置为默认分隔符。 |
| [ResetSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/ResetSeparator) | 将尾注分隔符重新设置为默认分隔符。 |
| [SwapWithFootnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/SwapWithFootnotes) | 将一篇文档中的所有尾注转换成脚注或将脚注转换为尾注。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/Application) | 返回一个代表 WPS 应用程序的 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中尾注的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/Location) | 返回或设置所有尾注的位置。 **[WdEndnoteLocation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdEndnoteLocation)** 类型，可读写。 |
| [NumberStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/NumberStyle) | 返回或设置编号样式。可读/写 **WdNoteNumberStyle** 类型。 |
| [NumberingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/NumberingRule) | 返回或设置在分页符或分节符后对尾注进行编号的方式。可读写 **[WdNumberingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdNumberingRule)** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Endnotes** 对象的父对象。 |
| [StartingNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/member/StartingNumber) | 返回或设置注释编号的起始值。可读/写 **Long** 类型。 |