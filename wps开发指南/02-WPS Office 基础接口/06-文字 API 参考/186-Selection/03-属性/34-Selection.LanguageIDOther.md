# Selection.LanguageIDOther

返回或设置指定对象的语言。 **WdLanguageID** 类型，可读写。



## 语法

express.**LanguageIDOther**

express   一个代表 **Selection** 对象的变量。

## 类型

WdLanguageID

## 说明


推荐使用本方法，来设置或返回在 WPS 从右向左语言版本所创建的文档中西文文字所用的语言。



## 示例


```JavaScript
/*本示例将选定内容的语言设置为法语。*/
function test() {
    Selection.LanguageIDOther = wdFrench
}
```


```JavaScript
/*本示例显示活动窗口选定内容的语言是否为wdEnglishUK。*/
function test() {
    alert(ActiveWindow.Selection.LanguageIDOther == wdEnglishUK)
}
```
