# Options.MatchFuzzyDash

如果 WPS 在搜索过程中忽略减号、划线以及长元音符号之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchFuzzyDash**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在搜索过程中忽略减号、划线以及长元音符号之间的差异。*/
function test() {
    Options.MatchFuzzyDash = true
}
```


```JavaScript
/*本示例判断如果 WPS 在搜索过程中忽略减号、划线以及长元音符号之间的差异，则通知用户。*/
function test() {
    if (Options.MatchFuzzyDash) {
        alert("WPS 在搜索过程中忽略减号、划线以及长元音符号之间的差异。")
    }
}
```
