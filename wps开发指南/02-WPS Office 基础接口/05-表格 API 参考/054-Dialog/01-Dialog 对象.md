# Dialog 对象

代表内置的 ET 对话框。

## 说明


 **Dialog** 对象是 [ **Dialogs** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialogs/obj) 集合的成员。 **Dialogs** 集合包含 ET 中的所有内置对话框。不能在集合中新建或添加内置对话框。 **Dialog** 对象只能在 **[Show](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialog/member/Show)** 方法中用来显示相应的对话框。

ET JavaScript 对象库包含许多内置对话框的内置常量。每个常量的前缀均为“xlDialog”，随后即为对话框的名称。例如， **“应用名称”** 对话框常量为 **[xlDialogApplyNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlBuiltInDialog)** ， **“查找文件”** 对话框常量为 **[xlDialogFindFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlBuiltInDialog)** 。这些常量是 [ **XlBuiltinDialog** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlBuiltInDialog) 枚举类型的成员。

使用 **Dialogs** ( *index*)（其中 *index* 是用于标识对话框的内置常量）可返回单个 **Dialog** 对象。


## 示例


```JavaScript
/*本示例显示“打开文件”对话框。*/
function test() {
    let dlgAnswer = Application.Dialogs.Item(xlDialogOpen).Show()
}
```


```JavaScript
/*本示例打开“选项”对话框，并显示用户的选择。*/
function test() {
    if (Application.Dialogs.Item(xlDialogOptionsEdit).Show()) {
        alert(" 用户选择“确定” ")
    } else {
        alert(" 用户选择“取消” ")
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Show](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialog/member/Show) | 显示内置的对话框，等待用户输入数据，然后返回一个代表用户响应的 **Boolean** 值。如果用户单击“打开”，则返回 **True** ；如果用户单击“取消”，则返回 **False** 。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialog/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialog/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialog/member/Parent) | 返回指定对象的父对象。只读。 |