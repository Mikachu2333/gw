# Options.MatchFuzzyTC

如果在搜索过程中 WPS 将忽略“ツ イ”、“テ イ”与“チ”之间以及“デ イ”与“ジ”之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchFuzzyTC**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在搜索过程中忽略“ツ イ”、“テ イ”与“チ”之间以及“デ イ”与“ジ”之间的差异。*/
function test() {
    Options.MatchFuzzyTC = true
}
```


```JavaScript
/*本示例判断如果 WPS 在搜索过程中忽略“ツ イ”、“テ イ”与“チ”之间以及“デ イ”与“ジ”之间的差异，则通知用户。*/
function test() {
    if (Options.MatchFuzzyTC) {
        alert("WPS 在搜索过程中忽略“ツ イ”、“テ イ”与“チ”之间以及“デ イ”与“ジ”之间的差异。")
    }
}
```
