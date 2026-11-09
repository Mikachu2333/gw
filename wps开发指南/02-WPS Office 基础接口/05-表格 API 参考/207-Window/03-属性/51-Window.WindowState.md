# Window.WindowState

返回或设置窗口的状态。 **[XlWindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlWindowState)** 类型，可读写。



## 语法

express.**WindowState**

express   一个代表 **Window** 对象的变量。

## 类型

XlWindowState

## 示例


```JavaScript
/*本示例将第一个文档窗口最大化。*/
function test() {
    Application.Windows.Item(1).WindowState = xlMaximized
}
```


```JavaScript
/*本示例将当前窗口最小化。*/
function test() {
    ActiveWindow.WindowState = xlMinimized
}
```
