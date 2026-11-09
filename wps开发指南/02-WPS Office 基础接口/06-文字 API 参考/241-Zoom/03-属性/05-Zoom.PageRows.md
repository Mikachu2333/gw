# Zoom.PageRows

返回或设置在页面视图或打印预览中在屏幕上垂直显示的页数。 **Long** 类型，可读写。



## 语法

express.**PageRows**

express   一个代表 **Zoom** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将活动窗口切换到打印预览并垂直显示两页。*/
function test() {
    Application.PrintPreview = true
    let zoom = ActiveDocument.ActiveWindow.View.Zoom
    zoom.PageColumns = 1
    zoom.PageRows = 2
}
```


```JavaScript
/*本示例更改第一个窗口的视图类型，然后显示垂直展示的页数。*/
function test() {
    let view = Application.Windows.Item(1).View
    view.Type = wdPrintView
    alert(view.Zoom.PageRows)
}
```
