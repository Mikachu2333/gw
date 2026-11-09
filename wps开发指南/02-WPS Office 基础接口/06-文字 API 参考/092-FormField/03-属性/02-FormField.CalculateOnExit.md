# FormField.CalculateOnExit

如果退出指定的窗体域时自动更新对该域的引用，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CalculateOnExit**

express   一个代表 **FormField** 对象的变量。

## 类型

boolean

## 说明


一个 REF 域可用来引用窗体域中的内容。例如，{REF SubTotal} 引用由 SubTotal 书签标识的窗体域。



## 示例


```JavaScript
/*本示例在退出第一个文档中的窗体域时不自动更新对该域的引用。*/
function test() {
    let formFields = Documents.Item(1).FormFields
    for (let i = 1; i <= formFields.Count; i++) {
        formFields.Item(i).CalculateOnExit = false
    }
}
```


```JavaScript
/*本示例在新文档中添加一个文字型窗体域和一个下拉型窗体域，每次键入文字并退出下拉型窗体域时，都将自动更新下拉型窗体域。*/
function test() {
    let document = Documents.Add()
    document.FormFields.Add(Selection.Range, wdFieldFormTextInput)
    let formField = document.FormFields.Add(Selection.Range, wdFieldFormDropDown)
    formField.CalculateOnExit = true
    document.Protect(wdAllowOnlyFormFields)
}
```
