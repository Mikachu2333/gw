# CheckBox.Default

返回或设置默认的复选框值。如果选中默认值，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Default**

express   一个代表 **CheckBox** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果活动文档的第一个窗体域是复选框类型，则显示其默认值。*/
function test() {
    let formField = Application.ActiveDocument.FormFields.Item(1)
    if (formField.Type == wdFieldFormCheckBox) {
        alert(formField.CheckBox.Default)
    }
}
```


```JavaScript
/*本示例将第一个文档的第一个复选框窗体域设置为选中默认值。*/
function test() {
    let formField = Application.Documents.Item(1).FormFields.Item(1)
    formField.CheckBox.Default = true
}
```
