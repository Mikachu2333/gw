# Options.AutoFormatPlainTextWordMail

如果在 WPS 中打开纯文本格式的电子邮件时，WPS 将自动进行格式设置，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoFormatPlainTextWordMail**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为可对打开的纯文本格式的电子邮件自动进行格式设置。*/
function test() {
    Options.AutoFormatPlainTextWordMail = true
}
```


```JavaScript
/*本示例显示是否将 WPS 设置为可对打开的纯文本格式的电子邮件自动进行格式设置。*/
function test() {
    alert(Options.AutoFormatPlainTextWordMail)
}
```
