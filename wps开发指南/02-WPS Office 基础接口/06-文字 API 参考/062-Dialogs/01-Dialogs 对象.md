# Dialogs 对象

WPS 中的 **[Dialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialog/obj)** 对象的集合。每个 **[Dialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialog/obj)** 对象代表一个内置的 WPS 对话框。

## 说明


使用 [Dialogs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/Dialogs) 属性可返回 **Dialogs** 集合。

无法创建新的内置对话框，或添加到 **Dialogs** 集合。 使用 Dialogs(Index) ，其中 Index 是标识对话框的 **WdWordDialog** 常量，可返回单个 **Dialog** 对象。

有关详细信息，请参阅显示内置 WPS 对话框。


## 示例


```JavaScript
/*本示例显示了可用的内置对话框的数目。*/
function test() {
    alert(Application.Dialogs.Count)
}
```


```JavaScript
/*本示例显示内置的“打开文件”对话框。*/
function test() {
    Application.Dialogs.Item(wdDialogFileOpen).Show()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialogs/member/Item) | 返回 WPS 中的一个对话框。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialogs/member/Application) | 返回一个代表 WPS 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialogs/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的对话框数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialogs/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialogs/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Dialogs** 对象的父对象。 |