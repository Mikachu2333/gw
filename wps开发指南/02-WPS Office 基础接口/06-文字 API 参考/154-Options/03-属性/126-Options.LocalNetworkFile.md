# Options.LocalNetworkFile

如果在编辑保存在网络服务器上的文件时，WPS 在用户的计算机上创建文件的一个本地副本，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**LocalNetworkFile**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例指示 WPS 不对保存在服务器上的文件创建本地副本文件。*/
function test() {
    Application.Options.LocalNetworkFile = false
}
```


```JavaScript
/*本示例判断如果 WPS 对保存在服务器上的文件创建本地副本文件，则通知用户。*/
function test() {
    if (Options.LocalNetworkFile) {
        alert("WPS 对保存在服务器上的文件创建本地副本文件。")
    }
}
```
