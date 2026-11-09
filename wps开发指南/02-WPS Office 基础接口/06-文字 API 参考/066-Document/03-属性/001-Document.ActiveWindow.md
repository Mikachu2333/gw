# Document.ActiveWindow

返回一个 **[Window](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Window/obj)** 对象，该对象代表活动窗口（焦点所在的窗口）。只读。



## 语法

express.**ActiveWindow**

express   一个代表 **Document** 对象的变量。

## 类型

Window

## 说明


如果没有打开的窗口，则使用 **[ActiveWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/ActiveWindow)** 属性将出现错误。



## 示例


```JavaScript
/*本示例显示活动窗口的标题文本。*/
function test() {
    alert(ActiveDocument.ActiveWindow.Caption)
}
```


```JavaScript
/*本示例为活动文档的活动窗口打开一个新窗口，然后平铺所有窗口。*/
function test() {
    let window = ActiveDocument.ActiveWindow.NewWindow()
    Windows.Arrange(wdTiled)
}
```


```JavaScript
/*本示例拆分第一个文档的活动窗口。*/
function test() {
    Documents.Item(1).ActiveWindow.Split = true
}
```
