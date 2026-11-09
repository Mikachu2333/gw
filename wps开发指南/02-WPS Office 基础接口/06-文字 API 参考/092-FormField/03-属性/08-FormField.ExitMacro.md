# FormField.ExitMacro

返回或设置指定窗体域（CheckBox、DropDown 或 TextInput）的退出宏的名称。 **String** 类型，可读写。



## 语法

express.**ExitMacro**

express   一个代表 **FormField** 对象的变量。

## 类型

string

## 说明


当窗体域失去焦点时，退出宏开始运行。



## 示例


```JavaScript
/*本示例将选定内容的第一个窗体域的退出宏指定名为“Reformat”的宏。*/
function test() {
    if (Selection.FormFields.Count > 0) {
        Selection.FormFields.Item(1).ExitMacro = "Reformat"
    }
}
```


```JavaScript
/*本示例将第一个文档中最后一个窗体域的退出宏指定名为“Blue”的宏。*/
function test() {
    let formFields = Documents.Item(1).FormFields
    formFields.Item(formFields.Count).ExitMacro = "Blue"
}
```
