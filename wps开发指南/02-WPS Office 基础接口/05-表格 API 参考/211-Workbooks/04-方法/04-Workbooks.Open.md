# Workbooks.Open

打开一个工作簿。



## 语法

express.**Open(Filename, UpdateLinks, ReadOnly, Format, Password, WriteResPassword, IgnoreReadOnlyRecommended, Origin, Delimiter, Editable, Notify, Converter, AddToMru, Local, CorruptLoad)**

express   一个代表 **Workbooks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | String. 要打开的工作簿的文件名。 |
| UpdateLinks | 可选 | any | 指定更新文件中外部引用（链接）的方式，如下面的公式 =SUM(\[Budget.xls\]Annual!C10:C25) 中对 Budget.xls 工作簿中某个区域的引用。如果省略此参数，则提示用户指定链接的更新方式。有关此参数所用值的详细信息，请参阅“说明”部分。如果 ET 正在打开 WKS、WK1 或 WK3 格式的文件，并且 UpdateLinks 参数为 0，则不创建任何图表；否则 ET 根据附加于该文件的图形生成图表。 |
| ReadOnly | 可选 | any | 如果为 True，则以只读模式打开工作簿。 |
| Format | 可选 | any | 如果 ET 正在打开文本文件，则由此参数指定分隔符。如果省略此参数，则使用当前的分隔符。有关此参数值的详细信息，请参阅“备注”部分。 |
| Password | 可选 | any | 一个字符串，包含打开受保护工作簿所需的密码。如果省略此参数并且工作簿已设置密码，则提示用户输入密码。 |
| WriteResPassword | 可选 | any | 一个字符串，包含写入受保护工作簿所需的密码。如果省略此参数并且工作簿已设置密码，则提示用户输入密码。 |
| IgnoreReadOnlyRecommended | 可选 | any | 如果为 True，则不让 ET 显示只读的建议消息（如果该工作簿以“建议只读”选项保存）。 |
| Origin | 可选 | any | 如果该文件为文本文件，则此参数用于指示该文件来源于何种操作系统（以便正确映射代码页和回车/换行符 (CR/LF)）。可为以下 XlPlatform 常量之一：xlMacintosh、xlWindows 或 xlMSDOS。如果省略此参数，则使用当前操作系统。 |
| Delimiter | 可选 | any | 如果该文件为文本文件并且 Format 参数为 6，则此参数是一个字符串，指定用作分隔符的字符。例如，可使用 Chr(9) 代表制表符，使用“,”代表逗号，使用“;”代表分号，或者使用自定义字符。只使用字符串的第一个字符。 |
| Editable | 可选 | any | 如果文件为 ET 4.0 加载宏，则此参数为 True 时可打开该加载宏以使其在窗口中可见。如果此参数为 False 或被省略，则以隐藏方式打开加载宏，并且无法设为可见。本选项不能应用于由 ET 5.0 或更高版本的 ET 创建的加载宏。如果文件是 ET 模板，则参数值为 True 时，会打开指定模板进行编辑。参数值为 False 时，可根据指定模板打开新的工作簿。默认值为 False。 |
| Notify | 可选 | any | 当文件不能以可读写模式打开时，如果此参数为 True，则可将该文件添加到文件通知列表。ET 将以只读模式打开该文件并轮询文件通知列表，并在文件可用时向用户发出通知。如果此参数为 False 或被省略，则不请求任何通知，并且不能打开任何不可用的文件。 |
| Converter | 可选 | any | 打开文件时试用的第一个文件转换器的索引。首先试用的是指定的文件转换器；如果该转换器不能识别此文件，则试用所有其他转换器。转换器索引由 FileConverters 属性返回的转换器行号组成。 |
| AddToMru | 可选 | any | 如果为 True，则将该工作簿添加到最近使用的文件列表中。默认值为 False。 |
| Local | 可选 | any | 如果为 True，则以 ET（包括控制面板设置）的语言保存文件。如果为 False（默认值），则以 示例代码 (VBA) 语言保存文件。VBA 通常为美国英语版本，除非从中运行 Workbooks.Open 的 VBA 项目是旧的国际化 XL5/95 VBA 项目。 |
| CorruptLoad | 可选 | any | 可为以下常量之一：xlNormalLoad、xlRepairFile 和 xlExtractData。如果未指定任何值，则默认行为是 xlNormalLoad，并且当通过 OM 启动时不尝试恢复状态。 |

## 返回值

一个代表打开的工作簿的 [Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)对象。

## 说明


默认情况下，以编程方式打开文件时将启用宏。使用 [AutomationSecurity](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoAutomationSecurity) 属性可设置以编程方式打开文件时所用的宏安全模式。

可在 *UpdateLinks* 参数中指定下面的一个值，以确定在工作簿打开时是否更新外部引用（链接）：

| 值 | 含义                 |
| - | ------------------ |
| 0 | 工作簿打开时不更新外部引用（链接）。 |
| 3 | 工作簿打开时更新外部引用（链接）。  |

您可在 *Format* 参数中指定下面的一个值，以确定文件的分隔字符：

| Value | 分隔符                     |
| ----- | ----------------------- |
| 1     | 标签                      |
| 2     | 逗号                      |
| 3     | 空格                      |
| 4     | 分号                      |
| 5     | null                 |
| 6     | 自定义字符（请参阅 Delimiter 参数） |



## 示例


```JavaScript
/*本示例打开 Analysis.xls 工作簿，然后运行它的 Auto_Open 宏。*/
function test() {
    Application.Workbooks.Open("Analysis.xls")
    Application.ActiveWorkbook.RunAutoMacros(xlAutoOpen)
}
```


```JavaScript
/*本示例判断如果活动工作簿的名称不是Analysis.xlsx，则以只读方式打开Analysis.xlsx。*/
function test() {
    if (Application.ActiveWorkbook.Name != "Analysis.xlsx") {
        Application.Workbooks.Open("D:\\Analysis.xlsx", undefined, true)
    }
}
```
