# Index.IndexLanguage

返回或设置一个 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 常量，该常量代表用于指定索引的排序语言。可读写。



## 语法

express.**IndexLanguage**

express   一个代表 **Index** 对象的变量。

## 类型

WdLanguageID

## 说明


某些 **WdLanguageID** 常量可能对您不可用，具体取决于您选定或安装的语言支持（例如，美国英语）。



## 示例


```JavaScript
/*本示例将活动文档的第一个索引的排序语言设置为英语（新西兰）。*/
function test() {
    ActiveDocument.Indexes.Item(1).IndexLanguage = wdEnglishNewZealand
}
```


```JavaScript
/*本示例显示第一个文档上第二个索引的排序语言是否为简体中文。*/
function test() {
    let index = Documents.Item(1).Indexes.Item(2)
    alert(index.IndexLanguage == wdSimplifiedChinese)
}
```
