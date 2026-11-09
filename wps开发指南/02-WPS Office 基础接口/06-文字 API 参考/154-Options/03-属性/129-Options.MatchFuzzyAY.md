# Options.MatchFuzzyAY

如果在搜索过程中 WPS 将忽略 イ 行和 エ 行字符后“ア”和“ヤ”之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchFuzzyAY**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在搜索过程中忽略 イ 行和 エ 行字符后“ア”和“ヤ”之间的差异。*/
function test() {
    Options.MatchFuzzyAY = true
}
```


```JavaScript
/*本示例判断如果 WPS 在搜索过程中忽略 イ 行和 エ 行字符后“ア”和“ヤ”之间的差异，则通知用户。*/
function test() {
    if (Options.MatchFuzzyAY) {
        alert("WPS 在搜索过程中忽略 イ 行和 エ 行字符后“ア”和“ヤ”之间的差异。")
    }
}
```
