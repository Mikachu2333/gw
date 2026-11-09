# CommandBars.AdaptiveMenus

此属性可选中或取消选中指定 WPS Office 中菜单是完全显示还是按个性化方式显示的选项的复选框控件。可读写。



## 语法

express.**AdaptiveMenus**

express   一个代表 **CommandBars** 对象的变量。

## 类型

boolean

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

如果对所有 WPS Office 应用程序都启用了自适应菜单，则为 **True** 。可读写 **Boolean** 类型。



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
/*本示例运行于表格组件，显示活动工作簿上所有命令栏的 AdaptiveMenus 属性值。*/
function test() {
    alert(ActiveWorkbook.CommandBars.AdaptiveMenus)
}
```
