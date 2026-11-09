# PageNumbers 对象

 **PageNumber** 对象的集合，这些对象代表单个页眉或页脚中的页码。

## 说明


使用 **PageNumbers** 属性可返回 **PageNumbers** 集合。


## 示例


```JavaScript
/*本示例设置活动文档的第一节的主页脚的页码的起始值。*/
function test() {
    ActiveDocument.Sections.Item(1).Footers.Item(wdHeaderFooterPrimary).PageNumbers.StartingNumber = 3
}
```
使用 **Add** 方法可向页眉或页脚添加页码。



```JavaScript
/*本示例在活动文档的第一节的主页脚中添加页码。*/
function test() {
    ActiveDocument.Sections.Item(1).Footers.Item(wdHeaderFooterPrimary).PageNumbers.Add(wdAlignPageNumberLeft, false)
}
```
要在含有多个节的文档中添加或更改页码，需修改每节中的页码，或将 **LinkToPrevious** 属性设置为 **True** 。

使用 **PageNumbers** (_index_) 可返回一个 **PageNumber** 对象，其中 _index_ 为索引号。大多数情况下，一个页眉或页脚只包含一个页码（索引号为 1）。



```JavaScript
/*本示例将活动文档的第一节的主页眉中的第一个页码设置为居中对齐。*/
function test() {
    ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers.Item(1).Alignment = wdAlignPageNumberCenter
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumbers/member/Add) | 返回一个 **PageNumber** 对象，该对象代表添加到节中的页眉或页脚中的页码。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumbers/member/Item) | 返回集合中的单个 **PageNumber** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ChapterPageSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumbers/member/ChapterPageSeparator) | 返回或设置章节号和页码之间的分隔字符。可读/写 **[WdSeparatorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSeparatorType)** 类型。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumbers/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的页码数。只读。 |
| [HeadingLevelForChapter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumbers/member/HeadingLevelForChapter) | 返回或设置文档中章节标题应用的标题级别样式。 **Long** 类型，可读写。 |
| [IncludeChapterNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumbers/member/IncludeChapterNumber) | 如果页码或题注标签中包含章节号，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [NumberStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumbers/member/NumberStyle) | 返回或设置一个 **[WdPageNumberStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPageNumberStyle)** 常量，该常量代表编号样式。可读/写。 |
| [RestartNumberingAtSection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumbers/member/RestartNumberingAtSection) | 如果页码在指定节的开头重新从 1 开始，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowFirstPageNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumbers/member/ShowFirstPageNumber) | 如果在节中第一页显示页码，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [StartingNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumbers/member/StartingNumber) | 返回或设置注释编号、行号或页码的起始值。可读/写 **Long** 类型。 |