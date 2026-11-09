# TableOfFigures 对象

代表文档中的单个图表目录。 **TableOfFigures** 对象是 **[TablesOfFigures](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfFigures/obj)** 集合的一个成员。 **TablesOfFigures** 集合包含文档中的所有图表目录。

## 说明


使用 **TablesOfFigures** (_Index_) 可返回一个 **TableOfFigures** 对象，其中 _Index_ 为索引号。索引号代表图表目录在文档中的位置。


## 示例


```JavaScript
/*本示例更新活动文档中的第一个图表目录中项目的页码。*/
function test() {
    ActiveDocument.TablesOfFigures.Item(1).UpdatePageNumbers()
}
```
使用 **Add** 方法可向文档中添加图表目录。图表目录将图表标题按其在文档中出现的顺序列出。



```JavaScript
/*本示例将活动文档中的选定内容替换为包含题注标签和页码的图表目录，并设置该图表目录的题注。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Add(Selection.Range, null, true, null, null, null, null, null, null, true)
    tableOfFigures.Caption = "example"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/Delete) | 删除指定的图表目录。 |
| [Update](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/Update) | 更新图表目录中显示的项。 |
| [UpdatePageNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/UpdatePageNumbers) | 更新图表目录中项目的页码。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/Caption) | 返回或设置标识图表目录中的项目的标签。 **String** 类型，可读写。 |
| [HeadingStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/HeadingStyles) | 返回一个 **[HeadingStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadingStyles/obj)** 对象，该对象代表用于编译目录或图表目录的其他样式（标题 1 至标题 9 以外的样式）。只读。 |
| [HidePageNumbersInWeb](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/HidePageNumbersInWeb) | 返回或设置向网站发布时是否隐藏目录或图表目录中的页码。 **Boolean** 类型，可读写。 |
| [IncludeLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/IncludeLabel) | 如果在图表目录中包含题注标签和题注编号，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [IncludePageNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/IncludePageNumbers) | 如果图表目录中包含页码，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [LowerHeadingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/LowerHeadingLevel) | 返回或设置图表目录的结束标题级别。可读写 **Long** 类型。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/Range) | 返回一个 **Range** 对象，该对象代表指定图表目录中所含的文档部分。 |
| [RightAlignPageNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/RightAlignPageNumbers) | 如果页码与图表目录的右边缘对齐，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [TabLeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/TabLeader) | 返回或设置图表目录中的目录项及其页码之间的字符。可读写 **[WdTabLeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdTabLeader)** 类型。 |
| [TableID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/TableID) | 返回或设置用于从 TOC 域生成图表目录的单字母标识符。可读写 **String** 类型。 |
| [UpperHeadingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/UpperHeadingLevel) | 返回或设置图表目录的起始标题级别。可读写 **Long** 类型。 |
| [UseFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/UseFields) | 如果使用目录项 (TC) 域创建图表目录，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [UseHeadingStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/UseHeadingStyles) | 如果使用内置标题样式创建图表目录，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [UseHyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/UseHyperlinks) | 返回或设置在网站上发布图表目录项时是否将其设为超链接格式。可读写 **Boolean** 类型。 |