# TextInput.Valid

如果指定的窗体域对象为有效的文本型窗体域，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**Valid**

express   一个代表 **TextInput** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果活动文档上第一个文本型窗体域为有效的文本型窗体域，则将该文字型窗体域的内容更改为“Hello”。*/
function test() {
    let formField = ActiveDocument.FormFields.Item(1)
    if (formField.TextInput.Valid) {
        formField.Result = "Hello"
    }
}
```


```JavaScript
/*本示例显示所选内容中第二个文本型窗体域是否为有效的文本型窗体域。*/
function test() {
    let textInput = Selection.FormFields.Item(2).TextInput
    alert(textInput.Valid)
}
```
