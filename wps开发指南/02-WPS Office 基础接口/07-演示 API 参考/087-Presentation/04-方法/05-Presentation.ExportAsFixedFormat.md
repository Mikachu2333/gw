# Presentation.ExportAsFixedFormat

将 WPP 演示文稿的副本发布为固定格式的文件（PDF 或 XPS）。



## 语法

express.**ExportAsFixedFormat(Path, FixedFormatType, Intent, FrameSlides, HandoutOrder, OutputType, PrintHiddenSlides, PrintRange, RangeType, SlideShowName, IncludeDocProperties, KeepIRMSettings, DocStructureTags, BitmapMissingFonts, UseISO19005_1, ExternalExporter)**

express   一个代表 **Presentation** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Path | 必选 | string | 导出的路径。 |
| FixedFormatType | 必选 | PpFixedFormatType | 导出幻灯片时应采用的格式。 |
| Intent | 可选 | PpFixedFormatIntent | 导出的目的。 |
| FrameSlides | 可选 | MsoTriState | 要导出的幻灯片是否应当带有边框。 |
| HandoutOrder | 可选 | PpPrintHandoutOrder | 打印讲义时应遵循的顺序。 |
| OutputType | 可选 | PpPrintOutputType | 输出的类型。 |
| PrintHiddenSlides | 可选 | MsoTriState | 是否打印隐藏的幻灯片。 |
| PrintRange | 可选 | PrintRange | 幻灯片范围可以是 null。 |
| RangeType | 可选 | PpPrintRangeType | 幻灯片范围的类型。 |
| SlideShowName | 可选 | string | 幻灯片放映的名称。 |
| IncludeDocProperties | 可选 | boolean | 是否还应导出的文档属性。默认值为 **False** 。 |
| KeepIRMSettings | 可选 | boolean | 是否还应导出 IRM 设置，如果 *FixedFormatType* 为 *PpFixedFormatTypePDF*，则此标志确定是否应导出标签和 IRM 设置。默认值为 **True** 。 |
| DocStructureTags | 可选 | boolean | 是否包括文档结构标记，以改进文档的辅助功能。默认值为 **True** 。 |
| BitmapMissingFonts | 可选 | boolean | 是否包含文本的位图。默认值为 **True** 。 |
| UseISO19005_1 | 可选 | boolean | 所得到的文档是否符合 ISO 19005 1 (PDF/A)。默认值为 **False** 。 |
| ExternalExporter | 可选 | any | 一个指向 Office 加载项实现 **IMsoDocExporter** COM 接口，并允许对备用实现的代码的调用。默认值是一个空指针。 |

## 返回值

void

## 说明


 **ExportAsFixedFormat** 方法等效于在 WPP 用户界面 **文件** 菜单上的 **另存为 PDF 或 XPS** 命令。该方法将创建一个包含当前演示文稿的静态视图文件。

*FixedFormatType* 参数值可以是下列 **PpFixedFormatType** 常量之一：

| 常量 | 值 | 说明 |
| --- | --- | --- |
| **ppFixedFormatTypePDF**  | 2 | 导出为 PDF 格式。 |
| **ppFixedFormatTypeXPS** | 1 | 导出为 XPS 格式。 |

*Intent* 参数值可以是下列 **PpFixedFormatIntent** 常量之一：

| 常量 | 说明 |
| --- | --- |
| **ppFixedFormatIntentPrint**  | 旨在在线发布和打印。 |
| **ppFixedFormatIntentScreen** | 默认值。旨在仅联机发布。 |

*FrameSlides* 参数值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --- | --- |
| **msoFalse**  | 默认值。不给导出的幻灯片加上边框。 |
| **msoTrue** | 给导出的幻灯片加上边框。 |

*HandoutOrder* 参数值可以是下列 **PpPrintHandoutOrder** 常量之一：

| 常量 | 说明 |
| --- | --- |
| **ppPrintHandoutHorizontalFirst**  | 以首先在水平行中水平显示连续幻灯片的格式打印讲义。 |
| **ppPrintHandoutVerticalFirst** | 默认值。以首先在垂直列中垂直显示连续幻灯片的格式打印讲义。 |

*OutputType* 参数值可以是下列一个或多个 **PpPrintOutputType** 常量的组合：

| 常量 | 说明 |
| --- | --- |
| **ppPrintOutputBuildSlides**  |  |
| **ppPrintOutputFourSlideHandouts** | 每个讲义页打印四张幻灯片。 |
| **ppPrintOutputNineSlideHandouts** | 每个讲义页打印九张幻灯片。 |
| **ppPrintOutputNotesPages**  | 打印备注页。 |
| **ppPrintOutputOneSlideHandouts** | 每个讲义页打印一张幻灯片。 |
| **ppPrintOutputOutline** | 打印大纲视图。 |
| **ppPrintOutputSixSlideHandouts** | 每个讲义页打印六张幻灯片。 |
| **ppPrintOutputSlides**  | 打印演示文稿中的所有幻灯片。默认值。 |
| **ppPrintOutputThreeSlideHandouts** | 每个讲义页打印三张幻灯片。 |
| **ppPrintOutputTwoSlideHandouts** | 每个讲义页打印两张幻灯片。 |

*PrintHiddenSlides* 参数值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --- | --- |
| **msoFalse**  | 默认值。不打印隐藏的幻灯片。 |
| **msoTrue** | 打印隐藏的幻灯片。 |

*RangeType* 参数值可以是下列 **PpPrintRangeType** 常量之一：

| 常量 | 说明 |
| --- | --- |
| **ppPrintAll**  | 默认值。导出所有幻灯片。 |
| **ppPrintCurrent** | 仅导出当前幻灯片。 |
| **ppPrintNamedSlideShow** | 导出以 *SlideShowName* 指定的命名（自定义）幻灯片放映。 |
| **ppPrintSelection**  | 导出选定的幻灯片。 |
| **ppPrintSlideRange** | 导出指定的幻灯片范围。 |

如果字体许可不允许你在 PDF 文件中嵌入字体，请将 *BitmapMissingFonts* 设置为 **True** 。如果将此参数设置为 **False** ，则引用该字体，和查看者的计算机会替换合适的字体，如果编写的一个不可用。

*KeepIRMSettings* 参数的行为特别适用于 PDF。它控制对输出文件的标签和加密的保留。

*PrintRange* 参数是必需的，但对于所有参数，都可以设置为 null。

如果未完全下载演示文稿，此方法将失败并发生错误。



## 示例


```JavaScript
/*本示例使用 ExportAsFixedFormat 方法将当前演示文稿以名为 test.pdf 的 .pdf 文件格式导出到 TestFile 文件夹。*/
function test() {
    ActivePresentation.ExportAsFixedFormat("D:\\TestFile\\test.pdf", ppFixedFormatTypePDF, ppFixedFormatIntentScreen, msoTrue, ppPrintHandoutHorizontalFirst, ppPrintOutputBuildSlides, msoFalse, null, null, null, false, false, false, false, false)
}
```


```JavaScript
/*本示例将第一篇演示文稿以名为 test 的 .pdf 文件格式导出到 C:/Document 文件夹。*/
function test() {
    Presentations.Item(1).ExportAsFixedFormat("C:/Document/test.pdf", ppFixedFormatTypePDF, ppFixedFormatIntentPrint, msoFalse, ppPrintHandoutVerticalFirst, ppPrintOutputOneSlideHandouts)
}
```
