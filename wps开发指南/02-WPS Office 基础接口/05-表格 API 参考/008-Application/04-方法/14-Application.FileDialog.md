# Application.FileDialog

返回一个 **[FileDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/obj)** 对象，该对象表示文件对话框的实例。



## 语法

express.**FileDialog(fileDialogType)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| fileDialogType | 必选 | MsoFileDialogType | 文件对话框的类型。 |

## 返回值

FileDialog

## 说明


| **MsoFileDialogType** 可为以下 **MsoFileDialogType** 常量之一。 |
| ------------------------------------------------------ |
| **msoFileDialogFilePicker** 允许用户选择一个文件。                |
| **msoFileDialogFolderPicker** 允许用户选择一个文件夹。             |
| **msoFileDialogOpen** 允许用户打开一个文件。                      |
| **msoFileDialogSaveAs** 允许用户保存一个文件。                    |



## 示例


```JavaScript
/*本示例为 ET 打开文件对话框，允许用户选择一个或多个文件。选中这些文件之后，ET 将逐条显示每个文件的路径。*/
function test() {
    // Open the file dialog
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    fileDialog.AllowMultiSelect = true
    fileDialog.Show()

    // Display paths of each file selected
    for (let i = 1; i <= fileDialog.SelectedItems.Count; i++) {
        alert(fileDialog.SelectedItems.Item(i))
    }
}
```


```JavaScript
/*本示例显示 ET 打开文件对话框中文件的初始表示形式是否为msoFileDialogViewList。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    alert(fileDialog.InitialView == msoFileDialogViewList)
}
```
