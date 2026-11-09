# CommandBars.FindControl

获取一个符合指定条件的 **CommandBarControl** 对象。



## 语法

express.**FindControl(Type, Id, Tag, Visible)**

express   一个代表 **CommandBars** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | any | 控件的类型。 |
| Id | 可选 | any | 控件的标识符。 |
| Tag | 可选 | any | 控件的标记值。 |
| Visible | 可选 | any | 如果为 **True** ，则只能在搜索中包含可见的命令栏控件。默认值为 **False** 。可见的命令栏包括所有可见的工具栏和执行 **FindControl** 方法时打开的所有菜单。 |

## 返回值

CommandBarControl

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

如果 **CommandBars** 集合中有两个或者更多的控件符合搜索条件，那么 **FindControl** 返回找到的第一个控件。如果没有控件符合搜索条件，那么 **FindControl** 返回 **null** 。



## 示例


```JavaScript
/*本示例运行于各组件，搜索类型为 msoControlButton 且 ID 为 2 的可见的命令栏控件，然后显示该命令栏控件的标题文字。*/
function test() {
    let cbControl = Application.CommandBars.FindControl(msoControlButton, 2, null, true)
    alert(cbControl.Caption)
}
```


```JavaScript
/*本示例运行于表格组件，在活动工作簿中搜索类型为 msoControlComboBox 的命令栏控件，然后显示该控件屏幕提示中显示的文本。*/
function test() {
    let cbControl = ActiveWorkbook.CommandBars.FindControl(msoControlComboBox)
    alert(cbControl.TooltipText)
}
```
