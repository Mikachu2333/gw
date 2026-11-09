# Application.ActiveWindow

返回 **[Window](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/obj)** 对象，该对象代表活动窗口（焦点所在的窗口）。如果没有打开的窗口，则会导致出错。只读。



## 语法

express.**ActiveWindow**

express   一个代表 **Application** 对象的变量。

## 类型

Window

## 示例


```JavaScript
/*本示例显示活动窗口的标题文本。*/
function test() {
    alert(Application.ActiveWindow.Caption)
}
```


```JavaScript
/*本示例显示活动窗口的类型是否为文档窗口。*/
function test() {
    alert(Application.ActiveWindow.Type == wdWindowDocument)
}
```
