# Languages 对象

 **Language** 对象的集合，这些对象代表 WPS 中用于校对或设置格式的语言。

## 说明


使用 **Languages** 属性可返回 **Languages** 集合。

使用 **Languages** (index) 可返回一个 **[Language](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Language/obj)** 对象，其中 index 可以是 **Name** 属性的值、 **NameLocal** 属性的值、 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 常量之一或 **MsoLanguageID** 常量之一。（要获取有效的 **MsoLanguageID** 常量的列表，请参见相关枚举的介绍）。

 **Count** 属性返回可用来标记文字的语言（即校对工具对其可用的语言）数量。要进行校对，您必须为要检查的每种语言安装适当的校对工具。您还需有下列各项的 .dll 文件和 .lex 文件：同义词库、拼写检查工具、语法检查工具和断字工具。

如果将文字标记为 **wdNoProofing** ，则 WPS 在运行拼写或语法检查时会跳过这些标记的文字。要将文字标记为指定语言或不进行校对，请使用 **“设置语言”** 命令。


## 示例


```JavaScript
/*本示例显示数组中所有语言的本地化名称。*/
function test() {
    let languages = [wdAfrikaans, wdAlbanian, wdAmharic]
    for (let i = 0; i < languages.length; i++) {
        alert(Application.Languages.Item(languages[i]).NameLocal)
    }
}
```


```JavaScript
/*本示例显示语言对象的数量。*/
function test() {
    alert(`语言的数量：${Application.Languages.Count}`)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Languages/member/Item) | 返回集合中的单个 **Language** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Languages/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中语言的数目。只读。 |