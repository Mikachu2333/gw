# CommandBars.DisableCustomize

如果禁用了工具栏的自定义功能，则为 **True** 。可读写。



## 语法

express.**DisableCustomize**

express   一个代表 **CommandBars** 对象的变量。

## 类型

boolean

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，打开或关闭 CommandBars 对象的 DisableCustomize 属性。*/
function test() {
    if (Application.CommandBars.DisableCustomize) {
        Application.CommandBars.DisableCustomize = false
    } else {
        Application.CommandBars.DisableCustomize = true
    }
}
```


```JavaScript
/*本示例运行于表格组件，显示是否禁用活动工作簿的命令栏的自定义功能。*/
function test() {
    alert(ActiveWorkbook.CommandBars.DisableCustomize)
}
```
