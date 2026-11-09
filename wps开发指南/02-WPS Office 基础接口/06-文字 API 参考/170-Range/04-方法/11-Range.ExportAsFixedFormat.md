# Range.ExportAsFixedFormat

将文档的一部分保存为 PDF 或 XPS 格式。



## 语法

express.**ExportAsFixedFormat(OutputFileName, ExportFormat, OpenAfterExport, OptimizeFor, ExportCurrentPage, Item, IncludeDocProps, KeepIRM, CreateBookmarks, DocStructureTags, BitmapMissingFonts, UseISO19005_1, FixedFormatExtClassPtr)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| OutputFileName | 必选 | string | 新的 PDF 或 XPS 文件的路径和文件名。 |
| ExportFormat | 必选 | WdExportFormat | 指定采用 PDF 格式或 XPS 格式。 |
| OpenAfterExport | 可选 | boolean | 导出内容后打开新文件。 |
| OptimizeFor | 可选 | WdExportOptimizeFor | 指定是针对屏幕显示还是打印进行优化。 |
| ExportCurrentPage | 可选 | boolean | 指定是否导出当前页。如果为 **True** ，则导出整个页面。如果为 **False** ，则只导出当前所选内容。 |
| Item | 可选 | WdExportItem | 指定导出过程是只包括文本还是包括文本和标记。 |
| IncludeDocProps | 可选 | boolean | 指定在最新导出的文件中是否包括文档属性。 |
| KeepIRM | 可选 | boolean | 指定在源文档受 IRM 保护的情况下，是否将 IRM 权限复制到 XPS 文档。默认值为 **True** 。 |
| CreateBookmarks | 可选 | WdExportCreateBookmarks | 指定是否导出书签和要导出的书签的类型。 |
| DocStructureTags | 可选 | boolean | 指定是否包含额外数据（如有关内容的流和逻辑组织的信息）以便为屏幕读取器提供帮助。默认值为 **True** 。 |
| BitmapMissingFonts | 可选 | boolean | 指定是否包含文本的位图。当字体许可不允许在 PDF 文件中嵌入某一字体时，将此参数设置为 **True** 。如果为 **False** ，则引用该字体，且查看者的计算机会替换适当的字体（如果此创作的字体不可用）。默认值为 **True** 。 |
| UseISO19005_1 | 可选 | boolean | 指定是否将 PDF 的使用范围限制在按照 ISO 19005-1 标准化的 PDF 子集。如果为 **True** ，生成的文件会更加可靠地自我包含，但由于受到格式的限制，可能会导致该文件较大或显示更多的可视项目。默认值为 **False** 。 |
| FixedFormatExtClassPtr | 可选 | any | 指定一个指针以指向一个允许对代码的备用实现进行调用的加载项。代码的备用实现将对应用程序生成的 EMF 和 EMF+ 页面描述进行解释，以生成其自身的 PDF 或 XPS。有关详细信息，请参阅“扩展 Automation Services 中的固定格式导出功能”。 |

## 返回值

void

## 说明


只有在安装外接程序后，才能在 WPS 程序中另存为 XPS 文件。



## 示例


```JavaScript
/*本示例以 PDF 格式保存所选区域。*/
function test() {
    Selection.Range.ExportAsFixedFormat("D:\\示例\\example_1.pdf", wdExportFormatPDF, false, wdExportOptimizeForOnScreen, true, wdExportDocumentWithMarkup, true, false, wdExportCreateHeadingBookmarks, true, true, false)
}
```


```JavaScript
/*本示例以 PDF 格式保存第一个文档的主文档文章，并通知用户。*/
function test() {
    Documents.Item(1).Content.ExportAsFixedFormat("D:\\示例\\example_2.pdf", wdExportFormatPDF)
    alert("已经以 PDF 格式保存第一个文档的主文档文章")
}
```
