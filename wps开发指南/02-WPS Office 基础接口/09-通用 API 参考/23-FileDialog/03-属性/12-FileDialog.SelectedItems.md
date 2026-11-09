# FileDialog.SelectedItems

获取一个 **FileDialogSelectedItems** 集合。此集合包含用户在使用 **FileDialog** 对象的 **Show** 方法显示的文件对话框中所选的文件的路径列表。只读。



## 语法

express.**SelectedItems**

express   一个代表 **FileDialog** 对象的变量。

## 类型

FileDialogSelectedItems

## 示例


```JavaScript
/*本示例运行于各组件，使用 FileDialog 对象显示“文件选取器”对话框，并在消息框中显示每个选定的文件。*/
function test() {
    // Create a FileDialog object as a File Picker dialog box.
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    // Allow the selection of multiple files.
    fileDialog.AllowMultiSelect = true
    // Use the Show method to display the file picker dialog and return the user's action.
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
/*本示例运行于各组件，显示用户使用 FileDialog 对象的 Show 方法展示“打开”对话框中选择的第一个文件的路径。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    fileDialog.AllowMultiSelect = false
    if (fileDialog.Show() == -1) {
        alert(fileDialog.SelectedItems.Item(1))
    }
}
```
