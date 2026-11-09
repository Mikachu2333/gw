# View.ColumnWidth

返回或设置一个常量，该常量确定阅读模式下的列宽。可读/写， **[WdColumnWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdColumnWidth)** 类型。



## 语法

express.**ColumnWidth**

express   一个代表 **View** 对象的变量。

## 类型

WdColumnWidth

## 示例


```JavaScript
/*本示例显示第一个窗口中活动窗格在阅读模式下的列宽是否为默认列宽。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ColumnWidth == wdColumnWidthDefault)
}
```


```JavaScript
/*本示例将活动文档的活动窗口切换为阅读视图，并设置阅读模式下的列宽为窄列宽。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdReadingView
    view.ColumnWidth = wdColumnWidthNarrow
}
```
