# Dialogs 对象

ET 中所有 **[Dialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialog/obj)** 对象的集合。

## 说明


每个 **Dialog** 对象代表一个内置对话框。不能在集合中新建或添加内置对话框。 **Dialog** 对象只能在 **Show** 方法中用来显示相应的对话框。

ET JavaScript 对象库包含许多内置对话框的内置常量。每个常量的前缀均为“xlDialog”，随后即为对话框的名称。例如， **“应用名称”** 对话框常量为 **xlDialogApplyNames** ， **“查找文件”** 对话框常量为 **xlDialogFindFile** 。这些常量是 **XlBuiltinDialog** 枚举类型的成员。

使用 [Dialogs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/Dialogs) 属性可返回 **Dialogs** 集合。


## 示例


```JavaScript
/*本示例显示可用的 ET 内置对话框的个数。*/
function test() {
    alert(Application.Dialogs.Count)
}
```
使用 **Dialogs** (*index*)（其中 *index* 是用于标识对话框的内置常量）可返回单个 [ **Dialog** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialog/obj) 对象。



```JavaScript
/*本示例运行内置的“打开文件”对话框。*/
function test() {
    let dlgAnswer = Application.Dialogs.Item(xlDialogOpen).Show()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialogs/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialogs/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialogs/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialogs/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialogs/member/Parent) | 返回指定对象的父对象。只读。 |