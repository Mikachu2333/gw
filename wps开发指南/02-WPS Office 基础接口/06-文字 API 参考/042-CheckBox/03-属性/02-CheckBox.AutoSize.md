# CheckBox.AutoSize

如果为 **True** ，则根据环绕文字的字体大小调整复选框或文本框的大小。如果为 **False** ，则根据 **Size** 属性调整复选框或文本框的大小。 **Boolean** 类型，可读写。



## 语法

express.**AutoSize**

express   一个代表 **CheckBox** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置根据环绕文字的字体大小调整复选框。*/
function test() {
    let checkBox = Application.ActiveDocument.FormFields.Item("CheckBox1").CheckBox
    checkBox.AutoSize = true
}
```


```JavaScript
/*本示例设置根据 Size 属性调整复选框的大小。*/
function test() {
    let checkBox = Application.ActiveDocument.FormFields.Item("CheckBox1").CheckBox
    checkBox.AutoSize = false
    checkBox.Size = 20
}
```
