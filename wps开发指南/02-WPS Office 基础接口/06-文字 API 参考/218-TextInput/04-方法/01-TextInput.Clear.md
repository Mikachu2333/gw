# TextInput.Clear

删除指定的文字型窗体域中的文字。



## 语法

express.**Clear()**

express   一个代表 **TextInput** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例保护文档中的窗体，并当第一个窗体域是文字型窗体域时，删除其中的文本。*/
function test() {
    ActiveDocument.Protect(wdAllowOnlyFormFields, true)
    if (ActiveDocument.FormFields.Item(1).Type == wdFieldFormTextInput) {
        ActiveDocument.FormFields.Item(1).TextInput.Clear()
    }
}
```


```JavaScript
/*本示例删除所选内容中第二个文字型窗体域中的文字。*/
function test() {
    Selection.Range.FormFields.Item(2).TextInput.Clear()
}
```
