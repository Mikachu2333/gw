# TextInput.Format

返回指定文本框的文本格式。 **String** 类型，只读。



## 语法

express.**Format**

express   一个代表 **TextInput** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档上第一个文本型窗体域中的文本格式。*/
function test() {
    if (ActiveDocument.FormFields.Item(1).Type == wdFieldFormTextInput) {
        alert(ActiveDocument.FormFields.Item(1).TextInput.Format)
    } else {
        alert("First field is not a text form field")
    }
}
```


```JavaScript
/*本示例在光标处插入第一个文档上第二个文本型窗体域的文字格式。*/
function test() {
    let textInput = Documents.Item(1).FormFields.Item(2).TextInput
    Selection.TypeText(textInput.Format)
}
```
