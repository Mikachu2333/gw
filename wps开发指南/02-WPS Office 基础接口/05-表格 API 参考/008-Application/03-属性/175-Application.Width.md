# Application.Width

返回或设置一 **个 Double** 值，它代表应用程序窗口的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **Application** 对象的变量。

## 类型

number（double 精度）

## 说明


如果窗口处于最小化状态，则 **Width** 为只读，并返回窗口图标的宽度。



## 示例


```JavaScript
/*此示例将活动窗口的尺寸扩大为可用的最大尺寸（假定该窗口尚未最大化）。*/
function test() {
    let window = Application.ActiveWindow
    window.WindowState = xlNormal
    window.Top = 1
    window.Left = 1
    window.Height = Application.UsableHeight
    window.Width = Application.UsableWidth
}
```


```JavaScript
/*此示例将活动窗口最小化，并显示该窗口图标的宽度*/
function test() {
    Application.Windows.Item(1).WindowState = xlMinimized
    alert(Application.Width)
}
```
