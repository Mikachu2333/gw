# Window.Height

返回或设置窗口的高度（以磅为单位）。可读/写 **Long** 类型。



## 语法

express.**Height**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 说明


当窗口处于最小化或最大化时，不能设置该属性。使用 **Application** 对象的 **UsableHeight** 属性可确定窗口的最大尺寸。使用 **WindowState** 属性可确定窗口状态。



## 示例


```JavaScript
/*本示例对活动窗口的高度加以调整，以铺满应用程序的窗口区域。*/
function test() {
    ActiveDocument.ActiveWindow.WindowState = wdWindowStateNormal
    ActiveDocument.ActiveWindow.Height = Application.UsableHeight
}
```


```JavaScript
/*本示例将活动文档第二个窗口的高度调整为400磅。*/
function test() {
    ActiveDocument.Windows.Item(2).WindowState = wdWindowStateNormal
    ActiveDocument.Windows.Item(2).Height = 400
}
```
