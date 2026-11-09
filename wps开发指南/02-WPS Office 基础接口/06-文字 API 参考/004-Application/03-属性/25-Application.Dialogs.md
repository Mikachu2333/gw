# Application.Dialogs

返回一个 **[Dialogs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Dialogs/obj)** 集合，该集合代表 WPS 中所有内置对话框。只读。



## 语法

express.**Dialogs**

express   一个代表 **Application** 对象的变量。

## 类型

Dialogs

## 说明


有关内置对话框的列表，请参阅 **[WdWordDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdWordDialog)** 枚举。



## 示例


```JavaScript
/*本示例显示内置的“查找”对话框。*/
function test() {
    let dialog = Application.Dialogs.Item(wdDialogEditFind)
    dialog.Show()
}
```


```JavaScript
/*本示例显示内置的“打开”对话框。*/
function test() {
    Application.Dialogs.Item(wdDialogFileOpen).Show()
}
```


```JavaScript
/*本示例根据“打印”对话框中的设置内容，打印活动文档。*/
function test() {
    Application.Dialogs.Item(wdDialogFilePrint).Execute()
}
```
