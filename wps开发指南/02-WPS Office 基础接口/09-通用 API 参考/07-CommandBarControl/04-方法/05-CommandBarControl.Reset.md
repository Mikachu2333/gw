# CommandBarControl.Reset

将内置命令栏重置为其默认配置，或将内置 **CommandBarControl** 重置为其初始功能和图符。



## 语法

express.**Reset()**

express   一个代表 **CommandBarControl** 对象的变量。

## 返回值

void

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

重置一个内置控件将恢复该控件原来对应的动作，并将各属性恢复成初始状态。重置一个内置命令栏将删除其中的自定义控件并恢复其内置控件。



## 示例


```JavaScript
/*本示例运行于各组件，判断用户的名称是否为“Level 1”，如果是，则将名为“Chart”的命令栏的第二个控件设置为可见；如果不是，则将名为“WordArt”的命令栏的第一个控件重置为其原始功能和外观，并禁用名为“Chart”的命令栏的第二个控件。*/
function test() {
    let cbControl = Application.CommandBars.Item("Chart").Controls.Item(2)
    if (Application.UserName == "Level 1") {
        cbControl.Visible = true
    } else {
        Application.CommandBars.Item("WordArt").Controls.Item(1).Reset()
        cbControl.Enabled = false
    }
}
```


```JavaScript
/*本示例运行于各组件，将名为“Formatting”的命令栏的第一个控件重置为其原始功能和外观。*/
function test() {
    let cbControl = Application.CommandBars.Item("Formatting").Controls.Item(1)
    cbControl.Reset()
}
```
