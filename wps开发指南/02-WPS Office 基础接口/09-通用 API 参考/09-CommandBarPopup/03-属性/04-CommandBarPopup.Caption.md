# CommandBarPopup.Caption

获取或设置命令栏控件的标题文字。可读写。




## 语法

express.**Caption**

express   一个代表 **CommandBarPopup** 对象的变量。

## 类型

string

## 说明


| 注释                    |
| --------------------- |
| 控件的标题也可作为默认的“屏幕提示”显示。 |

| 注释                                                                   |
| -------------------------------------------------------------------- |
| 在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。 |




## 示例


```JavaScript
//本示例在自定义命令栏中添加一个带拼写检查按钮图标的命令栏控件，然后将其标题设置为“Spelling checker”。
function test()
{
    let myBar = Application.CommandBars.Add("Custom", Application.Enum.msoBarTop, null, true)
    myBar.Visible = true 
    let myControl = myBar.Controls.Add(Application.Enum.msoControlButton, 2)
    myControl.DescriptionText = "Starts the spelling checker"
    myControl.Caption = "Spelling checker"
}
```
