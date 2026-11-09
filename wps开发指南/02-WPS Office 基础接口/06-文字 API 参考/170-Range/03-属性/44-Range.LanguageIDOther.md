# Range.LanguageIDOther

返回或设置指定范围的语言。可读写 **WdLanguageID** 类型。



## 语法

express.**LanguageIDOther**

express   一个代表 **Range** 对象的变量。

## 类型

WdLanguageID

## 示例


```JavaScript
/*本示例将所选内容的语言设置为法语。*/
function test() {
    Selection.Range.LanguageIDOther = wdFrench
}
```


```JavaScript
/*本示例显示活动文档的主文档文章的语言是否为wdEnglishUS。*/
function test() {
    alert(ActiveDocument.Content.LanguageIDOther == wdEnglishUS)
}
```
