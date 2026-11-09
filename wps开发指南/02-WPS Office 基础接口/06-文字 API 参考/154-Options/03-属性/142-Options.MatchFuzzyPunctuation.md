# Options.MatchFuzzyPunctuation

如果在搜索过程中 WPS 忽略标点类型的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchFuzzyPunctuation**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为在搜索过程中忽略标点的类型差异。*/
function test() {
    Options.MatchFuzzyPunctuation = true
}
```


```JavaScript
/*本示例判断如果 WPS 在搜索过程中忽略标点的类型差异，则通知用户。*/
function test() {
    if (Options.MatchFuzzyPunctuation) {
        alert("WPS 在搜索过程中忽略标点的类型差异。")
    }
}
```
