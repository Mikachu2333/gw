# TextInput.Default

返回或设置表示文本框默认内容的文本。 **String** 类型，可读写。字符串长度限制为 255 个字符。



## 语法

express.**Default**

express   一个代表 **TextInput** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动文档上第一个文本型窗体域中的默认文本。*/
function test() {
    let textInput = ActiveDocument.FormFields.Item(1).TextInput
    textInput.Default = "example_1"
}
```


```JavaScript
/*本示例显示所选内容中第二个文本型窗体域中的默认文本。*/
function test() {
    let textInput = Selection.Range.FormFields.Item(2).TextInput
    alert(textInput.Default)
}
```
