# Options.MatchFuzzyIterationMark

如果 WPS 在搜索过程中将忽略重复的标记类型间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchFuzzyIterationMark**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在搜索过程中忽略重复的标记类型间的差异。*/
function test() {
    Options.MatchFuzzyIterationMark = true
}
```


```JavaScript
/*本示例判断如果 WPS 在搜索过程中忽略重复的标记类型间的差异，则通知用户。*/
function test() {
    if (Options.MatchFuzzyIterationMark) {
        alert("WPS 在搜索过程中忽略重复的标记类型间的差异。")
    }
}
```
