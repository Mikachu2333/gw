# FormField.EntryMacro

返回或设置指定窗体域（CheckBox、DropDown 或 TextInput）的输入宏的名称。 **String** 类型，可读写。



## 语法

express.**EntryMacro**

express   一个代表 **FormField** 对象的变量。

## 类型

string

## 说明


当窗体域获得焦点时，输入宏开始运行。



## 示例


```JavaScript
/*本示例将第一个文档中的第一个窗体域的输入宏指定名为“Blue”的宏。*/
function test() {
    Documents.Item(1).FormFields.Item(1).EntryMacro = "Blue"
}
```


```JavaScript
/*本示例将活动文档中名为“DropDown4”的窗体域的输入宏指定一个名为“Breadth”的宏。*/
function test() {
    ActiveDocument.FormFields.Item("DropDown4").EntryMacro = "Breadth"
}
```
