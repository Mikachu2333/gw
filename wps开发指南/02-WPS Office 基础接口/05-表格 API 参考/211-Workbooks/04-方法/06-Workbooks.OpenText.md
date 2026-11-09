# Workbooks.OpenText

载入一个文本文件，并将其作为包含单个工作表的新工作簿进行分列处理，然后在此工作表中放入经过分列处理的文本文件数据。



## 语法

express.**OpenText(Filename, Origin, StartRow, DataType, TextQualifier, ConsecutiveDelimiter, Tab, Semicolon, Comma, Space, Other, OtherChar, FieldInfo, TextVisualLayout, DecimalSeparator, ThousandsSeparator, TrailingMinusNumbers, Local)**

express   一个代表 **Workbooks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 指定要打开和分列的文本文件的名称。 |
| Origin | 可选 | any | 指定文本文件来源。可为以下 XlPlatform 常量之一：xlMacintosh、xlWindows 或 xlMSDOS。此外，它还可以是一个整数，表示所需代码页的代码页编号。例如，“1256”指定源文本文件的编码是阿拉伯语 (Windows)。如果省略该参数，则此方法将使用“文本导入向导”中“文件原始格式”选项的当前设置。 |
| StartRow | 可选 | any | 文本分列处理的起始行号。默认值为 1。 |
| DataType | 可选 | any | 指定文件中数据的列格式。可为以下 XlTextParsingType 常量之一：xlDelimited 或 xlFixedWidth。如果未指定该参数，则 ET 将尝试在打开文件时确定列格式。 |
| TextQualifier | 可选 | XlTextQualifier | 指定文本识别符号。 |
| ConsecutiveDelimiter | 可选 | any | 如果为 True，则将连续分隔符视为一个分隔符。默认值为 False。 |
| Tab | 可选 | any | 如果为 True，则将制表符用作分隔符（DataType 必须为 xlDelimited）。默认值为 False。 |
| Semicolon | 可选 | any | 如果为 True，则将分号用作分隔符（DataType 必须为 xlDelimited）。默认值为 False。 |
| Comma | 可选 | any | 如果为 True，则将逗号用作分隔符（DataType 必须为 xlDelimited）。默认值为 False。 |
| Space | 可选 | any | 如果为 True，则将空格用作分隔符（DataType 必须为 xlDelimited）。默认值为 False。 |
| Other | 可选 | any | 如果为 True，则将 OtherChar 参数指定的字符用作分隔符（DataType 必须为 xlDelimited）。默认值为 False。 |
| OtherChar | 可选 | any | （如果 Other 为 True，则为必选项）。当 Other 为 True 时，指定分隔符。如果指定了多个字符，则仅使用字符串中的第一个字符而忽略剩余字符。 |
| FieldInfo | 可选 | any | 包含单列数据相关分列信息的数组。对该参数的解释取决于 DataType 的值。如果此数据由分隔符分隔，则该参数为由两元素数组组成的数组，其中每个两元素数组指定一个特定列的转换选项。第一个元素为列标（从 1 开始），第二个元素是 XlColumnDataType 的常量之一，用于指定分列方式。 |
| TextVisualLayout | 可选 | any | 文本的可视布局。 |
| DecimalSeparator | 可选 | any | 识别数字时，ET 使用的小数分隔符。默认设置为系统设置。 |
| ThousandsSeparator | 可选 | any | 识别数字时， ET 使用的千位分隔符。默认设置为系统设置。 |
| TrailingMinusNumbers | 可选 | any | 如果应将结尾为减号字符的数字视为负数处理，则指定为 True。如果为 False 或省略该参数，则将结尾为减号字符的数字视为文本处理。 |
| Local | 可选 | any | 如果分隔符、数字和数据格式应使用计算机的区域设置，则指定为 True。 |

## 返回值

void

## 说明


### FieldInfo 参数信息

只有在安装并选定了中国台湾地区语言支持时才可使用 **xlEMDFormat** 。 **xlEMDFormat** 常量指定使用中国台湾地区纪元日期。

列说明符可为任意顺序。输入数据中如果某列没有列说明符，则用常规设置对该列进行分列处理。

 **注释：** 

* 在指定要跳过的列时，必须明确说明其余各列的类型，否则数据不能正确拆分。
* 如果数据中包含可识别的日期，则工作表中单元格的格式就会设置为“日期”，即便为该列设置的格式为“常规”。此外，如果您为某一列指定了以上日期格式中的一种格式，而数据中并不包含可识别的日期，那么工作表中单元格的格式为“常规”。

如果源数据为定宽列，则每个两元数组的第一个元素指定起始元素在列中的位置，（用整数表示，第一个字符为 0 (零)），第二个元素用 0 到 9 的数字指定分列选项，如前表所示。

### ThousandsSeparator 参数信息

下表显示了使用不同的导入设置向 ET 中导入文本时的结果。数字结果显示在最右边的列中。

| 系统小数分隔符 | 系统千位分隔符 | 小数分隔符值 | 千位分隔符值 | 导入的文本      | 单元格的值（数据类型）    |
| ------- | ------- | ------ | ------ | ---------- | -------------- |
| 句号      | 逗号      | 逗号     | 句号     | 123.123,45 | 123,123.45（数字） |
| 句号      | 逗号      | 逗号     | 逗号     | 123.123,45 | 123.123,45（文本） |
| 逗号      | 句号      | 句号     | 逗号     | 123,123.45 | 123,123.45（数字） |
| 句号      | 逗号      | 句号     | 逗号     | 123 123.45 | 123 123.45（文本） |
| 句号      | 逗号      | 句号     | 空格     | 123 123.45 | 123,123.45（数字） |



## 示例


```JavaScript
/*本示例打开 DATA.TXT 文件并将制表符作为分隔符对此文件进行分列处理，将其转换成为工作表。*/
function test() {
    Application.Workbooks.OpenText("C:\\DATA.TXT", null, null, xlDelimited, null, null, true)
}
```


```JavaScript
/*本示例指定本文件来源为xlWindows，并设置空格作为分隔符将文件分隔。*/
function test() {
    Application.Workbooks.OpenText("D:\\test.txt", xlWindows, null, xlDelimited, null, null, null, null, null, true)
}
```
