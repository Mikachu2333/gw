# CommandBarControl.BeginGroup

如果指定的命令栏控件显示在命令栏上控件组的最前面，则获取 **True** 。可读写。



## 语法

express.**BeginGroup**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例运行于各组件，在活动菜单栏上将最后一个控件作为一个新组的开始。*/
function test() {
    let commandBar = Application.CommandBars.ActiveMenuBar
    let cbControl = commandBar.Controls(commandBar.Controls.Count)
    cbControl.BeginGroup = true
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“WordArt”的命令栏的第一个控件是否展示在该命令栏上控件组的最前面。*/
function test() {
    let cbControl = ActiveWorkbook.CommandBars.Item("WordArt").Controls.Item(1)
    alert(cbControl.BeginGroup)
}
```
