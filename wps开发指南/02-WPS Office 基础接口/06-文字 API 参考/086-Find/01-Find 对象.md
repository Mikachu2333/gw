# Find 对象

代表查找操作的执行条件。

## 说明


 **Find** 对象的属性和方法对应于 **“查找和替换”** 对话框中的选项。

使用 **Find** 属性可返回一个 **Find** 对象。


## 示例


```JavaScript
/*本示例查找并选择出现的下一个“hi”单词。*/
function test() {
    let find = Selection.Find
    find.ClearFormatting()
    find.Text = "hi"
    find.Execute(null, null, null, null, null, null, true)
}
```


```JavaScript
/*本示例在活动文档中查找所有的“hi”，并且将其替换为“hello”。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.Execute("hi", null, null, null, null, null, null, null, null, "hello", wdReplaceAll)
}
```
如果从 **Selection** 对象中获得 **Find** 对象，找到符合查找条件的文本后所选内容将会改变。



```JavaScript
/*本示例选择出现的下一个“blue”单词。*/
function test() {
    Selection.Find.Execute("blue", null, null, null, null, null, true)
}
```
如果从 **Range** 对象中获得 **Find** 对象，找到符合查找条件的文本后所选内容不会改变，但会重新定义 **Range** 对象。



```JavaScript
/*本示例查找活动文档中第一次出现的单词“blue”，如果在文档中找到“blue”，则会重新定义 range，并将粗体格式应用于 “blue”。*/
function test() {
    let range = ActiveDocument.Content
    range.Find.Execute("blue", null, null, null, null, null, true)
    if (range.Find.Found) {
        range.Bold = msoTrue
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearAllFuzzyOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/ClearAllFuzzyOptions) | 清除所有与日语文本相关联的非特定搜索选项。 |
| [ClearFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/ClearFormatting) | 取消在查找或替换操作中所指定文本的文本格式和段落格式。 |
| [ClearHitHighlight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/ClearHitHighlight) | 取消突出显示查找操作中所有文本的突出显示，并且返回一个代表该操作是否成功的 **Boolean** 类型的值。 |
| [Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Execute) | 运行指定的查找操作。如果查找成功，则返回 **True** 。 |
| [Execute2007](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Execute2007) | 运行指定的查找操作。如果查找操作成功，则返回 **True** 。 |
| [HitHighlight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/HitHighlight) | 突出显示找到的所有匹配项，并且返回一个代表是否找到匹配项的 **Boolean** 类型的值。 |
| [SetAllFuzzyOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/SetAllFuzzyOptions) | 激活所有与日语文本相关的非特定搜索选项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [CorrectHangulEndings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/CorrectHangulEndings) | 如果 WPS 在替换朝鲜文字文本时，自动更正朝鲜文字结尾，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Font) | 返回或设置 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定对象的字符格式。 **Font** 类型，可读写。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Format) | 如果在查找操作中包含格式，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Forward](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Forward) | 如果查找操作在文档中往前搜索，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Found](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Found) | 如果生成搜索匹配，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [Highlight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Highlight) | 如果在查找条件中包含突出显示格式，则该属性值为 **msoCTrue** 。 **Long** 类型，可读写。 |
| [IgnorePunct](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/IgnorePunct) | 返回或设置 **Boolean** 值，该值表示查找操作是否应忽略找到的文本中的标点符号。可读/写。 |
| [IgnoreSpace](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/IgnoreSpace) | 返回或设置 **Boolean** 值，该值表示查找操作是否应忽略找到的文本中的额外空格。可读/写。 |
| [LanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/LanguageID) | 返回或设置指定 **Find** 对象的语言。 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 类型，可读写。 |
| [MatchByte](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/MatchByte) | 如果在搜索过程中区分全角和半角的字符或字母，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchCase](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/MatchCase) | 如果为 **True** ，则查找操作区分大小写。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [MatchControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/MatchControl) | 如果在从右向左语言的文档中，查找操作按照匹配双向控制字符来匹配文字，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchFuzzy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/MatchFuzzy) | 如果 WPS 在搜索过程中使用日文文本的非特定搜索选项，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchPrefix](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/MatchPrefix) | 如果该属性值为 **True** ，则匹配以搜索字符串开头的单词。可读写。 |
| [MatchSuffix](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/MatchSuffix) | 如果该属性值为 **True** ，则匹配以搜索字符串结尾的单词。可读写。 |
| [MatchWholeWord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/MatchWholeWord) | 如果查找操作只查找完整单词，而不是一个长单词的一部分，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MatchWildcards](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/MatchWildcards) | 如果要查找的文字中包含通配符，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/ParagraphFormat) | 返回或设置一个 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/obj)** 对象，该对象代表指定查找操作的段落设置。可读/写。 |
| [Replacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Replacement) | 返回一个 **[Replacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Replacement/obj)** 对象，该对象包含了一次替换操作所需的条件。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Style) | 返回或设置指定对象的样式。可读写 **Variant** 类型。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Text) | 返回或设置要查找的文本。 **String** 类型，可读写。 |
| [Wrap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/member/Wrap) | 如果从文档开头之外的位置开始搜索且到达文档末尾（或如果 **Forward** 设置为 **False** ，则反之），或者如果在指定的所选内容或区域中未找到搜索文本，则返回或设置其结果。 **WdFindWrap** 类型，可读写。 |