# TablesOfContents.Add

返回一个 **TableOfContents** 对象，该对象代表添加到文档中的目录。



## 语法

express.**Add(Range, UseHeadingStyles, UpperHeadingLevel, LowerHeadingLevel, UseFields, TableID, RightAlignPageNumbers, IncludePageNumbers, AddedStyles, UseHyperlinks, HidePageNumbersInWeb, UseOutlineLevels)**

express   一个代表 **TablesOfContents** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 目录出现的区域。如果该区域未折叠，目录将替换该区域。 |
| UseHeadingStyles | 可选 | any | 如果为 **True** ，则使用内置标题样式创建目录。默认值为 **True** 。 |
| UpperHeadingLevel | 可选 | any | 目录的起始标题级别。对应于使用 \\o 开关的目录（TOC）域的起始值。默认值为 1。 |
| LowerHeadingLevel | 可选 | any | 目录的结束标题级别。对应于使用 \\o 开关的目录（TOC）域的结束值。默认值为 9。 |
| UseFields | 可选 | any | 如果目录项（TC）域用于创建目录，则为 **True** 。可用 **MarkEntry** 方法标记要包括在目录中的各项。默认值为 **False** 。 |
| TableID | 可选 | any | 用于从 TC 域创建目录的单字母标识符。对应于目录（TOC）域中的 \\f 开关。例如，“T”表示使用表格标识符 T 从 TC 域建立目录。如果省略此参数，则不使用 TC 域。 |
| RightAlignPageNumbers | 可选 | any | 如果目录中的页码与右边距对齐，则为 **True** 。默认值为 **True** 。 |
| IncludePageNumbers | 可选 | any | 如果为 **True** ，则在目录中包含页码。默认值为 **True** 。 |
| AddedStyles | 可选 | any | 用来编译目录的其他样式的字符串名称（标题 1 – 标题 9 样式之外的样式）。可用 **[HeadingStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadingStyles/obj)** 对象的 **Add** 方法创建新的标题样式。 |
| UseHyperlinks | 可选 | any | 如果在文档被发布到网站上时，目录中的各项应转为超链接格式，则为 **True** 。默认值为 **True** 。 |
| HidePageNumbersInWeb | 可选 | any | 如果在文档被发布到网站上时，目录中的页码应隐藏，则为 **True** 。默认值为 **True** 。 |
| UseOutlineLevels | 可选 | any | 如果为 **True** ，则使用大纲级别创建目录。默认值为 **False** 。 |

## 返回值

TableOfContents

## 示例


```JavaScript
/*本示例在活动文档的开头添加一个目录。该目录是根据样式为标题 1、标题 2、标题 3 和自定义样式“style”的段落样式创建的。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    ActiveDocument.TablesOfContents.Add(range, true, 1, 3, false, null, null, null, "style")
}
```


```JavaScript
/*本示例在第一个文档的所选位置添加一个目录。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    tablesOfContents.Add(Selection.Range, true, 1, 2, false, "A", true, false, null, true, true, true)
}
```
