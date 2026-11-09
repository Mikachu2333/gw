# TablesOfFigures.Add

返回一个 **TableOfFigures** 对象，该对象代表添加到文档中的图表目录。



## 语法

express.**Add(Range, Caption, IncludeLabel, UseHeadingStyles, UpperHeadingLevel, LowerHeadingLevel, UseFields, TableID, RightAlignPageNumbers, IncludePageNumbers, AddedStyles, UseHyperlinks, HidePageNumbersInWeb)**

express   一个代表 **TablesOfFigures** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 指定图表目录显示的区域。 |
| Caption | 可选 | any | 标识要包括在图表目录中的项目的标签。对应于目录 (TOC) 域中的 \\c 开关。默认值为“Figure”。 |
| IncludeLabel | 可选 | any | 如果为 **True** ，则在图表目录中包含题注标签和标题编号。默认值为 **True** 。 |
| UseHeadingStyles | 可选 | any | 如果为 **True** ，则使用内置标题样式创建图表目录。默认值为 **False** 。 |
| UpperHeadingLevel | 可选 | any | 如果将 _UseHeadingStyles_ 设为 **True** ，则指定图表目录的起始标题级别。对应于使用 \\o 开关的目录 (TOC) 域的起始值。默认值为 1。 |
| LowerHeadingLevel | 可选 | any | 如果将 _UseHeadingStyles_ 设为 **True** ，则指定图表目录的结束标题级别。对应于使用 \\o 开关的目录 (TOC) 域的结束值。默认值为 9。 |
| UseFields | 可选 | any | 如果为 **True** ，则使用目录项 (TC) 域创建图表目录。可用 **MarkEntry** 方法标记要包括在图表目录中的各项。默认值为 **False** 。 |
| TableID | 可选 | any | 用于从目录项 (TC) 域创建图表目录的单字母标识符。对应于目录 (TOC) 域中的 \\f 开关。例如。“i”可创建一个图解的图表目录。 |
| RightAlignPageNumbers | 可选 | any | 如果为 **True** ，则图表目录中的页码与右边距对齐。默认值为 **True** 。 |
| IncludePageNumbers | 可选 | any | 如果图表目录中包含页码，则为 **True** 。默认值为 **True** 。 |
| AddedStyles | 可选 | any | 用于编译图表目录的其他样式的字符串名称（标题 1 – 标题 9 样式之外的其他样式）。 |
| UseHyperlinks | 可选 | any | 如果为 **True** ，那么将文档发布到网站时，图表目录中的目录项将转换为超链接的格式。默认值为 **True** 。 |
| HidePageNumbersInWeb | 可选 | any | 如果在发布到网站上时，图表目录中的页码应隐藏，则为 **True** 。默认值为 **True** 。 |

## 返回值

TableOfFigures

## 示例


```JavaScript
/*本示例将活动文档中的选定内容替换为包含题注标签和页码的图表目录，并设置该图表目录的题注。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Add(Selection.Range)
    tableOfFigures.Caption = "图表"
}
```


```JavaScript
/*本示例添加图表目录以替换选定内容，然后设置目录的格式，使其包含题注标签。*/
function test() {
    let tableOfFigures = ActiveDocument.TablesOfFigures.Add(Selection.Range, "图表", true, false, null, null, null, null, null, true)
    tableOfFigures.IncludeLabel = true
}
```
