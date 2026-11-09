# CommandBar.BuiltIn

如果指定的命令栏是容器应用程序的内置命令栏，则获取 **True** 。如果是自定义命令栏，则返回 **False** 。只读。



## 语法

express.**BuiltIn**

express   一个代表 **CommandBar** 对象的变量。

## 类型

boolean

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，删除所有未在屏幕上显示的自定义命令栏。*/
function test() {
    let foundFlag = false
    let deletedBars = 0
    for (let i = Application.CommandBars.Count; i >= 1; i--) {
        let commandBar = Application.CommandBars.Item(i)
        if (!commandBar.BuiltIn && !commandBar.Visible) {
            commandBar.Delete()
            foundFlag = true
            deletedBars++
        }
    }
    if (!foundFlag) {
        alert("No command bars have been deleted.")
    } else {
        alert(deletedBars + " custom command bar(s) deleted.")
    }
}
```


```JavaScript
/*本示例运行于各组件，显示艺术字命令栏是否为容器应用程序的内置命令栏。*/
function test() {
    let commandBar = Application.CommandBars.Item("WordArt")
    alert(commandBar.BuiltIn)
}
```
