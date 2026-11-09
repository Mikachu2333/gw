# CommandBarPopup.BeginGroup

如果指定的命令栏控件显示在命令栏上控件组的最前面，则获取 **True** 。可读写。




## 语法

express.**BeginGroup**

express   一个代表 **CommandBarPopup** 对象的变量。

## 类型

boolean

## 说明


| 注释                                                                   |
| -------------------------------------------------------------------- |
| 在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。 |




## 示例


```JavaScript
//本示例在活动菜单栏上将最后一个控件作为一个新组的开始。
function test()
{
    let myMenuBar = Application.CommandBars.ActiveMenuBar
    let lastMenu = myMenuBar.Controls.Item(myMenuBar.Controls.Count)
    lastMenu.BeginGroup = true
}
```
