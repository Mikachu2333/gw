# Document.SaveAs2

使用新的名称或格式保存指定的文档。此方法的一些参数与 **“另存为”** 对话框（ **“文件”** 选项卡）中的选项相对应。



## 语法

express.**SaveAs2(FileName, FileFormat, LockComments, Password, AddToRecentFiles, WritePassword, ReadOnlyRecommended, EmbedTrueTypeFonts, SaveNativePictureFormat, SaveFormsData, SaveAsAOCELetter, Encoding, InsertLineBreaks, AllowSubstitutions, LineEnding, AddBiDiMarks, CompatibilityMode)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 可选 | any | 文档的名称。默认值为当前文件夹和文件名。如果从未保存过文档，将使用默认名称（例如，文字文稿1.docx）。如果已经存在具有指定文件名的文档，将覆盖该文档，而不提示用户。 |
| FileFormat | 可选 | any | 文档的保存格式。可以是任何 **[WdSaveFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSaveFormat)** 常量。若要以另一种格式保存文档，请为 **[FileConverter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/obj)** 对象的 **[SaveFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/SaveFormat)** 属性指定适当的值。 |
| LockComments | 可选 | any | 如果该属性值为 **True** ，则锁定文档备注。默认值为 **False** 。 |
| Password | 可选 | any | 用于打开文档的密码字符串。 |
| AddToRecentFiles | 可选 | any | 如果该属性值为 **True** ，则将文档添加到“文件”菜单上最近使用的文件列表中。默认值为 **True** 。 |
| WritePassword | 可选 | any | 用于将更改保存到文档的密码字符串。 |
| ReadOnlyRecommended | 可选 | any | 如果该属性值为 **True** ，则每次打开文档时，WPS 都将建议采用只读方式。默认值为 **False** 。 |
| EmbedTrueTypeFonts | 可选 | any | 如果该属性值为 **True** ，则 TrueType 字体随文档一起保存。如果省略，则 EmbedTrueTypeFonts 参数将假定为 **[EmbedTrueTypeFonts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/EmbedTrueTypeFonts)** 属性的值。 |
| SaveNativePictureFormat | 可选 | any | 如果该属性值为 **True** ，则对于从其他系统平台（如 Mac系统）导入的图形，只保存其 Windows 版本。 |
| SaveFormsData | 可选 | any | 如果该属性值为 **True** ，则将用户在窗体中输入的数据保存为记录。 |
| SaveAsAOCELetter | 可选 | any | 如果文档包含附加的邮件，当该属性值为 **True** 时，将文档存为 AOCE 信函（同时保存邮件）。 |
| Encoding | 可选 | any | 用于另存为编码文本文件的文档的代码页或字符集。默认为系统代码页。不能将所有 **[MsoEncoding](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoEncoding)** 常量用于该参数。 |
| InsertLineBreaks | 可选 | any | 在将文档保存为文本文件时，如果该属性值为 **True** ，则在每一行文本后插入换行符。 |
| AllowSubstitutions | 可选 | any | 将文档保存为文本文件时，如果该属性值为 **True** ，则 WPS 可以将一些符号替换为相似的文本。例如，将版权符号显示为（c）。默认值为 **False** 。 |
| LineEnding | 可选 | any | WPS 在另存为文本文件的文档中标记换行符和分段符的方式。可为下列 **[WdLineEndingType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLineEndingType)** 常量之一：wdCRLF（默认）或 wdCROnly。 |
| AddBiDiMarks | 可选 | any | 如果该属性值为 **True** ，则为输出文件添加控制符，以保留原始文档中文本的双向版式。 |
| CompatibilityMode | 可选 | any | 打开文档时，WPS 使用的兼容模式。 **[WdCompatibilityMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdCompatibilityMode)** 常量。默认情况下，如果没有为此参数指定任何值，则 WPS 将输入值 0，该值指定应保留文档的当前兼容模式。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档另存为“Text.rtf”，格式为 RTF。*/
function test() {
    ActiveDocument.SaveAs2("Text.rtf", wdFormatRTF)
}
```


```JavaScript
/*本示例将活动文档保存为纯文本格式，扩展名为“.txt”。*/
function test() {
    // Find position of extension in file name
    let name = ActiveDocument.Name
    let intPos = name.lastIndexOf(".")
    if (intPos <= -1) {
        // If the document has not yet been saved
        // Ask the user to provide a file name
        name = InputBox("Please enter the name of your document.")
    } else {
        // Strip off extension and add ".txt" extension
        name = name.slice(0, intPos)
        name += ".txt"
    }
    ActiveDocument.SaveAs2(name, wdFormatText)
}
```


```JavaScript
/*本示例使用密码保存活动文档。*/
function test() {
    ActiveDocument.SaveAs2(null, null, null, null, null, "Y6dh!et5")
}
```
