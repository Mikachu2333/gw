# CommandBarControl.Enabled

获取或设置指定是否启用 **CommandBarControl** 的 **Boolean** 值。可读写。



## 语法

express.**Enabled**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

boolean

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

对于命令栏，如果将该属性设置为 **True** ，则该命令栏的名称将出现在可用命令栏列表中。

对于内置控件，如果将 **Enabled** 属性设置为 **True** ，则将由应用程序确定其状态。但如果将该属性设置为 **False** ，则强行禁用该控件。



## 示例


```JavaScript
/*本示例运行于表格组件，显示是否启用活动工作簿上名为“WordArt”的命令栏的第一个控件。*/
function test() {
    let cbControl = ActiveWorkbook.CommandBars.Item("WordArt").Controls.Item(1)
    alert(cbControl.Enabled)
}
```


```JavaScript
/*本示例运行于各组件，启用名为“Formatting”的命令栏的第一个控件。*/
function test() {
    let cbControl = Application.CommandBars.Item("Formatting").Controls.Item(1)
    cbControl.Enabled = true
}
```
