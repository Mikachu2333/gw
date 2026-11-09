# AutoCorrect.ReplaceTextFromSpellingChecker

如果为 **True** ，WPS 将在用户键入时自动用拼写检查的建议替换拼错的文字。WPS 只替换包含一处误拼的单词，并且拼写词典也只列出一个替换选项。 **Boolean** 类型，可读写。



## 语法

express.**ReplaceTextFromSpellingChecker**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 自动用拼写检查的建议替换拼错的文字。*/
function test() {
    Application.AutoCorrect.ReplaceTextFromSpellingChecker = true
}
```


```JavaScript
/*本示例显示是否自动用拼写检查的建议替换拼错的文字。*/
function test() {
    alert(Application.AutoCorrect.ReplaceTextFromSpellingChecker)
}
```
