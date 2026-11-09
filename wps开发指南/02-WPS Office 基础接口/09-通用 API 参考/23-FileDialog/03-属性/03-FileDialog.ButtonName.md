# FileDialog.ButtonName

设置或获取代表文件对话框中动作按钮上所显示文本的 **String** 类型的值。可读/写。



## 语法

express.**ButtonName**

express   一个代表 **FileDialog** 对象的变量。

## 类型

string

## 说明


默认情况下，此属性设置为该文件对话框类型的标准文本。例如，在 **“打开”** 对话框中，该属性默认设置为“打开”。此字符串所允许的最大长度为 51 个字符。



## 示例


```JavaScript
/*本示例运行于各组件，使用 FileDialog 对象显示“文件选取器”对话框，并在消息框中显示每个选定的文件。*/
function test() {
    // Create a FileDialog object as a File Picker dialog box.
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    // Change the text on the button.
    fileDialog.ButtonName = "Archive"
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
/*本示例运行于各组件，显示“另存为”对话框中动作按钮上所显示文本。*/
function test() {
    alert(Application.FileDialog(msoFileDialogSaveAs).ButtonName)
}
```
