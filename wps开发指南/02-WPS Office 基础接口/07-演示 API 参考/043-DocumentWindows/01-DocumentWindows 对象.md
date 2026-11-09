# DocumentWindows 对象

WPP 中当前所有打开的 [DocumentWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/obj) 对象的集合。该集合不包含打开的幻灯片放映窗口，这些窗口包含在 [SlideShowWindows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideShowWindows/obj) 集合中。

## 说明


如果 Visual Studio 解决方案包含 **Kingsoft.Office.Interop.Wppapi** 的引用，该集合将映射到以下类型:

* **Kingsoft.Office.Interop.Wppapi.DocumentWindows** 

使用 **[Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/member/Windows)** 属性可返回 **DocumentWindows** 集合。

使用 **[NewWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/NewWindow)** 方法创建文档窗口并将其添加到 **DocumentWindows** 集合中。


## 示例


```JavaScript
/*本示例在活动演示文稿中新建一个窗口，然后显示窗口的数量。*/
function test() {
    ActivePresentation.ActiveWindow.NewWindow()
    alert(Windows.Count)
}
```
使用 **Windows** (_index_)（其中 _index_ 是窗口索引号）返回单个 **DocumentWindow** 对象。



```JavaScript
/*本示例关闭第二个文档窗口。*/
function test() {
    Application.Windows.Item(2).Close()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindows/member/Item) | 从指定的 **DocumentWindows** 集合中返回一个 **DocumentWindow** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindows/member/Application) | 返回一个Application对象，该对象表示指定对象的创建者 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindows/member/Count) | 返回指定集合中的对象数。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindows/member/Parent) | 返回指定对象的父对象 |