# CommandBar.Enabled

获取或设置用于指定是否启用了指定 **CommandBar** 的 **Boolean** 值。可读写。



## 语法

express.**Enabled**

express   一个代表 **CommandBar** 对象的变量。

## 类型

boolean

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

对于命令栏，如果将该属性设置为 **True** ，则该命令栏的名称将出现在可用命令栏列表中。

对于内置控件，如果将 **Enabled** 属性设置为 **True** ，则将由应用程序确定其状态。但如果将该属性设置为 **False** ，则强行禁用该控件。



## 示例


```JavaScript
/*本示例运行于各组件，显示是否启用艺术字命令栏。*/
function test() {
    let commandBar = Application.CommandBars.Item("WordArt")
    alert(commandBar.Enabled)
}
```


```JavaScript
/*本示例运行于表格组件，判断如果活动工作簿中名为“example”的命令栏为自定义命令栏，则禁用该命令栏。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("example")
    if (!commandBar.BuiltIn) {
        commandBar.Enabled = false
    }
}
```
