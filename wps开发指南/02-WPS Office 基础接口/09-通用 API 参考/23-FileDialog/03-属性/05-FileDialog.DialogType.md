# FileDialog.DialogType

返回一个 **[MsoFileDialogType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoFileDialogType)** 常量，代表 **FileDialog** 对象被设置为要显示的文件对话框的类型。只读。



## 语法

express.**DialogType**

express   一个代表 **FileDialog** 对象的变量。

## 类型

MsoFileDialogType

## 示例


```JavaScript
/*本示例运行于各组件，判断如果 fileDialog 变量代表的 FileDialog 对象为“另存为”对话框或“打开”对话框，则运行 Execute 方法。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogSaveAs)
    // If the user presses the button...
    if (fileDialog.Show() == -1) {
        // Use the DialogType property to determine whether to
        // use the Execute method.
        switch (fileDialog.DialogType) {
            case msoFileDialogOpen:
            case msoFileDialogSaveAs:
                fileDialog.Execute()
                break
        }
    }
}
```


```JavaScript
/*本示例运行于各组件，显示“文件选取器”对话框的类型是否为msoFileDialogFilePicker。*/
function test() {
    alert(Application.FileDialog(msoFileDialogFilePicker).DialogType === msoFileDialogFilePicker)
}
```
