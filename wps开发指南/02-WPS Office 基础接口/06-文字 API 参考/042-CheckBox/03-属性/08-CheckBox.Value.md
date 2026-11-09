# CheckBox.Value

如果选中此复选框，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Value**

express   一个代表 **CheckBox** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果活动文档的第一个窗体域是复选框类型，则选中复选框。*/
function test() {
    let formField = Application.ActiveDocument.FormFields.Item(1)
    if (formField.Type == wdFieldFormCheckBox) {
        formField.CheckBox.Value = true
    }
}
```


```JavaScript
/*本示例将活动文档中名为“CheckBox1”的复选框的大小设置为 14 磅，然后选中该复选框。*/
function test() {
    let checkBox = Application.ActiveDocument.FormFields.Item("CheckBox1").CheckBox
    checkBox.AutoSize = false
    checkBox.Size = 14
    checkBox.Value = true
}
```
