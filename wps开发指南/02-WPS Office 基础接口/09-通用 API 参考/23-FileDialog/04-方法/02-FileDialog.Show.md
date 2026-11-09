# FileDialog.Show

显示文件对话框并返回一个 **Long** 类型的值，指示用户按下的是 **“操作”** 按钮（-1）还是 **“取消”** 按钮（0）。在调用 **Show** 方法时，在用户关闭文件对话框之前不会执行其他代码。在 **“打开”** 和 **“另存为”** 对话框中，在使用了 **Show** 方法后会立即使用 **Execute** 方法执行用户操作。



## 语法

express.**Show()**

express   一个代表 **FileDialog** 对象的变量。

## 返回值

number（int 精度）

## 示例


```JavaScript
/*本示例运行于各组件，使用 FileDialog 对象显示“文件选取器”对话框，并在消息框中显示每个选定的文件。*/
function test() {
    // Create a FileDialog object as a File Picker dialog box.
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    // Use the Show method to display the file picker dialog and return the user's action.
    // If the user presses the button.
    if (fileDialog.Show() == -1) {
        // Step through each string in the FileDialogSelectedItems collection.
        for (let i = 1; i <= fileDialog.SelectedItems.Count; i++) {
            // selectedItem is a String that contains the path of each selected item.
            // Use any file I/O functions that you want to work with this path.
            // This example displays the path in a message box.
            let selectedItem = fileDialog.SelectedItems.Item(i)
            alert("The path is: " + selectedItem)
        }
    }
    // Set the object variable to null.
    fileDialog = null
}
```


```JavaScript
/*本示例运行于各组件，将“打开”对话框的默认文件筛选器设置为最后一个筛选器，然后展示“打开”对话框。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    fileDialog.FilterIndex = fileDialog.Filters.Count
    fileDialog.Show()
}
```
