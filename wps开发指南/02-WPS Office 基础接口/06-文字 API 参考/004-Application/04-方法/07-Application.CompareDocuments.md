# Application.CompareDocuments

比较两个文档，并返回一个 **Document** 对象，该对象表示包含两个文档之间的差别的文档，该文档用修订进行标记。



## 语法

express.**CompareDocuments(OriginalDocument, RevisedDocument, Destination, Granularity, CompareFormatting, CompareCaseChanges, CompareWhitespace, CompareTables, CompareHeaders, CompareFootnotes, CompareTextboxes, CompareFields, CompareComments, CompareMoves, RevisedAuthor, IgnoreAllComparisonWarnings)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| OriginalDocument | 必选 | Document | 指定原始文档的路径和文件名。 |
| RevisedDocument | 必选 | Document | 指定与原始文档进行比较的修订后文档的路径和文件名。 |
| Destination | 可选 | WdCompareDestination | 指定是创建新文件还是在原始文档或修订后文档中标记两个文档之间的差别。默认值为 **wdCompareDestinationNew** 。 |
| Granularity | 可选 | WdGranularity | 指定是按字符还是按字词进行修订。默认值为 **wdGranularityWordLevel** 。 |
| CompareFormatting | 可选 | boolean | 指定是否标记两个文档之间的格式差别。默认值为 **True** 。 |
| CompareCaseChanges | 可选 | boolean | 指定是否标记两个文档之间的大小写差别。默认值为 **True** 。 |
| CompareWhitespace | 可选 | boolean | 指定是否标记两个文档之间的空白区域（如段落或间距）差别。默认值为 **True** 。 |
| CompareTables | 可选 | boolean | 指定是否比较两个文档之间的表中所包含数据的差别。默认值为 **True** 。 |
| CompareHeaders | 可选 | boolean | 指定是否比较两个文档之间的页眉和页脚的差别。默认值为 **True** 。 |
| CompareFootnotes | 可选 | boolean | 指定是否比较两个文档之间的脚注和尾注的差别。默认值为 **True** 。 |
| CompareTextboxes | 可选 | boolean | 指定是否比较两个文档之间的文本框中所包含数据的差别。默认值为 **True** 。 |
| CompareFields | 可选 | boolean | 指定是否比较两个文档之间的域的差别。默认值为 **True** 。 |
| CompareComments | 可选 | boolean | 指定是否比较两个文档之间的批注的差别。默认值为 **True** 。 |
| CompareMoves | 可选 | boolean | 指定是否比较两个文档之间的移动差异。默认值为 **True** 。 |
| RevisedAuthor | 可选 | string | 指定在比较两个文档时做出更改的人员的姓名。 |
| IgnoreAllComparisonWarnings | 可选 | boolean | 指定在比较两个文档时是否忽视警告消息。 |

## 返回值

Document

## 示例


```JavaScript
/*本示例比较第一个文档和第二个文档。*/
function test() {
    Application.CompareDocuments(Documents.Item(1), Documents.Item(2))
}
```


```JavaScript
/*本示例将活动文档与名为“example.docx”的文档进行比较。*/
function test() {
    Application.CompareDocuments(ActiveDocument, Documents.Item("example1.docx"), wdCompareDestinationOriginal, wdGranularityCharLevel, false, false, true, false, true, true, false, false, true, false, "example", true)
}
```
