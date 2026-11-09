# Application.WindowState

返回或设置窗口的状态。[XlWindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlWindowState)类型，可读写。



## 语法

express.**WindowState**

express   一个代表 **Application** 对象的变量。

## 类型

XlWindowState

## 示例


```JavaScript
/*本示例将 ET 应用程序窗口最大化。*/
function test() {
    Application.WindowState = xlMaximized
}
```


```JavaScript
/*此示例调整ET 应用程序窗口的状态，并将窗口尺寸扩大为可用的最大尺寸。*/
function test() {
    Application.WindowState = xlNormal
    Application.Top = 1
    Application.Left = 1
    Application.Height = Application.UsableHeight
    Application.Width = Application.UsableWidth
}
```
