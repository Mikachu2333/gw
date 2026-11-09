# Application.Width

返回或设置指定对象的宽度（以磅为单位）。可读/写。



## 语法

express.**Width**

express   一个代表 **Application** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例水平排列第一个和第二个窗口，并分别设置两个窗口的宽度、高度、左边距和上边距。要使以下示例执行，只能有两个打开的文档窗口。*/
function test() {
    Windows.Arrange(ppArrangeTiled)
    //available height
    let height = Application.Windows.Item(1).Height
    //available width
    let window1 = Application.Windows.Item(1)
    window1.Width = Application.Width / 2
    window1.Height = height / 2
    window1.Left = 0

    let window2 = Application.Windows.Item(2)
    window2.Width = Application.Width / 2
    window2.Height = height / 2
    window2.Top = height / 2
    window2.Left = 0
}
```


```JavaScript
/*本示例显示应用程序窗口的宽度。*/
function test() {
    alert(Application.Width)
}
```
