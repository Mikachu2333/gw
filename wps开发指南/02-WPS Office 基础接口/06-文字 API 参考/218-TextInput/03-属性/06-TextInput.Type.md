# TextInput.Type

返回文字型窗体域的类型。只读 **WdTextFormFieldType** 类型。



## 语法

express.**Type**

express   一个代表 **TextInput** 对象的变量。

## 类型

WdTextFormFieldType

## 示例


```JavaScript
/*本示例显示活动文档上第一个文本型窗体域的类型是否为wdRegularText。*/
function test() {
    let textInput = ActiveDocument.FormFields.Item(1).TextInput
    alert(textInput.Type == wdRegularText)
}
```


```JavaScript
/*本示例判断所选内容中第二个文本型窗体域的类型是否为wdDateText，并通知用户。*/
function test() {
    let textInput = Selection.FormFields.Item(2).TextInput
    if (textInput.Type == wdDateText) {
        alert("文本型窗体域的类型为日期文字型域")
    } else {
        alert("文本型窗体域的类型不为日期文字型域")
    }
}
```
