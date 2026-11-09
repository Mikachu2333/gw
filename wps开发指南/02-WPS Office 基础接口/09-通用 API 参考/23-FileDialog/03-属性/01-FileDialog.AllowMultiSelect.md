# FileDialog.AllowMultiSelect

如果允许用户从文件对话框中选择多个文件，则为 **True** 。可读/写。



## 语法

express.**AllowMultiSelect**

express   一个代表 **FileDialog** 对象的变量。

## 类型

boolean

## 说明


此属性对 **“文件夹选取器”** 对话框或 **“另存为”** 对话框无效，因为用户永远无法从这些类型的文件对话框中选择多个文件。



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
/*本示例运行于各组件，判断是否允许用户从“打开”对话框中选择多个文件，并通知用户。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    if (fileDialog.AllowMultiSelect) {
        alert("允许用户从“打开”对话框中选择多个文件")
    } else {
        alert("禁止用户从“打开”对话框中选择多个文件")
    }
}
```
