# Options.MatchFuzzyOldKana

如果 WPS 在搜索过程中将忽略新旧假名字符之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchFuzzyOldKana**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为在搜索过程中忽略新旧假名字符的差异。*/
function test() {
    Options.MatchFuzzyOldKana = true
}
```


```JavaScript
/*本示例判断如果 WPS 在搜索过程中将忽略新旧假名字符之间的差异，则通知用户。*/
function test() {
    if (Options.MatchFuzzyOldKana) {
        alert("WPS 在搜索过程中将忽略新旧假名字符之间的差异。")
    }
}
```
