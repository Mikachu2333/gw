# Find.LanguageID

返回或设置指定 **Find** 对象的语言。 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 类型，可读写。



## 语法

express.**LanguageID**

express   一个代表 **Find** 对象的变量。

## 类型

WdLanguageID

## 说明


根据您所选择或安装的语言支持（例如，美国英语），某些 **WdLanguageID** 常量可能不可用。



## 示例


```JavaScript
/*此示例将活动文档的主文档文章的搜索选项中的语言类型设置为简体中文，并将该文档中的文本“example”替换为“example1”。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.LanguageID = wdSimplifiedChinese
    find.Execute("example", null, null, null, null, null, true, null, true, "example1", wdReplaceAll)
}
```


```JavaScript
/*此示例显示所选内容的搜索选项中的语言类型是否为wdEnglishUK。*/
function test() {
    alert(Selection.Find.LanguageID == wdEnglishUK)
}
```
