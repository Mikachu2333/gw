# CheckBox.Size

返回或设置复选框的大小，以磅为单位。 **Single** 类型，可读写。



## 语法

express.**Size**

express   一个代表 **CheckBox** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动文档中名为“CheckBox1”的复选框的大小设置为 14 磅，然后选中该复选框。*/
function test() {
    let checkBox = Application.ActiveDocument.FormFields.Item("CheckBox1").CheckBox
    checkBox.AutoSize = false
    checkBox.Size = 14
    checkBox.Value = true
}
```


```JavaScript
/*本示例显示第一个文档的第一个复选框窗体域的大小。*/
function test() {
    let formField = Application.Documents.Item(1).FormFields.Item(1)
    alert(formField.CheckBox.Size)
}
```
