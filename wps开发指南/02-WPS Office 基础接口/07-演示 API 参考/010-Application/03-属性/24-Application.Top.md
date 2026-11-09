# Application.Top

返回或设置一个 **Single** 类型值，表示应用程序窗口的工作区的上边缘到文档、应用程序和幻灯片放映窗口的上边缘的距离，以磅为单位。读/写。



## 语法

express.**Top**

express   一个代表 **Application** 对象的变量。

## 类型

number（float 精度）

## 说明


将该属性设为一个很大的正值或负值会将整个窗口移出桌面。



## 示例


```JavaScript
/*本示例水平排列第一个和第二个窗口，并分别设置两个窗口的宽度、高度、左边距和上边距。要使以下示例执行，只能有两个打开的文档窗口。*/
function test() {
    Windows.Arrange(ppArrangeTiled)
    //available height
    let height = Application.Windows.Item(1).Height
    //available width
    let width = Application.Windows.Item(1).Width + Windows.Item(2).Width
    let window1 = Application.Windows.Item(1)
    window1.Width = width
    window1.Height = height / 2
    window1.Left = 0

    let window2 = Application.Windows.Item(2)
    window2.Width = width
    window2.Height = height / 2
    window2.Top = Application.Top / 2
    window2.Left = 0
}
```


```JavaScript
/*本示例显示应用程序窗口的上边距。*/
function test() {
    alert(Application.Top + " 磅")
}
```
