# Application.WindowState

返回或设置指定应用程序窗口的状态。 **WdWindowState** 类型，可读写。



## 语法

express.**WindowState**

express   一个代表 **Application** 对象的变量。

## 类型

WdWindowState

## 说明


 **wdWindowStateNormal** 常量表示没有最大化或最小化的窗口。无法设置不活动窗口的状态。在设置窗口状态之前可用 **Activate** 方法激活窗口。



## 示例


```JavaScript
/*本示例判断应用程序窗口的状态，并通知用户。*/
function test() {
    switch (Application.WindowState) {
        case wdWindowStateMaximize:
            alert("应用程序窗口为最大化状态")
            break
        case wdWindowStateMinimize:
            alert("应用程序窗口为最小化状态")
            break
        case wdWindowStateNormal:
            alert("应用程序窗口为正常状态")
            break
    }
}
```


```JavaScript
/*本示例调整应用程序窗口的状态。*/
function test() {
    Application.WindowState = wdWindowStateNormal
}
```
