# Application.UserAddress

该属性返回或设置用户的通讯地址。 **String** 类型，可读写。



## 语法

express.**UserAddress**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 说明


使用该通讯地址作为信封上的寄信人地址。



## 示例


```JavaScript
/*本示例设置用户的寄信人地址。*/
function test() {
    Application.UserAddress = "4200 Third Street NE\nAnytown, WA  98999"
}
```


```JavaScript
/*本示例显示“选项”对话框中“用户信息”选项卡的“通讯地址”框中的地址。*/
function test() {
    alert(Application.UserAddress)
}
```
