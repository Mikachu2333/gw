# Language 对象

代表 WPS 中用于校对或进行格式设置的语言。 **Language** 对象是 **Languages** 集合的成员。

## 说明


使用 **Languages** (_Index_) 可返回一个 **Language** 对象，其中 _Index_ 可以是 **Name** 属性的值、 **NameLocal** 属性的值、 **WdLanguageID** 常量之一或 **MsoLanguageID** 常量之一。（要获取有效的 **WdLanguageID** 或 **MsoLanguageID** 常量的列表，请参见相关枚举的介绍）。

 **Name** 属性返回语言的名称，而 **NameLocal** 属性以用户使用的语言返回语言的名称。

对于已安装校对工具的每种语言，可使用 **ActiveGrammarDictionary** 、 **ActiveHyphenationDictionary** 、 **ActiveSpellingDictionary** 和 **ActiveThesaurusDictionary** 属性返回相应的 **Dictionary** 对象。

写作风格是进行语法检查所用的一系列规则。 **WritingStyleList** 属性返回一个代表指定语言的可用写作风格的字符串数组。

使用 **DefaultWritingStyle** 属性可设置您希望 WPS 使用的默认写作风格。

您可以使用 **ActiveWritingStyle** 属性覆盖默认的写作风格。该属性应用于指定文档中以指定语言标记的文本。

如果将文字标记为 **wdNoProofing** ，则 WPS 在运行拼写或语法检查时会跳过这些标记的文字。

必须为待检查的每种语言安装校对工具。


## 示例


```JavaScript
/*本示例以两种不同的方式显示意大利语的名称，首先以英语显示，然后以用户语言显示。*/
function test() {
    alert(Application.Languages.Item(wdItalian).Name)
    alert(Application.Languages.Item(wdItalian).NameLocal)
}
```


```JavaScript
/*本示例将美国英语的写作风格设置为“Casual”。*/
function test() {
    Application.Languages.Item(wdEnglishUS).DefaultWritingStyle = "Casual"
}
```


```JavaScript
/*本示例设置美国英语、 法语和德语的写作风格。*/
function test() {
    Languages.Item(wdEnglishUS).DefaultWritingStyle = "Technical"
    Languages.Item(wdFrench).DefaultWritingStyle = "Commercial"
    Languages.Item(wdGerman).DefaultWritingStyle = "Technisch/Wiss"
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [DefaultWritingStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Language/member/DefaultWritingStyle) | 返回或设置指定语言的语法检查器使用的默认写作风格。 **String** 类型，可读写。 |
| [ID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Language/member/ID) | 返回一个标识指定语言的数值。只读 **WdLanguageID** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Language/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [NameLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Language/member/NameLocal) | 返回使用用户语言表示的校对工具语言的名称。只读 **String** 类型。 |
| [SpellingDictionaryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Language/member/SpellingDictionaryType) | 返回或设置校对工具类型。 **WdDictionaryType** 类型，可读写。 |