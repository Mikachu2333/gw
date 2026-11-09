# Options.UseGermanSpellingReform

如果 WPS 在检查拼写时，使用德语后期修订拼写规则，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**UseGermanSpellingReform**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


由于您选择或安装的语言支持不同（例如美国英语），该属性可能无法使用。



## 示例


```JavaScript
/*本示例将 WPS 设置为使用德语后期修订规则检查拼写。*/
function test() {
    Options.UseGermanSpellingReform = true
}
```


```JavaScript
/*本示例判断如果 WPS 在检查拼写时，使用德语后期修订拼写规则，则通知用户。*/
function test() {
    if (Application.Options.UseGermanSpellingReform) {
        alert("WPS 在检查拼写时，使用德语后期修订拼写规则")
    }
}
```
