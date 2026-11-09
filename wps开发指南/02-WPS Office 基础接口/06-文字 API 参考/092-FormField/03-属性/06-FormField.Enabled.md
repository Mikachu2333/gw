# FormField.Enabled

如果启用窗体域，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Enabled**

express   一个代表 **FormField** 对象的变量。

## 类型

boolean

## 说明


如果启用了一个窗体域，则在填充该窗体时，可以更改其内容。



## 示例


```JavaScript
/*如果活动文档中的第二个窗体域是一个已启用的复选框，则本示例选中该复选框。*/
function test() {
    let formField = ActiveDocument.FormFields.Item(2)
    if (formField.Enabled && formField.Type == wdFieldFormCheckBox) {
        formField.CheckBox.Value = true
    }
}
```


```JavaScript
/*本示例禁用所选内容中第一个窗体域。*/
function test() {
    Selection.FormFields.Item(1).Enabled = false
}
```
