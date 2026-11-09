# Application.ShowStartupDialog

如果为 **True** ，则在启动 WPS 时显示 **“任务窗格”** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowStartupDialog**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


 **ShowStartupDialog** 属性是一个全局选项，新的设置仅在重新启动 WPS 后生效。使用 **CommandBars** 集合的 **Visible** 属性可以在不重新启动 WPS 的情况下显示或隐藏任务窗格。



## 示例


```JavaScript
/*本示例关闭“任务窗格”，使其不在启动 WPS 时显示。仅在用户下一次启动 WPS 时才生效。*/
function test() {
    Application.ShowStartupDialog = false
}
```


```JavaScript
/*本示例判断在启动 WPS 时是否显示“任务窗格”，并通知用户。*/
function test() {
    if (Application.ShowStartupDialog) {
        alert("在启动 WPS 时显示“任务窗格”")
    } else {
        alert("在启动 WPS 时隐藏“任务窗格”")
    }
}
```
