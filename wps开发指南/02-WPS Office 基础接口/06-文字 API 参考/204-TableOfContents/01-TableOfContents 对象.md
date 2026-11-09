# TableOfContents 对象

代表文档中的一个目录。 **TableOfContents** 对象是 **[TablesOfContents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfContents/obj)** 集合的一个成员。 **TablesOfContents** 集合包含文档中的所有目录。

## 说明


使用 **TablesOfContents** (_Index_) 可返回一个 **TableOfContents** 对象，其中 _Index_ 为索引号。索引号代表目录在文档中的位置。


## 示例


```JavaScript
/*本示例更新活动文档上第一个目录中项目的页码。*/
function test() {
    ActiveDocument.TablesOfContents.Item(1).UpdatePageNumbers()
}
```
使用 **Add** 方法可向文档中添加目录。



```JavaScript
/*本示例在活动文档的开头添加目录，并设置目录中不包含页码，然后更新目录中显示的项。该示例根据具有“标题 1”、“标题 2”或“标题 3”样式的所有段落生成目录。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    let tableOfContents = ActiveDocument.TablesOfContents.Add(range, true, 1, 3, false)
    tableOfContents.IncludePageNumbers = false
    tableOfContents.Update()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/Delete) | 删除指定的目录。 |
| [Update](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/Update) | 更新目录中显示的项。 |
| [UpdatePageNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/UpdatePageNumbers) | 更新指定的目录中项目的页码。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [HeadingStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/HeadingStyles) | 返回一个 **[HeadingStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadingStyles/obj)** 对象，该对象代表用于编译目录或图表目录的其他样式（标题 1 至标题 9 以外的样式）。只读。 |
| [HidePageNumbersInWeb](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/HidePageNumbersInWeb) | 返回或设置向网站发布时是否隐藏目录或图表目录中的页码。 **Boolean** 类型，可读写。 |
| [IncludePageNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/IncludePageNumbers) | 如果目录中包含页码，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [LowerHeadingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/LowerHeadingLevel) | 返回或设置目录或图表目录的结束标题级别。可读写 **Long** 类型。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/Range) | 返回一个 **Range** 对象，该对象代表指定目录中所含的文档部分。 |
| [RightAlignPageNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/RightAlignPageNumbers) | 如果页码与目录的右边距对齐，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [TabLeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/TabLeader) | 返回或设置索引、引文目录、目录或图表目录中的项目及其页码之间的字符。可读写 **[WdTabLeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdTabLeader)** 类型。 |
| [TableID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/TableID) | 返回或设置用于从 TOC 域生成目录的单字母标识符。可读写 **String** 类型。 |
| [UpperHeadingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/UpperHeadingLevel) | 返回或设置目录的起始标题级别。可读写 **Long** 类型。 |
| [UseFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/UseFields) | 如果使用目录项（TC）域创建目录或图表目录，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [UseHeadingStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/UseHeadingStyles) | 如果使用内置标题样式创建目录，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [UseHyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/UseHyperlinks) | 返回或设置在网站上发布目录项时是否将其设置为超链接格式。可读写 **Boolean** 类型。 |