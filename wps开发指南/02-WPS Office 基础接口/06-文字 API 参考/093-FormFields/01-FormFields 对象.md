# FormFields 对象

 **FormField** 对象的集合，这些对象代表所选内容、范围或文档中的所有窗体域。

## 说明


使用 **FormFields** 属性可返回 **FormFields** 的集合。


## 示例


```JavaScript
/*本示例显示活动文档中文本框窗体域的数量。*/
function test() {
    let count = 0
    for (let i = 1; i <= ActiveDocument.FormFields.Count; i++) {
        let formField = ActiveDocument.FormFields.Item(i)
        if (formField.Type == wdFieldFormTextInput) {
            count++
        }
    }
    alert(`There are ${count} text boxes in this document`)
}
```
将 **Add** 方法与 **FormFields** 对象结合使用，以添加表单字段。



```JavaScript
/*本示例在活动文档的开头添加一个复选框，然后选中该复选框。*/
function test() {
    let formField = ActiveDocument.FormFields.Add(ActiveDocument.Range(0, 0), wdFieldFormCheckBox)
    formField.CheckBox.Value = true
}
```
使用 **FormFields** (Index)（其中 Index 是书签名称或索引号）返回单个 **FormField** 对象。



```JavaScript
/*本示例将 Text1 窗体域的结果设置为“Don Funk”。*/
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

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/member/Add) | 返回一个 **FormField** 对象，该对象代表添加到区域中的新的窗体域。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/member/Item) | 返回集合中的单个 **FormField** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中域的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **FormFields** 对象的父对象。 |
| [Shaded](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/member/Shaded) | 如果将底纹应用于窗体域，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |