# FileDialog.InitialView

获取或设置一个 **[MsoFileDialogView](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoFileDialogView)** 常量，代表文件对话框中文件和文件夹的初始表示形式。可读/写。



## 语法

express.**InitialView**

express   一个代表 **FileDialog** 对象的变量。

## 类型

MsoFileDialogView

## 示例


```JavaScript
/*本示例运行于各组件，使用 FileDialog 对象在详细信息视图中显示“文件选取器”对话框，并在消息框中显示每个选定的文件。*/
function test() {
    // Create a FileDialog object as a File Picker dialog box.
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    // Set the initial view to the details view.
    fileDialog.InitialView = msoFileDialogViewDetails
    // Use the Show method to display the File Picker dialog box and return the user's action.
    // If the user presses the button...
    if (fileDialog.Show() == -1) {
        // Step through each string in the FileDialogSelectedItems collection.
        for (let i = 1; i <= fileDialog.SelectedItems.Count; i++) {
            // selectedItem is a String that contains the path of each selected item.
            // Use any file I/O functions that you want to work with this path.
            // This example displays the path in a message box.
            let selectedItem = fileDialog.SelectedItems.Item(i)
            alert("Selected item's path: " + selectedItem)
        }
    }
    // Set the object variable to null.
    fileDialog = null
}
```


```JavaScript
/*本示例运行于各组件，显示“另存为”对话框中文件和文件夹的初始表示形式是否为msoFileDialogViewList。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogSaveAs)
    alert(fileDialog.InitialView == msoFileDialogViewList)
}
```
