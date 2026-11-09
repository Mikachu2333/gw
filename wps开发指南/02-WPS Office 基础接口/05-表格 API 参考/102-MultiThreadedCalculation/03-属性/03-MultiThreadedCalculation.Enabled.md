# MultiThreadedCalculation.Enabled

使用 **Enabled** 属性可以在运行时启用或禁用 **MultiThreadedCalculation** 对象。可读/写。



## 语法

express.**Enabled**

express   一个代表 **MultiThreadedCalculation** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断是否启用并发计算模式，并通知用户。*/
function test() {
    if (Application.MultiThreadedCalculation.Enabled) {
        alert("启用并发计算模式")
    } else {
        alert("禁用并发计算模式")
    }
}
```


```JavaScript
/*本示例关闭并发计算模式。*/
function test() {
    Application.MultiThreadedCalculation.Enabled = false
}
```
