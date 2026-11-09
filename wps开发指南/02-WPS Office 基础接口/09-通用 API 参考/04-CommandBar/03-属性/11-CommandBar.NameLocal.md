# CommandBar.NameLocal

获取以容器应用程序的语言版本显示的内置命令栏名称，或者返回或设置自定义命令栏的名称。可读写。



## 语法

express.**NameLocal**

express   一个代表 **CommandBar** 对象的变量。

## 类型

string

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

如果要对内置命令栏设置该属性，就会出现错误。

无论有效命令栏列表显示在容器应用程序的哪个位置，内置命令栏的本地名都将显示在标题栏中（当该命令栏未固定时），以及有效命令栏列表中。

如果更改了一个自定义命令栏的 **LocalName** 属性值，则该命令栏的 **Name** 值也将发生更改，反之亦然。



## 示例


```JavaScript
/*本示例运行于各组件，显示容器应用程序中第一个命令栏的名称和本地化名称。*/
function test() {
    let commandBar = Application.CommandBars.Item(1)
    alert("The name of the command bar is " + commandBar.Name)
    alert("The localized name of the command bar is " + commandBar.NameLocal)
}
```


```JavaScript
/*本示例运行于文字组件，向活动文档添加一个命令栏，并设置该命令栏的本地化名称，然后显示该名称。*/
function test() {
    let commandBar = ActiveDocument.CommandBars.Add("example")
    commandBar.NameLocal = "示例文本"
    alert(commandBar.NameLocal)
}
```
