# AutoCorrect.ReplaceText

如果 WPS 使用“自动更正”列表中的词条自动替换指定文本，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ReplaceText**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例对 WPS 进行设置，使其在您键入时，能用“自动更正”列表中的词条自动替换指定文本。*/
function test() {
    Application.AutoCorrect.ReplaceText = true
}
```


```JavaScript
/*本示例切换 ReplaceText 属性的值。*/
function test() {
    Application.AutoCorrect.ReplaceText = !Application.AutoCorrect.ReplaceText
}
```
