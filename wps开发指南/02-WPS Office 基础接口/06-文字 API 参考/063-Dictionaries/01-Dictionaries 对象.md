# Dictionaries 对象

包括活动自定义拼写词典的 **Dictionary** 对象的集合。

## 说明


使用 **[CustomDictionaries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/CustomDictionaries)** 属性返回当前活动自定义词典的集合。


## 示例


```JavaScript
/*本示例显示所有自定义词典的名称。*/
function test() {
    for (let i = 1; i <= Application.CustomDictionaries.Count; i++) {
        let dictionary = Application.CustomDictionaries.Item(i)
        alert(dictionary.Name)
    }
}
```
使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/member/Add)** 方法在活动自定义词典集合中添加新的自定义词典。如果任何文件都不具有 _FileName_ 所指定的名称，WPS 将创建它。



```JavaScript
/*本示例将“example.DIC”添加到自定义词典集合。*/
function test() {
    Application.CustomDictionaries.Add("D:\\示例\\example.DIC")
}
```
使用 **[ClearAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/member/ClearAll)** 方法卸载所有自定义词典。但是请注意，本方法不删除词典文件。使用本方法后，集合中的自定义词典数变成 0（零）。



```JavaScript
/*此示例从自定义拼写词典列表中删除所有词典，并创建一个新的自定义词典文件。新词典被分配为活动的自定义词典，新单词会自动添加到该词典中。*/
function test() {
    Application.CustomDictionaries.ClearAll()
    Application.CustomDictionaries.Add("D:\\示例\\example.DIC")
    Application.CustomDictionaries.ActiveCustomDictionary = Application.CustomDictionaries.Item(1)
}
```
应使用 **[ActiveCustomDictionary](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/member/ActiveCustomDictionary)** 属性来设置要在其中添加新词的自定义词典。如果为不是自定义词典的词典设置该属性，则会出错。

 **[Maximum](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/member/Maximum)** 属性返回应用程序可同时支持的最多自定义拼写词典数。对于 WPS 而言，最大数为 18。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/member/Add) | 返回一个 **Dictionary** 对象，该对象代表添加到活动自定义拼写或转换词典集合中的新的自定义拼写或转换词典。 |
| [ClearAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/member/ClearAll) | 卸载所有的自定义或转换词典。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/member/Item) | 返回集合中的单个 **Dictionary** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActiveCustomDictionary](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/member/ActiveCustomDictionary) | 返回或设置一个 **[Dictionary](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionary/obj)** 对象，该对象代表加入单词的自定义词典。可读写。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的词典数。只读。 |
| [Maximum](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dictionaries/member/Maximum) | 返回允许的自定义或转换词典数目的最大值。 **Long** 类型，只读。 |