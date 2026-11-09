# Application.EnableSound

如果对 WPS Office 启用声音，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableSound**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例禁用声音反馈。*/
function test() {
    Application.EnableSound = false
}
```


```JavaScript
/*本示例演示EnableSound的数据类型，当提示框关闭后将EnableSound属性设置为true。*/
function test() {
    alert("EnableSound 属性的数据类型为：" + typeof Application.EnableSound)
    Application.EnableSound = true
}
```
