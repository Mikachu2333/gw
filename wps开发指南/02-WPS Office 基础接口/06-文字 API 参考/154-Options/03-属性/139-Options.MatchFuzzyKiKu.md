# Options.MatchFuzzyKiKu

如果在搜索过程中 WPS 将忽略 サ 行字符前“キ”和“ク”之间的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchFuzzyKiKu**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在搜索过程中忽略 サ 行字符前“キ”和“ク”之间的差异。*/
function test() {
    Options.MatchFuzzyKiKu = true
}
```


```JavaScript
/*本示例判断如果 WPS 在搜索过程中忽略 サ 行字符前“キ”和“ク”之间的差异，则通知用户。*/
function test() {
    if (Options.MatchFuzzyKiKu) {
        alert("WPS 在搜索过程中忽略 サ 行字符前“キ”和“ク”之间的差异。")
    }
}
```
