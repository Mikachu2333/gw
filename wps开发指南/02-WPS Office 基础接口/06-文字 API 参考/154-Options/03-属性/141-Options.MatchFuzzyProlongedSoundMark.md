# Options.MatchFuzzyProlongedSoundMark

如果在搜索过程中 WPS 将忽略短元音和长元音的差异，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MatchFuzzyProlongedSoundMark**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为在搜索过程中忽略短元音和长元音的差异。*/
function test() {
    Options.MatchFuzzyProlongedSoundMark = true
}
```


```JavaScript
/*本示例判断如果 WPS 在搜索过程中忽略短元音和长元音的差异，则通知用户。*/
function test() {
    if (Options.MatchFuzzyProlongedSoundMark) {
        alert("WPS 在搜索过程中忽略短元音和长元音的差异。")
    }
}
```
