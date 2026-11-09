# Options.MatchFuzzyCase

如果 WPS 在搜索过程中不区分字母大小写，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchFuzzyCase**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在搜索过程中不区分字母的大小写。*/
function test() {
    Options.MatchFuzzyCase = true
}
```


```JavaScript
/*本示例判断如果 WPS 在搜索过程中不区分字母的大小写，则通知用户。*/
function test() {
    if (Options.MatchFuzzyCase) {
        alert("WPS 在搜索过程中不区分字母的大小写。")
    }
}
```
