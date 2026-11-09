# TextConnection 对象

包含使 ET 能够连接到数据馈送数据源的服务协定设置。


## 示例


```JavaScript
/*本示例设置活动工作表上第一张查询表的文本连接的字符串和文本识别符，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.Connection = "TEXT;D:\\示例\\test3.txt"
    textConnection.TextFileTextQualifier = xlTextQualifierSingleQuote
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```


```JavaScript
/*本示例显示活动工作簿上第一个文本连接的列格式是否为 xlFixedWidth。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileParseType == xlFixedWidth)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Connection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/Connection) | 返回或设置一个字符串，其中包含使 ET 能够连接到文本数据源的文本文件名称。 可读/写 **Variant** 类型。 |
| [TextFileColumnDataTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileColumnDataTypes) | 返回或设置一个有序的常量数组，这些常量指定应用于要导入到工作簿连接中的文本文件中相应列的数据类型。 每一列的默认常量为 **xlGeneral** 。可读/写 **Variant** 类型。 |
| [TextFileCommaDelimiter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileCommaDelimiter) | 如果将文本文件导入工作簿连接中时，以逗号作为分隔符，则该值为 **True** 。 如果以其他字符作为分隔符，则该值为 **False** 。 默认值为 **False** 。 可读/写 **Boolean** 类型。 |
| [TextFileConsecutiveDelimiter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileConsecutiveDelimiter) | 当向工作簿连接中导入文本文件时，如果将连续分隔符看作是一个分隔符，则该值为 **True** 。 默认值为 **False** 。 可读/写 **Boolean** 类型。 |
| [TextFileDecimalSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileDecimalSeparator) | 返回或设置小数分隔符，在将文本文件导入工作簿连接中时，ET 将使用小数分隔符。 默认值为系统小数分隔符。 可读/写 **String** 类型。 |
| [TextFileFixedColumnWidths](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileFixedColumnWidths) | 返回或设置一个整数数组，该数组对应于要导入到工作簿连接中的文本文件中 (以字符) 的列的宽度。 有效的宽度为 1 到 32767 个字符。 可读/写 **Variant** 类型。 |
| [TextFileHeaderRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileHeaderRow) | 返回或设置一个值，该值指定是否应将起始行（的第一行）视为标题行。 可读/写 **Boolean** 类型。 |
| [TextFileOtherDelimiter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileOtherDelimiter) | 返回或设置在向工作簿连接中导入文本文件时用作分隔符的字符。 默认值为 **null** 。 可读/写 **String** 类型。 |
| [TextFileParseType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileParseType) | 返回或设置要导入到工作簿连接中的文本文件中的数据的列格式。可读/写 **[XlTextParsingType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlTextParsingType)** 类型。 |
| [TextFilePlatform](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFilePlatform) | 返回或设置要导入到工作簿连接中的文本文件的来源。 该属性确定在数据导入过程中使用何种代码页。 可读/写 **XlPlatform** 类型。 |
| [TextFilePromptOnRefresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFilePromptOnRefresh) | 如果每次刷新工作簿连接时都要指定导入文本文件的名称，则该属性值为 **True** 。 **“导入文本文件”** 对话框允许用户指定路径和文件名。 默认值为 **False** 。 可读/写 **Boolean** 类型。 |
| [TextFileSemicolonDelimiter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileSemicolonDelimiter) | 如果在将文本文件导入工作簿连接中时分号是分隔符，并且 **TextFileParseType** 属性的值为 **xlDelimited** ，则该属性值为 **True** 。 默认值为 **False** 。 可读/写 **Boolean** 类型。 |
| [TextFileSpaceDelimiter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileSpaceDelimiter) | 如果向工作簿连接中导入文本文件时，使用空格字符作为分隔符，则该值为 **True** 。 默认值为 **False** 。 可读/写 **Boolean** 类型。 |
| [TextFileStartRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileStartRow) | 返回或设置向工作簿连接中导入文本文件时进行文本分列的起始行号。 其有效值为 1 到 32767 之间的整数。 默认值为 1。 可读/写 **Long** 类型。 |
| [TextFileTabDelimiter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileTabDelimiter) | 如果工作簿连接中导入文本文件时使用 Tab 作为分隔符，则该值为 **True** 。 默认值为 **False** 。 可读/写 **Boolean** 类型。 |
| [TextFileTextQualifier](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileTextQualifier) | 返回或设置向工作簿连接中导入文本文件时的文本识别符。 文本识别符用于指定包含的数据是文本格式。 可读/写 **XlTextQualifier** 类型。 |
| [TextFileThousandsSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileThousandsSeparator) | 返回或设置 ET 在将文本文件导入工作簿连接中时使用的千位分隔符。 默认为系统千位分隔符。 可读/写 **String** 类型。 |
| [TextFileTrailingMinusNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileTrailingMinusNumbers) | 如果为 **True** ，ET 会将导入的数字视为以 - (减) 符号开头的文本作为负号。 如果为 **False** ，则将导入的数字视为以 - 符号开头的文本作为文本。 **Boolean** 类型，可读写。 |
| [TextFileVisualLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/member/TextFileVisualLayout) | 返回或设置一个 **XlTextVisualLayoutType** 枚举，该枚举表示导入的文本的可见布局是从左到右还是从右到左。可读写。 |