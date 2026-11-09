# FileDialog.Filters

获取一个 **FileDialogFilters** 集合。只读。



## 语法

express.**Filters**

express   一个代表 **FileDialog** 对象的变量。

## 类型

FileDialogFilters

## 示例


```JavaScript
/*本示例运行于各组件，使用 FileDialog 对象显示“文件选取器”对话框，并添加新的文件筛选器以及将其设为默认筛选器，然后在消息框中显示每个选定的文件。*/
function test() {
    // Create a FileDialog object as a File Picker dialog box.
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    // Add a filter that includes GIF and JPEG images and make it the first item in the list.
    fileDialog.Filters.Add("Images", "*.gif; *.jpg; *.jpeg", 1)
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
/*本示例运行于各组件，显示“打开”对话框的第一个筛选器的说明。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    alert(fileDialog.Filters.Item(1).Description)
}
```
