# DocumentWindow.Top

返回或设置一个 **Single** 类型值，表示应用程序窗口的工作区的上边缘到文档、应用程序和幻灯片放映窗口的上边缘的距离，以磅为单位。读/写。



## 语法

express.**Top**

express   一个代表 **DocumentWindow** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*以下示例水平排列第一个和第二个窗口。即每个窗口占据应用程序窗口用户区域的一半垂直可用空间和所用水平可用空间。要使以下示例执行，只能有两个打开的文档窗口。*/
function test() {
    Windows.Arrange(ppArrangeTiled)
    let sngHeight = Application.Windows.Item(1).Height
    let sngWidth = Application.Windows.Item(1).Width + Windows.Item(2).Width
    let window1 = Application.Windows.Item(1)
    window1.Width = sngWidth
    window1.Height = sngHeight / 2
    window1.Left = 0

    let window2 = Application.Windows.Item(2)
    window2.Width = sngWidth
    window2.Height = sngHeight / 2
    window2.Top = sngHeight / 2
    window2.Left = 0
}
```


```JavaScript
/*本示例显示活动窗口距离应用程序窗口的工作区上边缘的距离。*/
function test() {
    alert(Application.ActiveWindow.Top + " 磅")
}
```
