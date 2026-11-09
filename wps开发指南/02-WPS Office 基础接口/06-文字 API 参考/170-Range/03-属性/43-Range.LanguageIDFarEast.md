# Range.LanguageIDFarEast

返回或设置指定对象的东亚语言。可读写 **WdLanguageID** 类型。



## 语法

express.**LanguageIDFarEast**

express   一个代表 **Range** 对象的变量。

## 类型

WdLanguageID

## 示例


```JavaScript
/*本示例将活动文档中第一段的语言设置为朝鲜语。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.LanguageIDFarEast = wdKorean
}
```


```JavaScript
/*本示例显示所选范围的东亚语言是否为简体中文。*/
function test() {
    alert(Selection.Range.LanguageIDFarEast == wdSimplifiedChinese)
}
```
