# Application.ActiveWindow

返回一个 **[Window](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/obj)** 对象，该对象代表活动窗口（顶部窗口）。只读。如果没有打开的窗口，则返回 **null** 。



## 语法

express.**ActiveWindow**

express   一个代表 **Application** 对象的变量。

## 类型

Window

## 示例


```JavaScript
/*本示例显示活动窗口的名称（Caption 属性）。*/
function test() {
    alert("The name of the active window is " + Application.ActiveWindow.Caption)
}
```


```JavaScript
/*本示例表示将活动窗口放大50%。Zoom 属性用于放大或缩小窗口大小*/
function test() {
    Application.ActiveWindow.Zoom += 50
}
```
