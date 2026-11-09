# Window.WindowState

返回或设置指定文档窗口或任务窗口的状态。 **[WdWindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdWindowState)** 类型，可读写。



## 语法

express.**WindowState**

express   一个代表 **Window** 对象的变量。

## 类型

WdWindowState

## 说明


 **wdWindowStateNormal** 常量表示没有最大化或最小化的窗口。无法设置不活动窗口的状态。在设置窗口状态之前可用 **[Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/member/Activate)** 方法激活窗口。



## 示例


```JavaScript
/*本示例将没有最大化或最小化的活动窗口最大化。*/
function test() {
    if (ActiveWindow.WindowState == wdWindowStateNormal) {
        ActiveWindow.WindowState = wdWindowStateMaximize
    }
}
```


```JavaScript
/*本示例判断活动窗口的状态，并通知用户。*/
function test() {
    switch (ActiveWindow.WindowState) {
        case wdWindowStateNormal:
            alert("正常")
            break
        case wdWindowStateMaximize:
            alert("最大化")
            break
        case wdWindowStateMinimize:
            alert("最小化")
            break
    }
}
```
