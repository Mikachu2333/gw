# Options.MatchFuzzyHF

如果 WPS 将在搜索过程中忽略“ヒ ユ”与“フ ユ”之间以及“ビ ユ”与“ヴ ユ”之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchFuzzyHF**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 将在搜索过程中忽略“ヒ ユ”与“フ ユ”之间以及“ビ ユ”与“ヴ ユ”之间的差异。*/
function test() {
    Options.MatchFuzzyHF = true
}
```


```JavaScript
/*本示例判断如果 WPS 将在搜索过程中忽略“ヒ ユ”与“フ ユ”之间以及“ビ ユ”与“ヴ ユ”之间的差异，则通知用户。*/
function test() {
    if (Options.MatchFuzzyHF) {
        alert("WPS 将在搜索过程中忽略“ヒ ユ”与“フ ユ”之间以及“ビ ユ”与“ヴ ユ”之间的差异。")
    }
}
```
