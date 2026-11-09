# CommandBarButton.Caption

获取或设置命令栏控件的标题文字。可读写。




## 语法

express.**Caption**

express   一个代表 **CommandBarButton** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例在自定义命令栏中添加一个带拼写检查按钮图标的命令栏控件，然后将其标题设置为“Spelling checker”。*/

function test()
{
	let myBar = Application.ActiveDocument.CommandBars.Add("Custom", Application.Enum.msoBarTop, null, true)
	myBar.Visible = true 
	let myControl = myBar.Controls.Add(Application.Enum.msoControlButton, 2)
	myControl.DescriptionText = "Starts the spelling checker"
	myControl.Caption = "Spelling checker"
}
```
