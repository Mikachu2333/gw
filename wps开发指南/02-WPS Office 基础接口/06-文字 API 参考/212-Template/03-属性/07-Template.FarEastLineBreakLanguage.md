# Template.FarEastLineBreakLanguage

返回或设置在指定的文档或模板中对文本进行换行时使用的东亚语言。 **WdFarEastLineBreakLanguageID** 类型，可读写。



## 语法

express.**FarEastLineBreakLanguage**

express   一个代表 **Template** 对象的变量。

## 类型

WdFarEastLineBreakLanguageID

## 示例


```JavaScript
/*本示例将附加到第一个文档的模板中对文本进行换行时使用的东亚语言设置为繁体中文。*/
function test() {
    let template = Documents.Item(1).AttachedTemplate
    template.FarEastLineBreakLanguage = wdLineBreakTraditionalChinese
}
```


```JavaScript
/*本示例显示第一个模板中对文本进行换行时使用的东亚语言是否为简体中文。*/
function test() {
    alert(Templates.Item(1).FarEastLineBreakLanguage == wdLineBreakSimplifiedChinese)
}
```
