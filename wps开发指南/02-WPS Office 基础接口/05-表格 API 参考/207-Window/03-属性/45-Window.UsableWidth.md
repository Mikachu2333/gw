# Window.UsableWidth

返回在应用程序窗口区域中一个窗口能占有的最大宽度（以磅为单位）。 **Double** 型，只读。



## 语法

express.**UsableWidth**

express   一个代表 **Window** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例将活动窗口缩小为该窗口本身可用的最大值（假定指定窗口尚未最大化）。*/
function test() {
    Application.ActiveWindow.WindowState = xlNormal
    Application.ActiveWindow.Top = 1
    Application.ActiveWindow.Left = 1
    Application.ActiveWindow.Height = ActiveWindow.UsableHeight
    Application.ActiveWindow.Width = ActiveWindow.UsableWidth
}
```


```JavaScript
/*本示例先将活动窗口 WindowState 属性设置为 xlNormal，再将该窗口的宽度设置为最大宽度的 2 倍。*/
function test() {
    ActiveWindow.WindowState = xlNormal
    ActiveWindow.Width = ActiveWindow.UsableWidth * 2
}
```
