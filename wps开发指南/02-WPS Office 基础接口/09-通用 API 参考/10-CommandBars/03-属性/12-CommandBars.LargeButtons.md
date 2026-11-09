# CommandBars.LargeButtons

如果显示的工具栏按钮比常规尺寸要大，则为 **True** 。可读写。



## 语法

express.**LargeButtons**

express   一个代表 **CommandBars** 对象的变量。

## 类型

boolean

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，切换所有命令栏上工具栏按钮的显示大小。*/
function test() {
    if (Application.CommandBars.LargeButtons) {
        Application.CommandBars.LargeButtons = false
    } else {
        Application.CommandBars.LargeButtons = true
    }
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿的所有工具栏按钮是否比常规尺寸要大。*/
function test() {
    alert(ActiveWorkbook.CommandBars.LargeButtons)
}
```
