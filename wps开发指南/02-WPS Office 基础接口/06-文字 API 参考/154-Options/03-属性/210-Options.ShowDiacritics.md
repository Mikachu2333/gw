# Options.ShowDiacritics

如果在使用从右向左语言的文档中显示音调符号，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowDiacritics**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例隐藏当前文档中的音调符号。*/
function test() {
    Options.ShowDiacritics = false
}
```


```JavaScript
/*本示例判断如果 WPS 在使用从右向左语言的文档中显示音调符号，则通知用户。*/
function test() {
    if (Options.ShowDiacritics) {
        alert("WPS 在使用从右向左语言的文档中显示音调符号。")
    }
}
```
