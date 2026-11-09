# Options.MatchFuzzyByte

如果在搜索过程中 WPS 将忽略全角和半角字符（西文或日文）的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchFuzzyByte**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在搜索过程中忽略全角和半角字符（西文或日文）的差异。*/
function test() {
    Options.MatchFuzzyByte = true
}
```


```JavaScript
/*本示例判断如果 WPS 在搜索过程中忽略全角和半角字符（西文或日文）的差异，则通知用户。*/
function test() {
    if (Options.MatchFuzzyByte) {
        alert("WPS 在搜索过程中忽略全角和半角字符（西文或日文）的差异。")
    }
}
```
