# Application.IgnoreRemoteRequests

如果远程 DDE 请求被忽略，则该值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IgnoreRemoteRequests**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 IgnoreRemoteRequests 属性为true，从而忽略远程 DDE 请求。*/
function test() {
    Application.IgnoreRemoteRequests = true
}
```


```JavaScript
/*本示例演示 IgnoreRemoteRequests 属性的数据类型，并将 IgnoreRemoteRequests 属性的值设置为false。*/
function test() {
    alert("IgnoreRemoteRequests属性的数据类型为：" + typeof Application.IgnoreRemoteRequests)
    Application.IgnoreRemoteRequests = false
}
```
