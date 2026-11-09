# Application.AskToUpdateLinks

如果 ET 打开带有链接的文件时询问用户是否更新链接，则该值为 **True** 。如果 ET 自动更新链接并且不显示对话框，则该值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**AskToUpdateLinks**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 ET 每当打开包含链接的文件时，询问用户是否更新链接。*/
function test() {
    Application.AskToUpdateLinks = true
}
```


```JavaScript
/*本示例演示 AskToUpdateLinks 属性的数据类型，并将 AskToUpdateLinks 属性的值设置为false。*/
function test() {
    alert("AskToUpdateLinks属性的数据类型为：" + typeof Application.AskToUpdateLinks)
    Application.AskToUpdateLinks = false
}
```
