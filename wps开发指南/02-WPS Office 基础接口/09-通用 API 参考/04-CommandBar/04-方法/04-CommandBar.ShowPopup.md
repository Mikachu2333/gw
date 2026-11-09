# CommandBar.ShowPopup

将指定的命令栏作为快捷菜单，在指定坐标或当前光标位置显示。



## 语法

express.**ShowPopup(x, y)**

express   一个代表 **CommandBar** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| x | 可选 | any | 快捷菜单所在位置的 x 坐标。如果省略此参数，那么将取当前光标位置的 x 坐标。 |
| y | 可选 | any | 快捷菜单所在位置的 y 坐标。如果省略此参数，那么将取当前光标位置的 y 坐标。 |

## 返回值

void

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

当菜单左对齐时， **ShowPopup** 方法显示的快捷菜单的左上角位于 (x, y + 1)；当菜单右对齐时，快捷菜单的右上角位于 (x + 1, y + 1)。您可以使用 Windows 函数 **GetSystemMetrics(SM\_MENUDROPALIGNMENT)** 检查下拉菜单对齐的系统布置。

当 (x, y) 坐标的屏幕位置导致全部或部分弹出式菜单超出可视屏幕的边界，弹出式菜单将发生平移，使其显示在可视区域中。

如果命令栏的 **Position** 属性没有设置为 **msoBarPopup** ，则此方法失败。



## 示例


```JavaScript
/*本示例运行于各组件，创建一个包含两个控件的快捷菜单。ShowPopup 方法用于显示该快捷菜单。*/
function test() {
    let commandBar = Application.CommandBars.Add("example", msoBarPopup, null, false)
    commandBar.Controls.Add(msoControlButton, 3)
    commandBar.Controls.Add(msoControlComboBox)
    commandBar.ShowPopup()
}
```


```JavaScript
/*本示例运行于表格组件，在活动工作簿中添加一个命令栏，并为该命令栏添加两个控件，然后将该命令栏作为快捷菜单在指定坐标展示。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Add("test", msoBarPopup, null, false)
    commandBar.Controls.Add(msoControlButton, 3)
    commandBar.Controls.Add(msoControlDropdown)
    commandBar.ShowPopup(10, 20)
}
```
