# DropDown.Valid

如果指定的窗体域对象为有效的下拉型窗体域，则该属性为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**Valid**

express   一个代表 **DropDown** 对象的变量。

## 类型

boolean

## 说明


在应用 **DropDown** 属性之前，请使用 **FormField** 对象的 **Type** 属性来确定窗体域的类型 （ **wdFieldFormDropDown** ）。该措施可确保 **FormField** 对象为要求的类型。



## 示例


```JavaScript
/*本示例判断活动文档上第一个窗体域是否为有效的下拉型窗体域，并通知用户。*/
function test() {
    let formField = ActiveDocument.FormFields.Item(1)
    if (formField.Type == wdFieldFormDropDown) {
        if (formField.DropDown.Valid) {
            alert("窗体域是一个有效的下拉型窗体域。")
        } else {
            alert("窗体域不是一个有效的下拉型窗体域。")
        }
    } else {
        alert("窗体域不是下拉型窗体域。")
    }
}
```


```JavaScript
/*本示例判断如果第一个文档上名为”“DropDown1”的窗体域为下拉型窗体域，则显示其是否为有效的下拉型窗体域。*/
function test() {
    let formField = Documents.Item(1).FormFields.Item("DropDown1")
    if (formField.Type == wdFieldFormDropDown) {
        alert(formField.DropDown.Valid)
    }
}
```
