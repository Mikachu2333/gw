# Application.CommandBars

返回一个代表 WPP 中所有命令栏的 **CommandBars** 集合。只读。



## 语法

express.**CommandBars**

express   一个代表 **Application** 对象的变量。

## 类型

CommandBars

## 示例


```JavaScript
/*本示例显示 WPP 是否启用艺术字命令栏。*/
function test() {
    let commandBar = Application.CommandBars.Item("WordArt")
    alert(commandBar.Enabled)
}
```


```JavaScript
/*本示例添加一个名为“example”的命令栏，并为该命令栏添加一个控件。*/
function test() {
    let commandBar = Application.CommandBars.Add("example", null, false, true)
    commandBar.Visible = true
    commandBar.Controls.Add(msoControlButton, 2)
}
```
