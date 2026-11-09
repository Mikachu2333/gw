# Footnote 对象

代表位于页面底端或文字下方的脚注。 **Footnote** 对象是 **Footnotes** 集合的一个成员。 **Footnotes** 集合代表所选内容、范围或文档中的脚注。

## 说明


使用 **Footnotes** (*Index*) 可返回一个 **Footnote** 对象，其中 *Index* 是索引号。索引号代表脚注在所选内容、范围或文档中的位置。


## 示例


```JavaScript
/*本示例将所选内容中的第一个脚注的引用标记的字体颜色设置为红色。*/
function test() {
    let footnotes = Application.Selection.Footnotes
    if (footnotes.Count >= 1) {
        footnotes.Item(1).Reference.Font.ColorIndex = wdRed
    }
}
```
使用 **Add** 方法可将脚注添加到 **Footnotes** 集合。



```JavaScript
/*本示例在活动文档上新建一个脚注，并将该脚注的文档部分的格式设置为加粗格式。*/
function test() {
    Selection.Collapse(wdCollapseEnd)
    let footnote = ActiveDocument.Footnotes.Add(Selection.Range, null, "The Willow Tree, (Lone Creek Press, 1996).")
    footnote.Range.Bold = true
}
```
位于文档或章节末尾的脚注被视为尾注，并包含在 **Endnotes** 集合中。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnote/member/Delete) | 删除指定的脚注。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnote/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnote/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnote/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnote/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Footnote** 对象的父对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnote/member/Range) | 返回一个 **Range** 对象，该对象代表脚注中包含的文档部分。 |
| [Reference](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnote/member/Reference) | 返回一个 **Range** 对象，该对象代表脚注引用标记。 |