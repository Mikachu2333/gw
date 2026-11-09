# DocumentWindow.Width

返回或设置指定对象的宽度（以磅为单位）。读/写。



## 语法

express.**Width**

express   一个代表 **DocumentWindow** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例水平排列第一个和第二个窗口。即每个窗口占据应用程序窗口用户区域的一半垂直可用空间和所有水平可用空间。若要使此示例正常工作，必须只打开两个文档窗口。*/
function test() {
    Windows.Arrange(ppArrangeTiled)
    let ah = Application.Windows.Item(1).Height // available height
    let aw = Application.Windows.Item(1).Width + Windows.Item(2).Width // available width

    let window1 = Application.Windows.Item(1)
    window1.Width = aw
    window1.Height = ah / 2
    window1.Left = 0

    let window2 = Application.Windows.Item(2)
    window2.Width = aw
    window2.Height = ah / 2
    window2.Top = ah / 2
    window2.Left = 0
}
```


```JavaScript
/*本示例将活动演示文稿中第二个幻灯片第一个形状的宽度设置为 80 磅。*/
function test() {
    Application.ActivePresentation.Slides.Item(2).Shapes.Item(1).Width = 80
}
```
