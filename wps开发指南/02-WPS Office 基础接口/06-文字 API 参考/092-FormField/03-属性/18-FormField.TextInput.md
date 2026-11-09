# FormField.TextInput

返回一个 **[TextInput](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextInput/obj)** 对象，该对象代表文字型窗体域。



## 语法

express.**TextInput**

express   一个代表 **FormField** 对象的变量。

## 类型

TextInput

## 说明


如果将 **TextInput** 属性应用于非下拉型窗体域的 **FormField** 对象，则该属性有效，但是返回的对象的 **Valid** 属性将为 **False** 。

将 **Result** 属性用于 **FormField** 对象可返回或设置 **TextInput** 对象的内容。



## 示例


```JavaScript
/*本示例保护活动文档的窗体，并删除名为“Text1”的窗体域的内容。*/
function test() {
    ActiveDocument.Protect(wdAllowOnlyFormFields)
    ActiveDocument.FormFields.Item("Text1").TextInput.Clear()
}
```


```JavaScript
/*本示例判断如果活动文档中的第五个窗体域为文字型窗体域，则设置该窗体域的内容。*/
function test() {
    let formField = ActiveDocument.FormFields.Item(5)
    if (formField.Type == wdFieldFormTextInput && formField.TextInput.Type == wdRegularText) {
        formField.Result = "Hello"
    }
}
```
