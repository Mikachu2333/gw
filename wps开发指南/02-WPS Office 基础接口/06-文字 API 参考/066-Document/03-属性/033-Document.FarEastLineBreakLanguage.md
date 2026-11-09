# Document.FarEastLineBreakLanguage

返回或设置一个 **[WdFarEastLineBreakLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFarEastLineBreakLanguageID)** 类型的值，该值代表在指定文档或模板中对文本进行换行时使用的东亚语言。可读写。



## 语法

express.**FarEastLineBreakLanguage**

express   一个代表 **Document** 对象的变量。

## 类型

WdFarEastLineBreakLanguageID

## 示例


```JavaScript
/*本示例设置 WPS 在当前文档中依照朝鲜语的规则换行。*/
function test() {
    ActiveDocument.FarEastLineBreakLanguage = wdLineBreakKorean
}
```


```JavaScript
/*本示例显示第一个文档中对文本进行换行时使用的东亚语言是否为简体中文。*/
function test() {
    alert(Documents.Item(1).FarEastLineBreakLanguage == wdLineBreakSimplifiedChinese)
}
```
