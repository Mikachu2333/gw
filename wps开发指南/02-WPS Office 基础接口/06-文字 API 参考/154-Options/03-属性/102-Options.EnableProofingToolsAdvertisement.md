# Options.EnableProofingToolsAdvertisement

返回或设置一个 **Boolean** 值，如果为 **True** ，则指定在有其他校对工具可供下载时通知用户。可读写。



## 语法

express.**EnableProofingToolsAdvertisement**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在有其他校对工具可供下载时通知用户。*/
function test() {
    Options.EnableProofingToolsAdvertisement = true
}
```


```JavaScript
/*本示例显示 WPS 是否在有其他校对工具可供下载时通知用户。*/
function test() {
    alert(Options.EnableProofingToolsAdvertisement)
}
```
