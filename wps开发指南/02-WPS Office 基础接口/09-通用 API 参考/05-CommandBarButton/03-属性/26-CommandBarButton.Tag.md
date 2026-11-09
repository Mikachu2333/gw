# CommandBarButton.Tag

获取或设置有关 **CommandBarButton** 控件的信息，例如，可作为过程参数的数据或用于识别该控件的信息。可读写。




## 语法

express.**Tag**

express   一个代表 **CommandBarButton** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*
本示例可实现的功能为：将自定义工具栏上的按钮的标记设置为“Spelling Button”，并在消息框中显示此标记。
*/
function test() {
    Application.ActiveDocument.CommandBars.Item("Custom").Controls.Item(1).Tag = "Spelling Button"
	alert(Application.ActiveDocument.CommandBars.Item("Custom").Controls.Item(1).Tag)
}


```
