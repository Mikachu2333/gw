# View.PageColor

返回或设置阅读模式下的页面颜色。可读/写， **[WdPageColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPageColor)** 类型。



## 语法

express.**PageColor**

express   一个代表 **View** 对象的变量。

## 类型

WdPageColor

## 示例


```JavaScript
/*本示例显示活动文档上活动窗口在阅读模式下是否无页面颜色。*/
function test() {
    alert(ActiveDocument.ActiveWindow.View.PageColor == wdPageColorNone)
}
```


```JavaScript
/*本示例将第一个窗口的活动窗格的设置为阅读视图，然后设置阅读模式下的页面颜色。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    view.Type = wdReadingView
    view.PageColor = wdPageColorSepia
}
```
