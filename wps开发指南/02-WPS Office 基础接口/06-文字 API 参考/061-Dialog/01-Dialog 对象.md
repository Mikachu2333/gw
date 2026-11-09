# Dialog 对象

代表一个内置对话框。 **Dialog** 对象是 **[Dialogs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialogs/obj)** 集合的成员。 **[Dialogs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialogs/obj)** 集合包含 WPS 中的所有内置对话框。不能在 **[Dialogs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialogs/obj)** 集合中创建新的内置对话框，也不能向其中添加内置对话框。

## 说明


使用 **Dialogs** (*Index*) 返回单个 **Dialog** 对象（其中 *Index* 是标识对话框的 **WdWordDialog** 常量）。

 **WdWordDialog** 常量由“wdDialog”前缀加上菜单和对话框的名称组成。例如， **“页面设置”** 对话框的该常量为 **wdDialogFilePageSetup** ，而 **“新建”** 对话框的该常量为 **wdDialogFileNew** 。

有关使用内置 WPS 对话框的详细信息，请参阅显示内置 WPS 对话框。


## 示例


```JavaScript
/*本示例显示和执行在内置的“打开”对话框中采取的操作。*/
function test() {
    Application.Dialogs.Item(wdDialogFileOpen).Show()
}
```


```JavaScript
/*本示例判断如果内置 WPS 对话框“段落格式”的类型为wdDialogFormatParagraph，则通知用户*/
function test() {
    if (Application.Dialogs.Item(wdDialogFormatParagraph).Type == wdDialogFormatParagraph) {
        alert("对话框“段落格式”的类型为wdDialogFormatParagraph")
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Display](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialog/member/Display) | 显示指定的 WPS 内置对话框，直到用户关闭该对话框或已超过指定时限。返回一个 **Long** 类型值，指明关闭对话框时单击的按钮。 |
| [Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialog/member/Execute) | 应用 WPS 对话框的当前设置。 |
| [Show](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialog/member/Show) | 显示和执行在指定的 WPS 内置对话框中的初始操作。返回一个 **Number** 类型值，指明关闭对话框时单击的按钮。 |
| [Update](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialog/member/Update) | 更新内置 WPS 对话框中显示的值。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialog/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialog/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [DefaultTab](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialog/member/DefaultTab) | 显示指定的对话框时，该属性返回或设置活动选项卡。 **WdWordDialogTab** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialog/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Dialog** 对象的父对象。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialog/member/Type) | 返回内置 WPS 对话框的类型。只读 **[WdWordDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdWordDialog)** 类型。 |