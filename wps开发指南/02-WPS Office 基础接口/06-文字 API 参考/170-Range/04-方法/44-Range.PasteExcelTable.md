# Range.PasteExcelTable

粘贴 ET 表格并设置其格式。



## 语法

express.**PasteExcelTable(LinkedToExcel, WordFormatting, RTF)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| LinkedToExcel | 必选 | boolean | 如果该参数值为 **True** ，则将粘贴的表格链接到原始 ET 文件，以便对 ET 文件所做的更改可以反映到 WPS 中。 |
| WordFormatting | 必选 | boolean | 如果该参数值为 **True** ，则按照 WPS 文档中的格式设置表格的格式。如果该参数值为 **False** ，则按照原始 ET 文件中的格式设置表格的格式。 |
| RTF | 必选 | boolean | 如果该参数值为 **True** ，则使用 RTF 格式粘贴 ET 表格。如果该参数值为 **False** ，则以 HTML 格式粘贴 ET 表格。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将 ET 表格粘贴到活动文档的所选区域中。示例中的参数指定粘贴的表格链接到 ET 文件、保留原始 ET 格式并粘贴为 RTF 格式。该示例假定“剪贴板”中包含一个 ET 表格。*/
function test() {
    Selection.Range.PasteExcelTable(true, false, true)
}
```


```JavaScript
/*本示例将 ET 表格粘贴到活动文档的主文档文章中。该示例假定“剪贴板”中包含一个 ET 表格。*/
function test() {
    ActiveDocument.Content.PasteExcelTable(false, true, false)
}
```
