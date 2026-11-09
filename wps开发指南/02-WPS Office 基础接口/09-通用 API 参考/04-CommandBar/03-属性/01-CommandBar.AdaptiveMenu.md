# CommandBar.AdaptiveMenu

获取一个 **Boolean** 类型的值，该值指定命令栏是否应包含自适应菜单。可读写。



## 语法

express.**AdaptiveMenu**

express   一个代表 **CommandBar** 对象的变量。

## 类型

boolean

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档的状态栏是否应包含自适应菜单。*/
function test() {
    let commandBar = ActiveDocument.CommandBars.Item("Status Bar")
    alert(commandBar.AdaptiveMenu)
}
```


```JavaScript
/*本示例运行于各组件，设置艺术字命令栏应包含自适应菜单。*/
function test() {
    let commandBar = Application.CommandBars.Item("WordArt")
    commandBar.AdaptiveMenu = true
}
```
