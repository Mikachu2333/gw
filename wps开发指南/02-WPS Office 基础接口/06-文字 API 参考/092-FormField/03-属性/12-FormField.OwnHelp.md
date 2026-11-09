# FormField.OwnHelp

指定当窗体域具有焦点并且用户按 F1 时在消息框中显示的文本的源。 **Boolean** 类型，可读写。



## 语法

express.**OwnHelp**

express   一个代表 **FormField** 对象的变量。

## 类型

boolean

## 说明


如果为 **True** ，则显示 **HelpText** 属性指定的文本。如果为 **False** ，则显示 **HelpText** 属性指定的“自动图文集”词条的名称。



## 示例


```JavaScript
/*本示例将当前节的第一个窗体域的帮助文字设置为名为“Sample”的“自动图文集”词条的名称。*/
function test() {
    let formField = Selection.Sections.Item(1).Range.FormFields.Item(1)
    formField.OwnHelp = false
    formField.HelpText = "Sample"
}
```


```JavaScript
/*本示例显示当活动文档上名为“CheckBox2”窗体域具有焦点并且用户按 F1 时是否展示指定文本。*/
function test() {
    let formField = ActiveDocument.FormFields.Item("CheckBox2")
    alert(formField.OwnHelp)
}
```
