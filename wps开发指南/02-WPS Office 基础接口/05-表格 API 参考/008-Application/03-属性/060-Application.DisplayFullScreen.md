# Application.DisplayFullScreen

如果 ET 处于全屏显示模式，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayFullScreen**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


全屏显示模式将应用程序窗口最大化，从而可覆盖整个屏幕并隐藏应用程序窗口的标题栏。工具栏、状态栏和编辑栏对全屏显示模式和普通显示模式保留各自独立的显示设置。



## 示例


```JavaScript
/*本示例设置 ET 以全屏显示模式进行显示。*/
function test() {
    Application.DisplayFullScreen = true
}
```


```JavaScript
/*本示例确定ET是否全屏显示如果不是则设置为全屏显示，并通知用户。*/
function test() {
    if (Application.DisplayFullScreen) {
        alert("当前为全屏显示。")
    } else {
        Application.DisplayFullScreen = true
        alert("已切换至全屏显示。")
    }
}
```
