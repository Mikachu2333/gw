# Options.CheckGrammarAsYouType

如果 WPS 在键入时自动对文档进行语法检查并自动标记错误，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CheckGrammarAsYouType**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


本属性标记语法错误，但必须在将 **[ShowGrammaticalErrors](#TODO)** 的属性设置为 **True** 后才能在屏幕上显示错误标记。



## 示例


```JavaScript
/*本示例对 WPS 进行设置，使其在您键入时检查活动文档中的语法错误并显示发现的所有错误。*/
function test() {
    Options.CheckGrammarAsYouType = true
    ActiveDocument.ShowGrammaticalErrors = true
}
```


```JavaScript
/*本示例显示 WPS 在键入时，是否自动对文档进行语法检查并自动标记错误。*/
function test() {
    alert(Options.CheckGrammarAsYouType)
}
```
