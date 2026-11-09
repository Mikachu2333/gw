# Replacement.LanguageID

返回或设置一个 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 常量，该常量代表指定范围的语言。可读写。



## 语法

express.**LanguageID**

express   一个代表 **Replacement** 对象的变量。

## 类型

WdLanguageID

## 说明


根据您所选择或安装的语言支持（例如，美国英语），某些 **WdLanguageID** 常量可能不可用。



## 示例


```JavaScript
/*本示例设置所选内容的替换条件中的语言。*/
function test() {
    Selection.Find.Replacement.LanguageID = wdSimplifiedChinese
}
```


```JavaScript
/*本示例显示活动文档上主文档的替换条件中的语言是否为wdEnglishUS。*/
function test() {
    alert(ActiveDocument.Content.Find.Replacement.LanguageID == wdEnglishUS)
}
```
