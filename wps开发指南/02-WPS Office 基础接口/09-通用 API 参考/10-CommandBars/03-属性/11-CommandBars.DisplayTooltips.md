# CommandBars.DisplayTooltips

如果只要用户将指针放在命令栏控件上方就显示“屏幕提示”，则为 **True** 。可读写。



## 语法

express.**DisplayTooltips**

express   一个代表 **CommandBars** 对象的变量。

## 类型

boolean

## 说明


在容器应用程序中设置 **DisplayTooltips** 属性会立刻影响当时正在运行的每个 WPS Office 应用程序中的所有命令栏和设置该属性后打开的所有 Office 应用程序中的所有命令栏。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，在所有命令栏上显示大控件和工具提示。*/
function test() {
    Application.CommandBars.LargeButtons = true
    Application.CommandBars.DisplayTooltips = true
}
```


```JavaScript
/*本示例运行于表格组件，显示用户将指针放在活动工作簿的命令栏控件上方是否展示“屏幕提示”。*/
function test() {
    alert(ActiveWorkbook.CommandBars.DisplayTooltips)
}
```
