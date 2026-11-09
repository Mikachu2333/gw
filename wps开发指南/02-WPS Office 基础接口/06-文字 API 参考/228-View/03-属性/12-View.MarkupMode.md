# View.MarkupMode

返回或设置一个 **[WdRevisionsMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRevisionsMode)** 常量，该常量代表修订的显示模式。可读写。



## 语法

express.**MarkupMode**

express   一个代表 **View** 对象的变量。

## 类型

WdRevisionsMode

## 示例


```JavaScript
/*本示例设置活动文档上活动窗口的修订的显示方式。*/
function test() {
    ActiveDocument.ActiveWindow.View.MarkupMode = wdInLineRevisions
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格中修订的展示方式是否为wdBalloonRevisions。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.MarkupMode == wdBalloonRevisions)
}
```
