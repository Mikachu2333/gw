# CommandBar.Protection

获取或设置一个 **[MsoBarProtection](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoBarProtection)** 常量，代表防止用户对命令栏进行自定义的方式。可读写。



## 语法

express.**Protection**

express   一个代表 **CommandBar** 对象的变量。

## 类型

MsoBarProtection

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

使用常量 **msoBarNoCustomize** 可防止用户访问 **“添加或删除按钮”** 菜单（此菜单项允许用户自定义工具栏）。



## 示例


```JavaScript
/*本示例运行于各组件，遍历命令栏集合，设置名为“Forms”的命令栏停靠状态为受保护，并且可见。*/
function test() {
    let foundFlag = false
    for (let i = 1; i <= Application.CommandBars.Count; i++) {
        let commandBar = Application.CommandBars.Item(i)
        if (commandBar.Name == "Forms") {
            commandBar.Protection = msoBarNoChangeDock
            commandBar.Visible = true
            foundFlag = true
        }
    }
    if (!foundFlag) {
        alert("'Forms' command bar is not in the collection.")
    }
}
```


```JavaScript
/*本示例运行于表格组件，显示是否允许用户自定义活动工作簿中图表命令栏的所有方面。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("Chart")
    alert(commandBar.Protection == msoBarNoProtection)
}
```
