# CommandBarComboBox.SetFocus

将键盘的焦点移到指定 **CommandBarComboBox** 控件。如果该控件被禁用或不可见，那么此方法将失败。




## 语法

express.**SetFocus()**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 返回值

void

## 说明


| 注释                                                                   |
| -------------------------------------------------------------------- |
| 在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。 |




## 示例


```JavaScript
//本示例创建一个名为“Custom”的命令栏，并在其中添加一个 ComboBox 控件和一个 Button 控件，然后使用 SetFocus 方法为 ComboBox 控件设置焦点。
function test()
{
    let focusBar = Application.CommandBars.Add("Custom")
    CommandBars.Item("Custom").Visible = true 
    CommandBars.Item("Custom").Position = Application.Enum.msoBarTop
    									
    let testComboBox = Application.CommandBars.Item("Custom").Controls.Add(Application.Enum.msoControlComboBox, 1)
    testComboBox.AddItem("First Item", 1)
    testComboBox.AddItem("Second Item", 2)
    let testButton = Application.CommandBars.Item("Custom").Controls.Add(Application.Enum.msoControlButton)
    testButton.FaceId = 17
    // Set the focus to the combo box.
    testComboBox.SetFocus()
}
```
