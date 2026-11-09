# FormField 对象

代表单个窗体域。 **FormField** 对象是 **FormFields** 集合的一个成员。

## 说明


使用 **FormFields** (*index*) 可返回一个 **FormField** 对象，其中 *index* 是窗体域的名称或索引号。


## 示例


```JavaScript
/*本示例将名为“Text1”窗体域的结果设置为“Don Funk”。*/
function test() {
    ActiveDocument.FormFields.Item("Text1").Result = "Don Funk"
}
```
索引号代表窗体域在所选内容、范围或文档中的位置。



```JavaScript
/*本示例显示所选内容中第一个窗体域的名称。*/
function test() {
    if (Selection.FormFields.Count >= 1) {
        alert(Selection.FormFields.Item(1).Name)
    }
}
```
使用 **[FormFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/obj)** 对象的 **Add** 方法可添加一个窗体域。



```JavaScript
/*本示例在活动文档的开始处添加一个复选框，然后选中该复选框。*/
function test() {
    let formField = ActiveDocument.FormFields.Add(ActiveDocument.Range(0, 0), wdFieldFormCheckBox)
    formField.CheckBox.Value = true
}
```
使用 **FormField** 对象的 **CheckBox** 、 **DropDown** 和 **TextInput** 属性可返回 **CheckDown** 、 **DropDown** 和 **TextInput** 对象。



```JavaScript
/*本示例选中活动文档上名为“CheckBox2”的复选框窗体域。*/
function test() {
    ActiveDocument.FormFields.Item("CheckBox2").CheckBox.Value = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/Copy) | 将指定窗体域复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/Cut) | 将指定窗体域从文档中移到剪贴板上。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/Delete) | 删除指定窗体域。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/Select) | 选择指定的对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [CalculateOnExit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/CalculateOnExit) | 如果退出指定的窗体域时自动更新对该域的引用，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [CheckBox](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/CheckBox) | 返回一个 **CheckBox** 对象，该对象代表复选框型窗体域。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [DropDown](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/DropDown) | 返回一个 **DropDown** 对象，该对象代表下拉型窗体域。只读。 |
| [Enabled](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/Enabled) | 如果启用窗体域，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EntryMacro](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/EntryMacro) | 返回或设置指定窗体域（CheckBox、DropDown 或 TextInput）的输入宏的名称。 **String** 类型，可读写。 |
| [ExitMacro](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/ExitMacro) | 返回或设置指定窗体域（CheckBox、DropDown 或 TextInput）的退出宏的名称。 **String** 类型，可读写。 |
| [HelpText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/HelpText) | 返回或设置当窗体域获得焦点并且用户按 F1 时在消息框中显示的文字。 **String** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/Name) | 返回或设置指定对象的名称。 **String** 类型，可读写。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/Next) | 返回集合中的下一个窗体域。只读。 |
| [OwnHelp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/OwnHelp) | 指定当窗体域具有焦点并且用户按 F1 时在消息框中显示的文本的源。 **Boolean** 类型，可读写。 |
| [OwnStatus](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/OwnStatus) | 指定当窗体域具有焦点时状态栏中显示的文本的源。 **Boolean** 类型，可读写。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/Previous) | 返回集合中的前一窗体域。只读。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/Range) | 返回一个 **Range** 对象，该对象代表窗体域中包含的文档部分。 |
| [Result](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/Result) | 返回一个代表指定的窗体域的结果的 **String** 。可读写。 |
| [StatusText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/StatusText) | 返回或设置当窗体域具有焦点时状态栏中显示的文本。 **String** 类型，可读写。 |
| [TextInput](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/TextInput) | 返回一个 **[TextInput](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextInput/obj)** 对象，该对象代表文字型窗体域。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormField/member/Type) | 返回域的类型。只读 **[WdFieldType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFieldType)** 类型。 |