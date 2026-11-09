# Zoom.PageFit

返回或设置窗口的显示比例，以便能查看整页或整个页宽的范围。 **WdPageFit** 类型，可读写。



## 语法

express.**PageFit**

express   一个代表 **Zoom** 对象的变量。

## 类型

WdPageFit

## 说明


如果文档不在页面视图内，则 **wdPageFitFullPage** 常量无效。

如果将 **PageFit** 属性设置为 **wdPageFitBestFit** ，则在每次改变文档窗口的大小时，都将自动重新计算显示比例。如果该属性设置为 **wdPageFitNone** ，则在改变文档窗口的大小时，不会重新计算显示比例。



## 示例


```JavaScript
/*本示例更改第一个窗口的显示比例，以便可查看整个文本宽度的范围。*/
function test() {
    let view = Application.Windows.Item(1).View
    view.Type = wdNormalView
    view.Zoom.PageFit = wdPageFitBestFit
}
```


```JavaScript
/*本示例将活动窗口切换到页面视图并更改显示比例，以便可查看整页。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintView
    view.Zoom.PageFit = wdPageFitFullPage
}
```
