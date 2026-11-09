# Find.HitHighlight

突出显示找到的所有匹配项，并且返回一个代表是否找到匹配项的 **Boolean** 类型的值。



## 语法

express.**HitHighlight(FindText, HighlightColor, TextColor, MatchCase, MatchWholeWord, MatchPrefix, MatchSuffix, MatchPhrase, MatchWildcards, MatchSoundsLike, MatchAllWordForms, MatchByte, MatchFuzzy, MatchKashida, MatchDiacritics, MatchAlefHamza, MatchControl, IgnoreSpace, IgnorePunct, HanjaPhoneticHangul)**

express   一个代表 **Find** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FindText | 必选 | any | 指定要查找的文本。使用空字符串（""）可以仅搜索格式。可以指定适当的字符代码来搜索特殊字符。例如，“^p”对应段落标记，“^t”对应制表符。 |
| HighlightColor | 可选 | any | 指定文本的突出显示颜色。可以是任何 RGB 颜色或 **[WdColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdColor)** 常量之一。 |
| TextColor | 可选 | any | 指定文本的颜色。可以是任何 RGB 颜色或 **[WdColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdColor)** 常量之一。 |
| MatchCase | 可选 | any | 如果该属性值为 **True** ，则指定查找文本是区分大小写的。相当于 **“查找和替换”** 对话框中的 **“区分大小写”** 复选框。 |
| MatchWholeWord | 可选 | any | 如果该属性值为 **True** ，则查找操作只查找整个单词，而不查找长单词的一部分。相当于 **“查找和替换”** 对话框中的 **“全字匹配”** 复选框。 |
| MatchPrefix | 可选 | any | 如果该属性值为 **True** ，则匹配以搜索字符串开头的单词。相当于 **“查找和替换”** 对话框中的 **“区分前缀”** 复选框。 |
| MatchSuffix | 可选 | any | 如果该属性值为 **True** ，则匹配以搜索字符串结尾的单词。相当于 **“查找和替换”** 对话框中的 **“区分后缀”** 复选框。 |
| MatchPhrase | 可选 | any | 如果该属性值为 **True** ，则忽略单词之间的所有空格和控制字符。 |
| MatchWildcards | 可选 | any | 如果该属性值为 **True** ，则查找的文字包含特殊搜索操作符。相当于 **“查找和替换”** 对话框中的 **“使用通配符”** 复选框。 |
| MatchSoundsLike | 可选 | any | 如果该属性值为 **True** ，则查找操作查找与要查找的文字发音相近的单词。相当于 **“查找和替换”** 对话框中的 **“同音”** 复选框。 |
| MatchAllWordForms | 可选 | any | 如果该属性值为 **True** ，则查找操作查找要查找的文字的所有形式（例如，查找“sit”的同时，还查找“sitting”和“sat”）， 相当于 **“查找和替换”** 对话框中的 **“查找单词的所有形式”** 复选框。 |
| MatchByte | 可选 | any | 如果该属性值为 **True** ，则在搜索过程中区分全角和半角字母或字符。 |
| MatchFuzzy | 可选 | any | 如果该属性值为 **True** ，则在搜索过程中对日语文本使用非特定搜索选项。 |
| MatchKashida | 可选 | any | 在阿拉伯语文档中，如果查找操作用匹配的 kashida 来匹配文字，则该属性值为 **True** 。根据您所选择或安装的语言支持（如美国英语）的不同，该参数可能不可用。 |
| MatchDiacritics | 可选 | any | 在使用从右向左语言的文档中，如果查找操作用匹配的音调符号来匹配文字，则该属性值为 **True** 。根据您所选择或安装的语言支持（如美国英语）的不同，该参数可能不可用。 |
| MatchAlefHamza | 可选 | any | 在阿拉伯语文档中，如果查找操作用匹配的 Alef Hamza 来匹配文字，则该属性值为 **True** 。根据您所选择或安装的语言支持（如美国英语）的不同，该参数可能不可用。 |
| MatchControl | 可选 | any | 在使用从右向左语言的文档中，如果查找操作用匹配的双向控制字符来匹配文字，则该属性值为 **True** 。根据您所选择或安装的语言支持（如美国英语）的不同，该参数可能不可用。 |
| IgnoreSpace | 可选 | any | 如果该属性值为 **True** ，则忽略单词之间的所有空格。相当于 **“查找和替换”** 对话框中的 **“忽略空格”** 复选框。 |
| IgnorePunct | 可选 | any | 如果该属性值为 **True** ，则忽略单词之间的所有标点符号。相当于 **“查找和替换”** 对话框中的 **“忽略标点符号”** 复选框。 |
| HanjaPhoneticHangul | 可选 | any | 如果该属性值为 **True** ，则忽略朝鲜语拼音和朝鲜语汉字字符。仅当您具有朝鲜语支持时可用。 |

## 返回值

Boolean

## 说明


 **HitHighlight** 方法主要适用于在将 WPS 指定为电子邮件编辑器时，在 Office Outlook 中搜索突出显示内容的情况。但如果您希望突出显示所找到的文字，则可以对 WPS 内的文档使用此方法。否则，请使用 **[Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Execute)** 方法。



## 示例


```JavaScript
/*本示例在所选内容中查找文本“example”，并添加红色突出显示格式。*/
function test() {
    let find = Selection.Find
    find.ClearFormatting()
    find.MatchWholeWord = true
    find.MatchCase = false
    find.HitHighlight("example", RGB(255, 0, 0))
}
```


```JavaScript
/*此示例判断如果在活动文档的主文档文章中查找到指定文本并成功添加突出显示格式，则通知用户，然后清除突出显示格式。*/
function test() {
    let find = ActiveDocument.Content.Find
    if (find.HitHighlight("example", wdColorRed, null, true, true, null, null, true)) {
        alert("查找到指定文本并成功添加突出显示格式")
    }
    find.ClearHitHighlight()
}
```
