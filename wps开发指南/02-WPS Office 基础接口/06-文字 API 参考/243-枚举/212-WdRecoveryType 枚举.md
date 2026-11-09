# WdRecoveryType 枚举

指定要在粘贴所选的表格单元格时使用的格式。

| 名称                                            | 值  | 说明                               |
| --------------------------------------------- | -- | -------------------------------- |
| **wdChart**                                   | 14 | 将ET 图表粘贴为嵌入的 OLE 对象。             |
| **wdChartLinked**                             | 15 | 粘贴 ET 图表并将其链接到原始 ET 电子表格。        |
| **wdChartPicture**                            | 13 | 将 ET 图表粘贴为图片。                    |
| **wdFormatOriginalFormatting**                | 16 | 保留所粘贴材料的原始格式。                    |
| **wdFormatPlainText**                         | 22 | 粘贴为无格式的纯文本文字。                    |
| **wdFormatSurroundingFormattingWithEmphasis** | 20 | 使所粘贴文本的格式与周围文本的格式匹配。             |
| **wdListCombineWithExistingList**             | 24 | 将粘贴的列表与邻近的列表合并。                  |
| **wdListContinueNumbering**                   | 7  | 使粘贴的列表根据文档中的列表继续编号。              |
| **wdListDontMerge**                           | 25 | 不支持。                             |
| **wdListRestartNumbering**                    | 8  | 对粘贴的列表重新进行编号。                    |
| **wdPasteDefault**                            | 0  | 不支持。                             |
| **wdSingleCellTable**                         | 6  | 将单个单元格表格粘贴为独立的表格。                |
| **wdSingleCellText**                          | 5  | 将单个单元格粘贴为文本。                     |
| **wdTableAppendTable**                        | 10 | 通过在所选行之间插入粘贴的行，将粘贴的单元格合并到现有的表格中。 |
| **wdTableInsertAsRows**                       | 11 | 将粘贴的表格作为行插入到目标表格的两行中间。           |
| **wdTableOriginalFormatting**                 | 12 | 粘贴一个追加的表格，而不合并表格样式。              |
| **wdTableOverwriteCells**                     | 23 | 粘贴表格单元格并覆盖现有的表格单元格。              |
| **wdUseDestinationStylesRecovery**            | 19 | 使用目标文档中使用的样式。                    |
