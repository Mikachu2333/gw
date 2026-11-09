# Window.UsableHeight

返回在应用程序窗口区域中一个窗口能占有的最大高度（以磅为单位）。 **Double** 型，只读。



## 语法

express.**UsableHeight**

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
/*本示例显示活动窗口的最大高度和最大宽度。*/
function test() {
    let win = Application.ActiveWindow
    alert(`活动窗口最大高度为 ${win.UsableHeight}\n活动窗口最大宽度为 ${win.UsableWidth}`)
}
```
