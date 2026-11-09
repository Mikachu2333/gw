# CommandBars.DisplayKeysInTooltips

如果每个命令栏控件的快捷键都显示在 **“工具提示”** 中，则为 **True** 。可读写。



## 语法

express.**DisplayKeysInTooltips**

express   一个代表 **CommandBars** 对象的变量。

## 类型

boolean

## 说明


要在 **“工具提示”** 中显示快捷键，还必须将 **DisplayTooltips** 属性设置为 **True** 。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，为所有命令栏设置选项。*/
function test() {
    Application.CommandBars.LargeButtons = true
    Application.CommandBars.DisplayTooltips = true
    Application.CommandBars.DisplayKeysInTooltips = true
    Application.CommandBars.MenuAnimationStyle = msoMenuAnimationUnfold
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿的命令栏控件的快捷键是否都展示在“工具提示”中。*/
function test() {
    alert(ActiveWorkbook.CommandBars.DisplayKeysInTooltips)
}
```
