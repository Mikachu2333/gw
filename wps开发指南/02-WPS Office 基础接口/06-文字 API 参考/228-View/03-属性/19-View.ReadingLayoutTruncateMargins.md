# View.ReadingLayoutTruncateMargins

返回或设置一个 **[WdReadingLayoutMargin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdReadingLayoutMargin)** 常量，该常量代表当在阅读版式中查看文档时是显示还是隐藏边距。可读写。



## 语法

express.**ReadingLayoutTruncateMargins**

express   一个代表 **View** 对象的变量。

## 类型

WdReadingLayoutMargin

## 示例


```JavaScript
/*本示例显示活动文档上活动窗口在阅读视图展示页面时是否不带边距。*/
function test() {
    alert(ActiveDocument.ActiveWindow.View.ReadingLayoutTruncateMargins == wdAutomaticMargin)
}
```


```JavaScript
/*本示例将第一个窗口的活动窗格切换为阅读视图，并设置在阅读视图显示页面时带边距。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    view.Type = wdReadingView
    view.ReadingLayoutTruncateMargins = wdFullMargin
}
```
