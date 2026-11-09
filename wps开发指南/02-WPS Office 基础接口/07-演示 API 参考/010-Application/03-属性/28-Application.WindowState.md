# Application.WindowState

返回或设置指定窗口的状态。可读/写。 **PpWindowState** 类型。



## 语法

express.**WindowState**

express   一个代表 **Application** 对象的变量。

## 类型

PpWindowState

## 说明


| **WindowState** 属性的值可以是下列 **PpWindowState** 常量之一： |
| --------------------------------------- |
| **ppWindowMaximized**                   |
| **ppWindowMinimized**                   |
| **ppWindowNormal**                      |

当窗口状态为 **ppWindowNormal** 时，该窗口既未最大化也未最小化。



## 示例


```JavaScript
/*以下示例将应用程序窗口最大化。*/
function test() {
    Application.WindowState = ppWindowMaximized
}
```


```JavaScript
/*本示例判断应用程序窗口的状态，并通知用户。*/
function test() {
    switch (Application.WindowState) {
        case ppWindowMaximized:
            alert("当前应用程序为最大化窗口")
            break
        case ppWindowMinimized:
            alert("当前应用程序为最小化窗口")
            break
        case ppWindowNormal:
            alert("当前应用程序窗口既不最大化也非最小化")
    }
}
```
