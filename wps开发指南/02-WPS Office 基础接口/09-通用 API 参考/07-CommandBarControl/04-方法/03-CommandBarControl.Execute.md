# CommandBarControl.Execute

运行分配给指定 **CommandBarControl** 控件的过程或内置命令。



## 语法

express.**Execute()**

express   一个代表 **CommandBarControl** 对象的变量。

## 返回值

void

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，创建一个命令栏并向其中添加内置命令栏按钮控件。该按钮将执行“保存”命令。本示例使用 Execute 方法执行“保存”命令。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    let cbControl = commandBar.Controls.Add(msoControlButton, CommandBars.Item("Standard").Controls.Item("保存(&S)").Id)
    commandBar.Visible = true
    cbControl.Execute()
}
```


```JavaScript
/*本示例运行于各组件，执行名为“Standard”的命令栏中名为“打开”的控件的命令。*/
function test() {
    let cbControl = Application.CommandBars.Item("Standard").Controls.Item("打开")
    cbControl.Execute()
}
```
