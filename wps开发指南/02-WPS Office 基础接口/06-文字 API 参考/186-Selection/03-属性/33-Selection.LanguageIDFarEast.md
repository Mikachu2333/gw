# Selection.LanguageIDFarEast

返回或设置指定对象的东亚语言。 **WdLanguageID** 类型，可读写。



## 语法

express.**LanguageIDFarEast**

express   一个代表 **Selection** 对象的变量。

## 类型

WdLanguageID

## 说明


推荐使用本方法，来返回或设置用 WPS 中文版创建的文档中东亚文字的语言。



## 示例


```JavaScript
/*本示例将选定内容的东亚语言设置为朝鲜语。*/
function test() {
    Selection.LanguageIDFarEast = wdKorean
}
```


```JavaScript
/*本示例显示活动窗口选定内容的东亚语言是否为wdSimplifiedChinese。*/
function test() {
    alert(ActiveWindow.Selection.LanguageIDFarEast == wdSimplifiedChinese)
}
```
