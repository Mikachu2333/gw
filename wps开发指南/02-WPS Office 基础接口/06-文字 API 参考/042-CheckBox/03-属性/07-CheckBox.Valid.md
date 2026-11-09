# CheckBox.Valid

如果指定的窗体域对象为有效的复选框窗体域，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**Valid**

express   一个代表 **CheckBox** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在插入点添加一个文字型窗体域。由于 formField 是一个文字输入域而不是一个复选框，所以消息框将显示“false”。*/
function test() {
    Application.Selection.Collapse(wdCollapseStart)
    let formField = Application.ActiveDocument.FormFields.Add(Application.Selection.Range, wdFieldFormTextInput)
    alert(formField.CheckBox.Valid)
}
```


```JavaScript
/*本示例显示活动文档的第一个窗体域对象是否为有效的复选框窗体域。*/
function test() {
    let formField = Application.ActiveDocument.FormFields.Item(1)
    alert(formField.CheckBox.Valid)
}
```
