# Options.AutoFormatAsYouTypeMatchParentheses

如果为 **True** ，WPS 会自动更正不正确成对的括号，可读写。



## 语法

express.**AutoFormatAsYouTypeMatchParentheses**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在用户键入时自动更正不正确成对的括号。*/
function test() {
    Options.AutoFormatAsYouTypeMatchParentheses = true
}
```


```JavaScript
/*本示例判断如果 WPS 在用户键入时自动更正不正确成对的括号，则通知用户。*/
function test() {
    if (Options.AutoFormatAsYouTypeMatchParentheses) {
        alert("用户键入时自动更正不正确成对的括号。")
    }
}
```
