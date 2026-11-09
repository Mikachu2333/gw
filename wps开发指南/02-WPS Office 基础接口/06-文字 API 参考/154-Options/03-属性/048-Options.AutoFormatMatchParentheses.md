# Options.AutoFormatMatchParentheses

如果 WPS 在自动设置文档或区域的格式时，会更正不恰当匹配的括号，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatMatchParentheses**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 自动更正不恰当匹配的括号。*/
function test() {
    Options.AutoFormatMatchParentheses = true
}
```


```JavaScript
/*本示例判断如果 WPS 自动更正不恰当匹配的括号，则通知用户。*/
function test() {
    if (Options.AutoFormatMatchParentheses) {
        alert("自动更正不恰当匹配的括号。")
    }
}
```
