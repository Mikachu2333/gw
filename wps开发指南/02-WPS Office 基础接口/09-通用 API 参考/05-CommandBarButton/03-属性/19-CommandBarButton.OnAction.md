# CommandBarButton.OnAction

获取或设置一个 JS函数的名称，该过程在用户单击或更改 **CommandBarButton** 控件的值时运行。可读写。




## 语法

express.**OnAction**

express   一个代表 **CommandBarButton** 对象的变量。

## 类型

string

## 说明


容器应用程序将确定该值是否是一个合法的宏名。

| 注释                                                                   |
| -------------------------------------------------------------------- |
| 在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。 |




## 示例


```JavaScript
//本示例在名为“Custom”的命令栏中添加一个命令栏控件。COM 加载项“FinanceAddIn”将在每次单击该控件时运行。
function test()
{
    let myBar = Application.CommandBars.Item("Custom")
    let myControl = myBar.Controls.Add(Application.Enum.msoControlButton)
    myControl.FaceId = 2
    myControl.OnAction = "!<FinanceAddIn>"
    myBar.Visible = true
}
```
