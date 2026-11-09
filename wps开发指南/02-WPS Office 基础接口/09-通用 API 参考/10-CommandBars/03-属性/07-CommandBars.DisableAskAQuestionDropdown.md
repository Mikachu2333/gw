# CommandBars.DisableAskAQuestionDropdown

如果启用了 **“应答向导”** 下拉菜单，则为 **True** 。可读写。



## 语法

express.**DisableAskAQuestionDropdown**

express   一个代表 **CommandBars** 对象的变量。

## 类型

boolean

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，打开或关闭 CommandBars 对象的 DisableAskAQuestionDropdown 属性。*/
function test() {
    if (Application.CommandBars.DisableAskAQuestionDropdown) {
        Application.CommandBars.DisableAskAQuestionDropdown = false
    } else {
        Application.CommandBars.DisableAskAQuestionDropdown = true
    }
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿的命令栏的 DisableAskAQuestionDropdown 属性值。*/
function test() {
    alert(ActiveWorkbook.CommandBars.DisableAskAQuestionDropdown)
}
```
