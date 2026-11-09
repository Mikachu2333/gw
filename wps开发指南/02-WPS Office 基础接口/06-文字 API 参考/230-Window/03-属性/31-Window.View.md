# Window.View

返回一个 **[View](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/obj)** 对象，该对象代表指定窗口或窗格的视图。



## 语法

express.**View**

express   一个代表 **Window** 对象的变量。

## 类型

View

## 示例


```JavaScript
/*本示例将活动窗口切换为全屏显示。*/
function test() {
    ActiveDocument.ActiveWindow.View.FullScreen = true
}
```


```JavaScript
/*本示例设置 Windows 集合中所有窗口的视图选项。*/
function test() {
    for (let i = 1; i <= Windows.Count; i++) {
        window = Windows.Item(i)
        window.View.ShowTabs = true
        window.View.ShowParagraphs = true
        window.View.Type = wdNormalView
    }
}
```
