# Application.FlashFillMode

如果启用了快速填充功能，则为 **True** 。 可读/写， **Boolean** 类型。



## 语法

express.**FlashFillMode**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果ET启用了快速填充功能，则通知用户。*/
function test() {
    if (Application.FlashFillMode) {
        alert("ET 启用了快速填充功能")
    }
}
```


```JavaScript
/*本示例启用快速填充功能。*/
function test() {
    Application.FlashFillMode = true
}
```
