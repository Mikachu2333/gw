# FileDialog.InitialFileName

设置或返回一个 **String** 类型的值，代表文件对话框中初始显示的路径或文件名。可读/写。



## 语法

express.**InitialFileName**

express   一个代表 **FileDialog** 对象的变量。

## 类型

string

## 说明


在指定文件名时可以使用 **'\*'** 和 **'?'** 通配符，但是指定路径时不能使用这些通配符。 **'\*'** 符号代表任意数量的连续字符，而 **'?'** 代表单个字符。例如， **.InitialFileName = "c:\\c\*s.txt"** 将返回“charts.txt”和“checkregister.txt”。

如果指定了路径而没有指定文件名，则对话框中将显示文件筛选器所允许的所有文件。

如果指定了位于初始文件夹中的某个文件，则对话框中只显示该文件。

如果指定了初始文件夹中不存在的某个文件名，则对话框中将不包含文件。在 **InitialFileName** 属性中指定的文件类型将覆盖文件筛选器的设置。

如果指定了无效路径，则使用上次使用的路径。如果使用无效路径，则会向用户显示警告消息。

将此属性设置为长度大于 256 个字符的字符串将导致运行时错误。



## 示例


```JavaScript
/*本示例运行于各组件，使用 FileDialog 对象显示“文件选取器”对话框，并在消息框中显示每个选定的文件。*/
function test() {
    // Create a FileDialog object as a File Picker dialog box.
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    // Set the initial path to the D:\ drive.
    fileDialog.InitialFileName = "D:\\"
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
/*本示例运行于各组件，设置“另存为”对话框中初始显示的路径及文件名，然后展示“另存为”对话框。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogSaveAs)
    fileDialog.InitialFileName = "D:\\TestFile\\example.docx"
    fileDialog.Show()
}
```
