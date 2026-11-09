# CommandBar.Name

获取内置的 **CommandBar** 对象的名称。只读。



## 语法

express.**Name**

express   一个代表 **CommandBar** 对象的变量。

## 类型

string

## 说明


内置命令栏的本地名称显示在标题栏中（在命令栏未固定时）以及可用命令栏列表中（无论该列表显示在容器应用程序的什么位置）。对于内置命令栏， **Name** 属性返回该命令栏的美式英语名称。使用 **NameLocal** 属性可返回其本地化的名称。如果更改了一个自定义命令栏的 **LocalName** 属性值，则该命令栏的 **Name** 值也将发生更改，反之亦然。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，在命令栏集合中查找命令栏“Custom”，如果找到，那么本示例显示该命令栏。*/
function test() {
    let foundFlag = false
    for (let i = 1; i <= Application.CommandBars.Count; i++) {
        let commandBar = Application.CommandBars.Item(i)
        if (commandBar.Name == "Custom") {
            foundFlag = true
            commandBar.Visible = true
        }
    }
    if (!foundFlag) {
        alert("'Custom' bar isn't in collection.")
    } else {
        alert("'Custom' bar is now visible.")
    }
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿中图表命令栏的名称。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("Chart")
    alert(commandBar.Name)
}
```
