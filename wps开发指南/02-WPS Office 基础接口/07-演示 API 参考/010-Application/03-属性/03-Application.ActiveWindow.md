# Application.ActiveWindow

返回一个代表活动文档窗口的 **[DocumentWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/obj)** 对象。只读。



## 语法

express.**ActiveWindow**

express   一个代表 **Application** 对象的变量。

## 类型

DocumentWindow

## 示例


```JavaScript
/*本示例将活动窗口最小化。*/
function test() {
    Application.ActiveWindow.WindowState = ppWindowMinimized
}
```


```JavaScript
/*本示例显示活动窗口的标题*/
function test() {
    alert(Application.ActiveWindow.Caption)
}
```
