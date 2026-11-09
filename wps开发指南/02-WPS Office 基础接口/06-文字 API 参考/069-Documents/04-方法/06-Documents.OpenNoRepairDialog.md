# Documents.OpenNoRepairDialog

打开指定的文档并将其添加到 **Documents** 集合。



## 语法

express.**OpenNoRepairDialog(FileName, ConfirmConversions, ReadOnly, AddToRecentFiles, PasswordDocument, PasswordTemplate, Revert, WritePasswordDocument, WritePasswordTemplate, Format, Encoding, Visible, OpenAndRepair, DocumentDirection, NoEncodingDialog, XMLTransform)**

express   一个代表 **Documents** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | any | 文档名（可包含路径）。 |
| ConfirmConversions | 可选 | any | 如果该属性值为 True，则当文件不是 WPS 格式时，将显示“转换文件”对话框。 |
| ReadOnly | 可选 | any | 如果值为 True，则以只读方式打开文档。该参数不会覆盖已保存文档的只读建议设置。例如，如果在只读建议设置打开的情况下保存了文档，则将 ReadOnly 参数设置为 False 不会导致文件以可读/写方式打开。 |
| AddToRecentFiles | 可选 | any | 如果该属性值为 True，则将文件名添加到“文件”菜单底部最近使用过的文件列表中。 |
| PasswordDocument | 可选 | any | 打开文档时所需的密码。 |
| PasswordTemplate | 可选 | any | 打开模板时所需的密码。 |
| Revert | 可选 | any | 控制当 FileName 是一篇打开的文档的名称时应采取的操作。如果该属性值为 True，则放弃对打开文档进行的所有尚未保存的更改，并将重新打开该文件。如果该属性值为 False，则激活打开的文档。 |
| WritePasswordDocument | 可选 | any | 用于保存文档更改的密码。 |
| WritePasswordTemplate | 可选 | any | 用于保存模板更改的密码。 |
| Format | 可选 | any | 用于打开文档的文件转换器。可以是 WdOpenFormat 常量之一。默认值为 wdOpenFormatAuto。 |
| Encoding | 可选 | any | 当您查看已保存文档时 WPS 所使用的文档编码（代码页或字符集）。可以是任何有效的 MsoEncoding 常量。 |
| Visible | 可选 | any | 如果值为 True，则在可见窗口中打开文档。默认值为 True。 |
| OpenAndRepair | 可选 | any | 如果值为 True，则修复文档，以防止文档毁坏。 |
| DocumentDirection | 可选 | any | 表示文档中文字的水平排列方式。可以是任何有效的 WdDocumentDirection 常量。默认值为 wdLeftToRight。 |
| NoEncodingDialog | 可选 | any | 如果值为 True，则跳过显示当无法识别文字编码时 WPS 所显示的“编码”对话框。默认值为 False。 |
| XMLTransform | 可选 | any | 指定要使用的转换。 |

## 返回值

一个代表指定文档的 **Document** 对象。

## 说明


请避免在应用程序中使用硬编码的密码。如果过程中要求输入密码，请从用户处请求密码，并将密码作为变量存储起来，然后在代码中使用该变量。



## 示例


```JavaScript
/*本示例以只读方式打开文档 example.docx。*/
function test() {
    Application.Documents.OpenNoRepairDialog("D:\\example.docx", null, true)
}
```


```JavaScript
/*本示例打开文档 example.docx。*/
function test() {
    Application.Documents.OpenNoRepairDialog("D:\\示例\\example.docx", null, false, true, "Y6dh!et5", null, null, "Y6dh!et5", null, wdOpenFormatAuto, msoEncodingHZGBSimplifiedChinese, true, null, true, wdLeftToRight)
}
```
