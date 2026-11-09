# Range.LanguageID

返回或设置一个 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 常量，该常量代表指定范围的语言。可读写。



## 语法

express.**LanguageID**

express   一个代表 **Range** 对象的变量。

## 类型

WdLanguageID

## 说明


根据您所选择或安装的语言支持（例如，美国英语），某些 **WdLanguageID** 常量可能不可用。



## 示例


```JavaScript
/*本示例将活动文档的第一段格式设置为法语格式，然后添加新的自定义词典，此词典用于查阅法语文本。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.LanguageID = wdFrench
    let dictionary = CustomDictionaries.Add("D:\\示例\\French.dic")
    dictionary.LanguageSpecific = true
    dictionary.LanguageID = wdFrench
}
```


```JavaScript
/*本示例显示所选范围的语言是否为wdEnglishUS。*/
function test() {
    alert(Selection.Range.LanguageID == wdEnglishUS)
}
```
