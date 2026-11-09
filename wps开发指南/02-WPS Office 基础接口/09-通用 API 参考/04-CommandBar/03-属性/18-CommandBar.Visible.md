# CommandBar.Visible

获取或设置命令栏的 **Visible** 属性。如果命令栏可见，则为 **True** 。可读写。



## 语法

express.**Visible**

express   一个代表 **CommandBar** 对象的变量。

## 类型

boolean

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

默认情况下，新创建的自定义命令栏的 **Visible** 属性为 **False** 。

必须先将命令栏的 **Enabled** 属性设置为 **True** ，才能将其 **Visible** 属性设置为 **True** 。



## 示例


```JavaScript
/*本示例运行于各组件，将遍历命令栏集合，以查找“Forms”命令栏。如果找到“Forms”命令栏，则显示该命令栏并保护其停靠状态。*/
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
        alert("'Forms'command bar is not in the collection.")
    }
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿中图表命令栏是否可见。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("Chart")
    alert(commandBar.Visible)
}
```
