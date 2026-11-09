# Zoom.PageColumns

返回或设置需要在页面视图或打印预览中在屏幕上并排显示的页数。 **Long** 类型，可读写。



## 语法

express.**PageColumns**

express   一个代表 **Zoom** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将活动窗口切换到页面视图，并显示并列竖排的两页。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintView
    view.Zoom.PageColumns = 2
    view.Zoom.PageRows = 1
}
```


```JavaScript
/*本示例将第一个窗口切换到页面视图，并显示整页。*/
function test() {
    let view = Application.Windows.Item(1).View
    view.Type = wdPrintView
    let zoom = view.Zoom
    zoom.PageColumns = 1
    zoom.PageRows = 1
    zoom.PageFit = wdPageFitFullPage
}
```
