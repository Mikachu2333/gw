# FileDialogSelectedItems.Count

获取一个 **Long** 类型的值，指示 **FileDialogSelectedItems** 集合中的项数。只读。



## 语法

express.**Count**

express   一个代表 **FileDialogSelectedItems** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例运行于各组件，使用 FileDialog 对象显示“文件选取器”对话框，并在消息框中显示每个选定的文件。*/
function test() {
    // Create a FileDialog object as a File Picker dialog box.
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    // Allow the selection of multiple files.
    fileDialog.AllowMultiSelect = true
    // Use the Show method to display the file picker dialog and return the user's action.
    // If the user presses the button..
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
