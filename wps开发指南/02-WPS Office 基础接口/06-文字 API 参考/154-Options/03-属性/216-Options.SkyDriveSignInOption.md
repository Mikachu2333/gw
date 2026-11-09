# Options.SkyDriveSignInOption

如果为 **True** ，则为用户提供登录云存储和其他云位置的选项。 **Boolean** 类型，可读写。



## 语法

express.**SkyDriveSignInOption**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 为用户提供登录云存储和其他云位置的选项。*/
function test() {
    Options.SkyDriveSignInOption = true
}
```


```JavaScript
/*本示例判断如果 WPS 为用户提供登录云存储和其他云位置的选项，则通知用户。*/
function test() {
    if (Options.SkyDriveSignInOption) {
        alert("WPS 为用户提供登录云存储和其他云位置的选项")
    }
}
```
