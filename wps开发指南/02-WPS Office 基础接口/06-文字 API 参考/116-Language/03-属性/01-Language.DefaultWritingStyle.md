# Language.DefaultWritingStyle

返回或设置指定语言的语法检查器使用的默认写作风格。 **String** 类型，可读写。



## 语法

express.**DefaultWritingStyle**

express   一个代表 **Language** 对象的变量。

## 类型

string

## 说明


该属性控制写作风格的全局设置。写作风格的名称是指定语言的本地化名称。设置该属性时，必须使用 **“工具”** 菜单上 **“选项”** 对话框中 **“拼写和语法”** 选项卡上 **“写作风格”** 框中确切的名称。

 **[ActiveWritingStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/member/ActiveWritingStyle)** 属性为文档中的每一种语言设置写作风格。 **ActiveWritingStyle** 设置优先于 **DefaultWritingStyle** 设置。



## 示例


```JavaScript
/*本示例显示默认的写作风格。*/
function test() {
    let languageID = Selection.LanguageID
    alert(Application.Languages.Item(languageID).DefaultWritingStyle)
}
```


```JavaScript
/*本示例将美国英语的写作风格设置为“Casual”，然后对活动文档进行拼写和语法检查。*/
function test() {
    Application.Languages(wdEnglishUS).DefaultWritingStyle = "Casual"
    ActiveDocument.CheckGrammar()
}
```
