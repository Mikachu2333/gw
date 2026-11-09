# Document.HyphenateCaps

如果全是大写字母时可对其进行断字，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**HyphenateCaps**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例自动为指定的文档断字，并允许对全是大写字母的单词进行断字。*/
function test() {
    ActiveDocument.AutoHyphenation = true
    ActiveDocument.HyphenateCaps = true
}
```


```JavaScript
/*本示例判断第一个文档是否允许对全是大写字母的单词进行断字，并通知用户。*/
function test() {
    if (Documents.Item(1).HyphenateCaps) {
        alert("允许对全是大写字母的单词进行断字")
    } else {
        alert("不允许对全是大写字母的单词进行断字")
    }
}
```
