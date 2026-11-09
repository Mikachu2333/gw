# CommandBar.FindControl

获取一个符合指定条件的 **CommandBarControl** 对象。



## 语法

express.**FindControl(Type, Id, Tag, Visible, Recursive)**

express   一个代表 **CommandBar** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | any | 控件的类型。 |
| Id | 可选 | any | 控件的标识符。 |
| Tag | 可选 | any | 控件的标记值。 |
| Visible | 可选 | any | 如果为 **True** ，则只能在搜索中包含可见的命令栏控件。默认值为 **False** 。可见的命令栏包括所有可见的工具栏和执行 **FindControl** 方法时打开的所有菜单。 |
| Recursive | 可选 | any | 如果该值为 **True** ，那么将在命令栏及其所有弹出式子工具栏中查找。此参数仅应用于 **CommandBar** 对象。默认值为 **False** 。 |

## 返回值

CommandBarControl

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

如果 **CommandBars** 集合中有两个或者更多的控件符合搜索条件，那么 **FindControl** 返回找到的第一个控件。如果没有控件符合搜索条件，那么 **FindControl** 返回 null。



## 示例


```JavaScript
/*本示例运行于各组件，在艺术字命令栏中搜索指定的命令栏控件，然后显示该命令栏控件的标题文字。*/
function test() {
    let commandBar = Application.CommandBars.Item("WordArt")
    let barControl = commandBar.FindControl(msoControlButton, 1031, null, false, true)
    alert(barControl.Caption)
}
```


```JavaScript
/*本示例运行于表格组件，在活动工作簿的图表命令栏中搜索指定的命令栏，然后显示该命令栏控件的高度。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("Chart")
    let barControl = commandBar.FindControl(msoControlComboBox)
    alert(barControl.Height)
}
```
