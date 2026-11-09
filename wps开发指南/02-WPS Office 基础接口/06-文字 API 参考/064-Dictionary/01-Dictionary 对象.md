# Dictionary 对象

代表一个词典。代表自定义词典的 **Dictionary** 对象是 **[Dictionaries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/obj)** 集合的成员。其他词典对象由 **[Languages](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Languages/obj)** 集合的属性返回；这些属性包括 **[ActiveSpellingDictionary](#TODO)** 、 **[ActiveGrammarDictionary](#TODO)** 、 **[ActiveThesaurusDictionary](#TODO)** 和 **[ActiveHyphenationDictionary](#TODO)** 属性。

## 说明


使用 **[CustomDictionaries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CustomDictionaries)** (_Index_) 返回代表一个自定义词典的单个 **Dictionary** 对象（其中 _Index_ 是词典的索引编号或字符串名称）。


## 示例


```JavaScript
/*本示例显示第一个自定义词典的名称。*/
function test() {
    alert(Application.CustomDictionaries.Item(1).Name)
}
```


```JavaScript
/*本示例显示第二个自定义词典的路径。*/
function test() {
    alert(Application.CustomDictionaries.Item(2).Path)
}
```
使用 **[ActiveCustomDictionary](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/member/ActiveCustomDictionary)** 属性来设置要在其中添加新词的、集合中的自定义拼写词典。如果为并非自定义词典的词典设置该属性，则会出错。

可以使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/member/Add)** 方法在活动自定义词典集合中添加新的词典。如果任何文件都不具有 _FileName_ 所指定的名称，WPS 将创建它。



```JavaScript
/*本示例删除第二个自定义词典，然后添加名为“example.DIC”的自定义词典。*/
function test() {
    Application.CustomDictionaries.Item(2).Delete()
    Application.CustomDictionaries.Add("D:\\示例\\example.DIC")
}
```
使用 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionary/member/Name)** 和 **[Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionary/member/Path)** 属性定位任何词典。



```JavaScript
/*本示例显示所有自定义词典的完整路径。*/
function test() {
    for (let i = 1; i <= Application.CustomDictionaries.Count; i++) {
        let dictionary = Application.CustomDictionaries.Item(i)
        alert(`${dictionary.Path}${dictionary.Name}`)
    }
}
```
使用 **[LanguageSpecific](#TODO)** 属性判断指定自定义词典能否利用 **[LanguageID](#TODO)** 属性获得一种特定语言。如果词典是特定于语言的，它只验证格式与指定语言相符的文本。

对于每种已安装校对工具的语言，可用 **ActiveGrammarDictionary** 、 **ActiveHyphenationDictionary** 、 **ActiveSpellingDictionary** 和 **ActiveThesaurusDictionary** 属性返回相应的 **Dictionary** 对象。

对于 .lex 文件（内置校对词典）， **[ReadOnly](#TODO)** 属性返回 **True** ；而对于 .dic 文件（自定义拼写词典），则返回 **False** 。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionary/member/Delete) | 删除指定的词典。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionary/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionary/member/Path) | 返回指定词典的路径。只读 **String** 类型。 |