# Workbook.SaveAs

在另一不同文件中保存对工作簿所做的更改。



## 语法

express.**SaveAs(Filename, FileFormat, Password, WriteResPassword, ReadOnlyRecommended, CreateBackup, AccessMode, ConflictResolution, AddToMru, TextCodepage, TextVisualLayout, Local)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 可选 | any | 一个表示要保存文件的文件名的字符串。可包含完整路径，如果不指定路径，ET 将文件保存到当前文件夹中。 |
| FileFormat | 可选 | any | 保存文件时使用的文件格式。要查看有效的选项列表，请参阅 XlFileFormat 枚举。对于现有文件，默认采用上一次指定的文件格式；对于新文件，默认采用当前所用 ET 版本的格式。 |
| Password | 可选 | any | 它是一个区分大小写的字符串（最长不超过 15 个字符），用于指定文件的保护密码。 |
| WriteResPassword | 可选 | any | 一个表示文件写保护密码的字符串。如果文件保存时带有密码，但打开文件时不输入密码，则该文件以只读方式打开。 |
| ReadOnlyRecommended | 可选 | any | 如果为 True，则在打开文件时显示一条消息，提示该文件以只读方式打开。 |
| CreateBackup | 可选 | any | 如果为 True，则创建备份文件。 |
| AccessMode | 可选 | XlSaveAsAccessMode | 工作簿的访问模式。 |
| ConflictResolution | 可选 | any | 一个 XlSaveConflictResolution 值，它确定该方法在保存工作簿时如何解决冲突。如果设为 xlUserResolution，则显示冲突解决对话框。如果设为 xlLocalSessionChanges，则自动接受本地用户的更改。如果设为 xlOtherSessionChanges，则自动接受来自其他会话的更改（而不是本地用户的更改）。如果省略此参数，则显示冲突处理对话框。 |
| AddToMru | 可选 | any | 如果为 True，则将该工作簿添加到最近使用的文件列表中。默认值为 False。 |
| TextCodepage | 可选 | any | ET中对于所有语言都忽略此参数。 注释:当 ET 将工作簿保存为某种 CSV 或文本格式（使用 FileFormat 参数指定）时， ET 使用对应于当前计算机上使用的系统区域设置语言的代码页。在“控制面板”中单击“区域和语言”，再单击“位置”选项卡，在“当前位置”下可获得此系统设置。 |
| TextVisualLayout | 可选 | any | ET中对于所有语言都忽略此参数。 注释:当 ET 将工作簿保存为某种 CSV 或文本格式（使用 FileFormat 参数指定）时，它按逻辑布局保存这些格式。如果文件中左至右 (LTR) 文本嵌在右至左 (RTL) 文本中，或者相反，那么逻辑布局将把文件的内容，按照文件中所有语言的正确阅读顺序保存，而不考虑方向。当应用程序打开文件时，每串 LTR 或 RTL 字符将根据代码页中的字符值范围，按照正确的方向呈现。（除非用来打开文件的应用程序是为显示文件的确切内存布局而设计的应用程序，如调试器或编辑器）。 |
| Local | 可选 | any | 如果为 True，则以 ET（包括控制面板设置）的语言保存文件。如果为 False（默认值），则以 示例代码 (VBA) 的语言保存文件。VBA 通常为美国英语版本，除非从中运行 Workbooks.Open 的 VBA 项目是旧的国际化 XL5/95 VBA 项目。 |

## 返回值

void

## 说明


请使用同时包含大小写字母、数字和符号的强密码。弱密码不混合使用这些元素。强密码：Y6dh!et5。弱密码：House27。请使用您可以记住的强密码，这样就不必将它写下来。



## 示例


```JavaScript
/*本示例演示将活动工作簿另存为 book1.xlsx 并设置打开密码。*/
function test() {
    Application.ActiveWorkbook.SaveAs("book1.xlsx", undefined, "Y6dh!et5")
}
```


```JavaScript
/*本示例新建一个工作簿，提示用户输入文件名，然后保存该工作簿。*/
function test() {
    let NewBook = Application.Workbooks.Add()
    do {
        fName = Application.GetSaveAsFilename()
    }
    while (fName == false)
    NewBook.SaveAs(fName)
}
```
