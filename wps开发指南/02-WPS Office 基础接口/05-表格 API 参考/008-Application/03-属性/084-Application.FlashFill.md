# Application.FlashFill

如果 ET 快速填充功能已启用并处于活动状态，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**FlashFill**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


快速填充检测何时修改适合可向下填充的模式的数据，并将其应用于工作簿中的其他数据，然后自动用结果填充列。



## 示例


```JavaScript
/*本示例判断如果ET快速填充功能已启用并处于活动状态，则通知用户。*/
function test() {
    if (Application.FlashFill) {
        alert("ET 快速填充功能已启用并处于活动状态")
    }
}
```


```JavaScript
/*本示例开启ET快速填充功能并设置为活动状态。*/
function test() {
    Application.FlashFill = true
}
```
