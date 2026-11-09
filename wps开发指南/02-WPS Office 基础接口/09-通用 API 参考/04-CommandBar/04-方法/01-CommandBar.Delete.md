# CommandBar.Delete

从集合中删除 **CommandBar** 对象。



## 语法

express.**Delete()**

express   一个代表 **CommandBar** 对象的变量。

## 返回值

void

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
        alert(deletedBars + " custom bar(s) deleted.")
    }
}
```


```JavaScript
/*本示例运行于各组件，判断如果艺术字命令栏为自定义命令栏，则删除该命令栏。*/
function test() {
    let commandBar = Application.CommandBars.Item("WordArt")
    if (!commandBar.BuiltIn) {
        commandBar.Delete()
    }
}
```
