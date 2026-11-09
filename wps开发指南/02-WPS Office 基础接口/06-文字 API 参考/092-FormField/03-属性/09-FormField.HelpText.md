# FormField.HelpText

返回或设置当窗体域获得焦点并且用户按 F1 时在消息框中显示的文字。 **String** 类型，可读写。



## 语法

express.**HelpText**

express   一个代表 **FormField** 对象的变量。

## 类型

string

## 说明


如果将 **OwnHelp** 属性设置为 **True** ，则 **HelpText** 会指定该文字字符串的值。如果将 **OwnHelp** 设置为 **False** ，则 **HelpText** 会指定包含窗体域的帮助文字的“自动图文集”词条的名称。



## 示例


```JavaScript
/*本示例为活动文档上名为“CheckBox1”的窗体域设置帮助文字。*/
function test() {
    let formField = ActiveDocument.FormFields.Item("CheckBox1")
    formField.OwnHelp = true
    formField.HelpText = "Type your full legal name."
}
```


```JavaScript
/*本示例显示所选内容中第四个窗体域的帮助文字。*/
function test() {
    alert(Selection.FormFields.Item(4).HelpText)
}
```
