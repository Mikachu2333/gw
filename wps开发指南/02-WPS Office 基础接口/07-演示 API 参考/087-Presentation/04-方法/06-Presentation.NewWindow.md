# Presentation.NewWindow

打开一个包含指定演示文稿的新窗口。返回一个代表新窗口的 **[DocumentWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/obj)** 对象。



## 语法

express.**NewWindow()**

express   一个代表 **Presentation** 对象的变量。

## 返回值

DocumentWindow

## 示例


```JavaScript
/*本示例创建一个包含活动演示文稿的新窗口。*/
function test() {
    Application.ActivePresentation.NewWindow()
}
```


```JavaScript
/*本示例创建一个包含第一篇演示文稿的窗口，并显示该窗口的标题。*/
function test() {
    alert(Presentations.Item(1).NewWindow().Caption)
}
```
