# CommandBars.DisplayFonts

如果在 **“字体”** 框中以实际字体显示字体名称，则为 **True** 。可读写。



## 语法

express.**DisplayFonts**

express   一个代表 **CommandBars** 对象的变量。

## 类型

boolean

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，为所有命令栏设置三个选项，包括自定义命令栏及其上的控件。*/
function test() {
    Application.CommandBars.LargeButtons = true
    Application.CommandBars.DisplayFonts = true
    Application.CommandBars.AdaptiveMenus = true
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿的命令栏是否在“字体”框中以实际字体展示字体名称。*/
function test() {
    alert(ActiveWorkbook.CommandBars.DisplayFonts)
}
```
