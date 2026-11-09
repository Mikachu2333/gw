# SpellingOptions 对象

代表工作表的各种拼写检查选项。

## 说明


使用 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象的 **[SpellingOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/SpellingOptions)** 属性可返回一个 **SpellingOptions** 对象。

一旦返回了 **SpellingOptions** 对象，您就可以使用下列属性来设置或返回各种拼写检查选项。

* [ **ArabicModes** ](#TODO)
* [ **DictLang** ](#TODO)
* [ **GermanPostReform** ](#TODO)
* [ **HebrewModes** ](#TODO)
* [ **IgnoreCaps** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SpellingOptions/member/IgnoreCaps)
* [ **IgnoreFileNames** ](#TODO)
* [ **IgnoreMixedDigits** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SpellingOptions/member/IgnoreMixedDigits)
* [ **KoreanCombineAux** ](#TODO)
* [ **KoreanProcessCompound** ](#TODO)
* [ **KoreanUseAutoChangeList** ](#TODO)
* [ **SuggestMainOnly** ](#TODO)
* [ **UserDict** ](#TODO)


## 示例


```JavaScript
/*下例使用 IgnoreCaps 属性来禁用对全部是大写字母的单词的拼写检查。在本示例中，拼写检查程序发现的是“Testt”，而不是“TESTT”。*/
function test() {
    // 将同一个单词的拼写错误版本全部大写以及混合大小写。
    Range("A1").Formula = "Testt"
    Range("A2").Formula = "TESTT"

    Application.SpellingOptions.SuggestMainOnly = true
    Application.SpellingOptions.IgnoreCaps = true

    // Run a spell check.
    Cells.CheckSpelling()
}
```


```JavaScript
/*本示例显示 ET 在使用拼写检查时是否忽略大写单词。*/
function test() {
    alert(Application.SpellingOptions.IgnoreCaps)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [IgnoreCaps](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SpellingOptions/member/IgnoreCaps) | 如果该属性值为 **False** ，则指示 ET 检查大写单词。如果该值为 **True** ，则指示 ET 在使用拼写检查时忽略大写单词。可读/写 **Boolean** 类型。 |
| [IgnoreMixedDigits](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SpellingOptions/member/IgnoreMixedDigits) | 如果该属性值为 **False** ，则指示 ET 检查混合数字。如果该值为 **True** ，则指示 ET 在检查拼写时忽略混合数字。 **Boolean** 类型，可读写。 |