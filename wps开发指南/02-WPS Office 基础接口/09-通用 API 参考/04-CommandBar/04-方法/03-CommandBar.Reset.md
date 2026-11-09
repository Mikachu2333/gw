# CommandBar.Reset

将内置命令栏重置为其默认配置。



## 语法

express.**Reset()**

express   一个代表 **CommandBar** 对象的变量。

## 返回值

void

## 说明


重置一个内置控件将恢复该控件原来对应的动作，并将各属性恢复成初始状态。重置一个内置命令栏将删除其中的自定义控件并恢复其内置控件。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，判断名为“Chart”的命令栏是否为内置，如果是，则将其设置为可见；如果不是，则将名为“WordArt”的命令栏重置为其默认状态，并禁用名为“Chart”的命令栏*/
function test() {
    let commandBar = Application.CommandBars.Item("Chart")
    if (commandBar.BuiltIn) {
        commandBar.Visible = true
    } else {
        Application.CommandBars.Item("WordArt").Reset()
        commandBar.Enabled = false
    }
}
```


```JavaScript
/*本示例运行于表格组件，将活动工作簿中艺术字命令栏重置为其默认状态。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("WordArt")
    commandBar.Reset()
}
```
