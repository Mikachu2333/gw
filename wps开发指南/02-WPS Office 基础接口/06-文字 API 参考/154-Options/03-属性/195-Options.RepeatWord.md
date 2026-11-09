# Options.RepeatWord

返回或设置 **Boolean** 值，该值表示在检查拼写时是否标记重复的单词。如果为 **True** ，将标记重复的单词。可读/写。



## 语法

express.**RepeatWord**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在检查拼写时标记重复的单词。*/
function test() {
    Options.RepeatWord = true
}
```


```JavaScript
/*本示例判断如果 WPS 在检查拼写时标记重复的单词，则通知用户。*/
function test() {
    if (Options.RepeatWord) {
        alert("WPS 在检查拼写时标记重复的单词。")
    }
}
```
