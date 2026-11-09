# Dictionaries.Add

返回一个 **Dictionary** 对象，该对象代表添加到活动自定义拼写或转换词典集合中的新的自定义拼写或转换词典。



## 语法

express.**Add(FileName)**

express   一个代表 **Dictionaries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 词典文件的字符串名。如果该字符串中没有指定任何路径，则使用校对工具的路径。 |

## 返回值

Dictionary

## 说明


如果 _FileName_ 参数指定名称的文件不存在，WPS 就会新建一个文件。

 **Dictionaries** 集合仅包含活动的自定义拼写词典。派生自 **Languages** 集合的 **Dictionary** 对象没有 **Add** 方法。包括由下列属性返回的 **Dictionary** 对象： **ActiveSpellingDictionary** 、 **ActiveGrammarDictionary** 、 **ActiveThesaurusDictionary** 和 **ActiveHyphenationDictionary** 。

可用 **HangulHanjaDictionaries** 属性返回自定义转换词典集合。 **HangulHanjaConversionDictionaries** 集合中只包含活动的自定义转换词典。



## 示例


```JavaScript
/*此示例从自定义拼写词典列表中删除所有词典，并创建一个新的自定义词典文件。新词典被分配为活动的自定义词典，新单词会自动添加到该词典中。*/
function test() {
    Application.CustomDictionaries.ClearAll()
    Application.CustomDictionaries.Add("D:\\示例\\example.DIC")
    Application.CustomDictionaries.ActiveCustomDictionary = Application.CustomDictionaries.Item(1)
}
```


```JavaScript
/*此示例创建一个新的自定义词典并将其分配给一个变量。然后，新的自定义词典将设置为用于标记为加拿大法语的文本。请注意，要对其他语言运行拼写检查，您必须已安装该语言的校对工具。*/
function test() {
    let dictionary = Application.CustomDictionaries.Add("FrenchCanadian.dic")
    dictionary.LanguageSpecific = true
    dictionary.LanguageID = wdFrenchCanadian
}
```
