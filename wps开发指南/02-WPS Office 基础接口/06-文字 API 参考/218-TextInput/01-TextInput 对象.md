# TextInput 对象

代表一个文本型窗体域。

## 说明


使用 **FormFields** (*Index*) 可返回一个 **FormField** 对象，其中 *Index*是与文本型窗体域或索引号相关联的书签名称。使用 **TextInput** 属性和 **FormField** 对象可返回一个 **TextInput** 对象。


## 示例


```JavaScript
/*本示例删除活动文档中名为“Text1”的文本型窗体域的内容。*/
function test() {
    ActiveDocument.FormFields.Item("Text1").TextInput.Clear()
}
```
索引号代表窗体域在 **FormFields** 集合中的位置。



```JavaScript
/*本示例判断如果活动文档中第一个窗体域的类型是文本型窗体域，则将“Mission Critical”设置为该域的值。*/
function test() {
    if (ActiveDocument.FormFields.Item(1).Type == wdFieldFormTextInput) {
        ActiveDocument.FormFields.Item(1).Result = "Mission Critical"
    }
}
```


```JavaScript
/*本示例判断如果活动文档上第一个文本型窗体域为有效的文本型窗体域，则设置文本框内容的默认文本，否则显示一条提示消息。*/
function test() {
    let TextInput = ActiveDocument.FormFields.Item(1).TextInput
    if (TextInput.Valid) {
        TextInput.Default = "Type your name here"
    } else {
        alert("First field is not a text box")
    }
}
```
使用 **Add** 方法和 **FormFields** 对象可添加一个文本型窗体域。



```JavaScript
/*本示例在活动文档的开始处添加文本型窗体域，然后将该窗体域的名称设置为“FirstName”。*/
function test() {
    let formField = ActiveDocument.FormFields.Add(ActiveDocument.Range(0, 0), wdFieldFormTextInput)
    formField.Name = "FirstName"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextInput/member/Clear) | 删除指定的文字型窗体域中的文字。 |
| [EditType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextInput/member/EditType) | 为指定的文字型窗体域设置选项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextInput/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextInput/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Default](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextInput/member/Default) | 返回或设置表示文本框默认内容的文本。 **String** 类型，可读写。字符串长度限制为 255 个字符。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextInput/member/Format) | 返回指定文本框的文本格式。 **String** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextInput/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **TextInput** 对象的父对象。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextInput/member/Type) | 返回文字型窗体域的类型。只读 **WdTextFormFieldType** 类型。 |
| [Valid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextInput/member/Valid) | 如果指定的窗体域对象为有效的文本型窗体域，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextInput/member/Width) | 返回或设置指定文本输入字段的宽度（以磅为单位）。可读写 **Long** 类型。 |