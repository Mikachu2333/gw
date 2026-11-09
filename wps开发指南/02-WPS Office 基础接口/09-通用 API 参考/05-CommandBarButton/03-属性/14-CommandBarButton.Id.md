# CommandBarButton.Id

获取内置的 **CommandBarButton** 控件的 ID。只读。




## 语法

express.**Id**

express   一个代表 **CommandBarButton** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*
在本示例中，如果名为“Custom2”的命令栏上第一个控件的按钮的 ID 值小于 25，则更改其按钮图符。
*/
function test()
{
	let ctrl = Application.ActiveDocument.CommandBars.Item("Custom").Controls.Item(1)
	if ( ctrl.Id < 25 ) {
    	ctrl.FaceId = 17
    	ctrl.Tag = "Changed control"
	}
}

/*下面的示例将名为“Standard”的工具栏上每个控件的标题更改为该控件当前的 Id 属性值。*/

function test()
{
	let ctl = Application.ActiveDocument.CommandBars.Item("Standard").Controls
	for (let i = 1; i <= ctl.Count; i++) {
    	ctl.Item(i).Caption = String(ctl.Id)
	}
}
```
