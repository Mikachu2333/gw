# CheckBox 对象

代表一个复选框窗体域。

## 说明


使用 **FormFields** (*Index*) 返回单个 **FormField** 对象（其中 *Index* 是与复选框关联的索引编号或书签名称）。可将 **CheckBox** 属性与 **FormField** 对象配合使用，返回 **CheckBox** 对象。


## 示例


```JavaScript
/*本示例从活动文档中选中名为“CheckBox1”的复选框窗体域。*/
function test() {
    Application.ActiveDocument.FormFields.Item("CheckBox1").CheckBox.Value = true
}
```
索引编号代表窗体域在 **FormFields** 集合中的位置。



```JavaScript
/*本示例判断第一个窗体域的类型，如果是复选框，则选中该复选框。*/
function test() {
    if (Application.ActiveDocument.FormFields.Item(1).Type == wdFieldFormCheckBox) {
        Application.ActiveDocument.FormFields.Item(1).CheckBox.Value = true
    }
}
```


```JavaScript
/*本示例先判断活动文档的第一个窗体域对象是否为有效的复选框窗体域，然后再将复选框大小修改为 14 磅。*/
function test() {
    let checkBox = Application.ActiveDocument.FormFields.Item(1).CheckBox
    if (checkBox.Valid) {
        checkBox.AutoSize = false
        checkBox.Size = 14
    } else {
        alert("First field is not a check box")
    }
}
```
可将 **Add** 方法与 **FormFields** 对象配合使用，添加一个复选框窗体域。



```JavaScript
/*本示例在活动文档的开头添加一个复选框，并将其命名为“Color”，然后选中该复选框。*/
function test() {
    let formField = Application.ActiveDocument.FormFields.Add(ActiveDocument.Range(0, 0), wdFieldFormCheckBox)
    formField.Name = "Color"
    formField.CheckBox.Value = true
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CheckBox/member/Application) | 返回一个 **Application** 对象，该对象代表 WPS 应用程序。 |
| [AutoSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CheckBox/member/AutoSize) | 如果为 **True** ，则根据环绕文字的字体大小调整复选框或文本框的大小。如果为 **False** ，则根据 **Size** 属性调整复选框或文本框的大小。 **Boolean** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CheckBox/member/Creator) | 返回一个 32 位整数，该整数指出用于创建指定对象的应用程序。 **Long** 类型，只读。 |
| [Default](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CheckBox/member/Default) | 返回或设置默认的复选框值。如果选中默认值，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CheckBox/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **CheckBox** 对象的父对象。 |
| [Size](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CheckBox/member/Size) | 返回或设置复选框的大小，以磅为单位。 **Single** 类型，可读写。 |
| [Valid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CheckBox/member/Valid) | 如果指定的窗体域对象为有效的复选框窗体域，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CheckBox/member/Value) | 如果选中此复选框，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |