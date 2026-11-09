# Presentation.WritePassword

设置或返回一个 **String** 类型的值，该值代表保存对指定演示文稿所做的更改时使用的密码。可读/写。



## 语法

express.**WritePassword**

express   一个代表 **Presentation** 对象的变量。

## 类型

string

## 说明


如果未完全下载演示文稿，则此属性的设置将失败并发生错误。



## 示例


```JavaScript
/*本示例设置保存对活动演示文稿所做的更改时使用的密码。*/
function test() {
    Application.ActivePresentation.WritePassword = "Y6dh!et5"
}
```


```JavaScript
/*本示例显示保存对第一篇演示文稿所做的更改时使用的密码的长度。*/
function test() {
    alert("密码长度为：" + Presentations.Item(1).WritePassword.length)
}
```
