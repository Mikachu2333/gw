# CommandBars.Add

创建一个新的命令栏并将其添加到命令栏集合中。



## 语法

express.**Add(Name, Position, MenuBar, Temporary)**

express   一个代表 **CommandBars** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 可选 | any | 新命令栏的名称。如果省略此参数，则为命令栏指定默认名称（如 “自定义 1”）。 |
| Position | 可选 | any | 新命令栏的位置或类型。可以是 **[MsoBarPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoBarPosition)** 常量之一。 |
| MenuBar | 可选 | any | 设置为 **True** 将以新命令栏替换活动菜单栏。默认值为 **False** 。 |
| Temporary | 可选 | any | 如果为 **True** ，则将使新命令栏变成临时命令栏。临时命令栏将在容器应用程序关闭时删除。默认值为 **False** 。 |

## 返回值

CommandBar

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，添加一个名为“Custom1”的命令栏，并设置该命令栏的位置，然后将该命令栏设置为可见。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom1", msoBarFloating)
    commandBar.Visible = true
}
```


```JavaScript
/*本示例运行于各组件，添加一个名为“example”的命令栏，并为该命令栏添加一个控件。*/
function test() {
    let commandBar = Application.CommandBars.Add("example", null, false, true)
    commandBar.Visible = true
    commandBar.Controls.Add(msoControlButton, 2)
}
```
