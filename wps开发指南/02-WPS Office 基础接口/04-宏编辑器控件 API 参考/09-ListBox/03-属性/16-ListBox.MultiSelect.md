# ListBox.MultiSelect

您可以通过该属性获取或设置指定列表框的选择模式，可读写。可为以下常量之一： **fmMultiSelectSingle** 、 **fmMultiSelectMulti** 或 **fmMultiSelectExtended** 。

## 语法

express.**MultiSelect**

express   一个代表 **ListBox** 对象的变量。

## 说明

获取或设置指定列表框的选择模式，可设置为以下值：

| 设置        | 值 | 描述   |
| --------- | - | ---- |
| fmMultiSelectSingle   | 0 | 只能选择一项（默认） |
| fmMultiSelectMulti    | 1 | 单击可选择或取消选择列表中的一项|
| fmMultiSelectExtended | 2 | 按 Shift 的同时单击鼠标可以将选择从以前所选项目扩展到当前项。按 Ctrl 的同时单击鼠标可以选择或取消选择某项。|

## 示例


```JavaScript
/*将ListBox1的多选模式设置为单项选择模式*/
function func1()
{
	UserForm1.ListBox1.MultiSelect = 0
}
```
