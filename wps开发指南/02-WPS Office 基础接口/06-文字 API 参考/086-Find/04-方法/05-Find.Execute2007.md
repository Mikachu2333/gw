# Find.Execute2007

运行指定的查找操作。如果查找操作成功，则返回 **True** 。



## 语法

express.**Execute2007(FindText, MatchCase, MatchWholeWord, MatchWildcards, MatchSoundsLike, MatchAllWordForms, Forward, Wrap, Format, ReplaceWith, Replace, MatchKashida, MatchDiacritics, MatchAlefHamza, MatchControl, MatchPrefix, MatchSuffix, MatchPhrase, IgnoreSpace, IgnorePunct)**

express   一个代表 **Find** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FindText | 可选 | any | 要搜索的文本。可用空字符串（""）仅搜索格式，也可通过指定相应的字符代码搜索特殊字符。例如，“^p”对应段落标记，“^t”对应制表符。 |
| MatchCase | 可选 | any | 如果值为 **True** ，则指定要查找的文本应该区分大小写。该参数对应于 **“查找和替换”** 对话框（位于 **“开始”** 选项卡上的 **“查找”** 组中）中的 **“区分大小写”** 复选框。 |
| MatchWholeWord | 可选 | any | 如果值为 **True** ，则只查找整个单词，而不查找长单词的一部分。对应于 **“查找和替换”** 对话框中的 **“全字匹配”** 复选框。 |
| MatchWildcards | 可选 | any | 如果值为 **True** ，则在要查找的文字中使用通配符搜索操作符。对应于 **“查找和替换”** 对话框中的 **“使用通配符”** 复选框。 |
| MatchSoundsLike | 可选 | any | 如果值为 **True** ，则查找与要查找的文字发音相近的单词。对应于 **“查找和替换”** 对话框中的 **“同音”** 复选框。 |
| MatchAllWordForms | 可选 | any | 如果值为 **True** ，则查找要查找的文字的所有形式（例如，查找“sit”的同时，还查找“sitting”和“sat”）。对应于 **“查找和替换”** 对话框中的 **“查找单词的各种形式”** 复选框。 |
| Forward | 可选 | any | 如果该属性值为 **True** ，则向下（向文档尾部）搜索。 |
| Wrap | 可选 | any | 一个 **[WdFindWrap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFindWrap)** 常量，用于控制从非文档起点处开始搜索并到达文档末尾（如果 _Forward_ 设置为 **False** 则相反）时执行的操作。该参数还控制当存在选定内容或区域，而又没有在该选定内容或区域中找到搜索文字时执行的操作。 |
| Format | 可选 | any | 如果值为 **True** ，则查找与要查找的文字在内容和格式方面均相同的单词，或者查找格式相同的单词。 |
| ReplaceWith | 可选 | any | 替换文字。要删除由 _Find_ 参数指定的文字，可使用空字符串（""）。与 _Find_ 参数相似，该参数也可以指定特殊的字符和高级搜索条件。要将图形对象或者其他非文本项指定为替换内容，可将这些项置于剪贴板上，然后将 _ReplaceWith_ 指定为“^c”。 |
| Replace | 可选 | any | 一个指定 **[WdReplace](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdReplace)** 执行替换的范围的常量：一个、全部或不替换。 |
| MatchKashida | 可选 | any | 如果值为 **True** ，则在阿拉伯语文档中查找匹配的 kashida。该参数可能不可用，具体取决于您所选择或安装的语言支持（如美国英语）。 |
| MatchDiacritics | 可选 | any | 如果值为 **True** ，则在使用从右向左语言的文档中查找匹配的音调符号。该参数可能不可用，具体取决于您所选择或安装的语言支持（如美国英语）。 |
| MatchAlefHamza | 可选 | any | 如果值为 **True** ，则在阿拉伯语文档中查找匹配的 Alef Hamza。该参数可能不可用，具体取决于您所选择或安装的语言支持（如美国英语）。 |
| MatchControl | 可选 | any | 如果值为 **True** ，则在使用从右向左语言的文档中，查找匹配的双向控制字符。该参数可能不可用，具体取决于您所选择或安装的语言支持（如美国英语）。 |
| MatchPrefix | 可选 | any | 如果值为 **True** ，则查找以搜索字符串开头的单词。对应于 **“查找和替换”** 对话框中的 **“区分前缀”** 复选框。 |
| MatchSuffix | 可选 | any | 如果值为 **True** ，则查找以搜索字符串结尾的单词。对应于 **“查找和替换”** 对话框中的 **“区分后缀”** 复选框。 |
| MatchPhrase | 可选 | any | 如果值为 **True** ，则忽略单词之间的所有空格和控制字符。 |
| IgnoreSpace | 可选 | any | 如果值为 **True** ，则忽略单词之间的所有空格。对应于 **“查找和替换”** 对话框中的 **“忽略空格”** 复选框。 |
| IgnorePunct | 可选 | any | 如果值为 **True** ，则忽略单词之间的所有标点符号。对应于 **“查找和替换”** 对话框中的 **“忽略标点符号”** 复选框。 |

## 返回值

一个表示查找操作是否成功的 **Boolean** 值。

## 说明


如果 _MatchWildcards_ 为 **True** ，可为 _FindText_ 参数指定通配符和其他高级搜索准则，例如，“\*(ing)”查找任何以“ing”结尾的单词。

要搜索符号字符，可键入脱字符号（^）、零（0），然后键入符号字符的代码。例如，“^0151”对应一条长划线（—）。

除非另外指定，否则替换文本将沿用文档中被替换文本的格式。例如，如果用“xyz”替换字符串“abc”，那么加粗“abc”将被加粗字符串“xyz”所替换。

另外，如果 _MatchCase_ 为 **False** ，那么，无论替换文本是大写还是小写，查找到的大写文本都将被大写的替换文本替换。例如，上例中，“ABC”将被“XYZ”替换。



## 示例


```JavaScript
/*本示例查找并选择下一个“library”。*/
function test() {
    let find = Selection.Find
    find.ClearFormatting()
    find.MatchWholeWord = true
    find.MatchCase = false
    find.Execute2007("library")
}
```


```JavaScript
/*本示例在活动文档中查找所有的“hi”，并且将其替换为“hello”。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.Execute2007("hi", null, null, null, null, null, null, null, null, "hello", wdReplaceAll)
}
```
