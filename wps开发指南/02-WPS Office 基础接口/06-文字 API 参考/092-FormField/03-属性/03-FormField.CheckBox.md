# FormField.CheckBox

返回一个 **CheckBox** 对象，该对象代表复选框型窗体域。只读。



## 语法

express.**CheckBox**

express   一个代表 **FormField** 对象的变量。

## 类型

CheckBox

## 说明


如果将 **CheckBox** 属性应用于非复选框型窗体域的 **FormField** 对象，则该属性有效，但是返回的对象的 **Valid** 属性将为 **False** 。



## 示例


```JavaScript
/*本示例将活动文档上名为“CheckBox1”的复选框的选中状态设置为未选中。*/
function test() {
    ActiveDocument.FormFields.Item("CheckBox1").CheckBox.Value = false
}
```


```JavaScript
/*本示例将名为“CheckBox1”的复选框的当前值与默认值进行比较。如果两值相等，则 blnSame 变量会设置为 true。*/
function test() {
    let checkBox = ActiveDocument.FormFields.Item("CheckBox1").CheckBox
    let blnSame = false
    if (checkBox.Default == checkBox.Value) {
        blnSame = true
    } else {
        blnSame = false
    }
}
```
