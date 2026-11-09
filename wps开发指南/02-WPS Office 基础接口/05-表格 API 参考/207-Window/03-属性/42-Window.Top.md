# Window.Top

返回或设置一个 **Double** 值，它代表从窗口上边缘到可用区域（在菜单、任何停放在顶端的工具栏和编辑栏下方）上边缘的距离（以磅为单位）。



## 语法

express.**Top**

express   一个代表 **Window** 对象的变量。

## 类型

number（double 精度）

## 说明


无法对最大化窗口设置此属性。使用 **[WindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/WindowState)** 属性可返回或设置窗口的状态。



## 示例


```JavaScript
/*本示例水平排列第一个窗口和第二个窗口，也就是说，每个窗口占用可用的垂直空间的一半，占用应用程序窗口的工作区域的所有水平空间。若要运行该示例，必须只打开两个工作表窗口。*/
function test() {
    Application.Windows.Arrange(xlArrangeStyleTiled)
    let ah = Application.Windows.Item(1).Height // available height
    let aw = Application.Windows.Item(1).Width + Application.Windows.Item(2).Width // available width

    let wintop1 = Application.Windows.Item(1)
    wintop1.Width = aw
    wintop1.Height = ah / 2
    wintop1.Left = 0

    let wintop2 = Application.Windows.Item(2)
    wintop2.Width = aw
    wintop2.Height = ah / 2
    wintop2.Top = ah / 2
    wintop2.Left = 0
}
```


```JavaScript
/*此示例将活动窗口设置为xlNormal，再显示从活动窗口上边缘到可用区域上边缘的距离。*/
function test() {
    ActiveWindow.WindowState = xlNormal
    alert(ActiveWindow.Top)
}
```
