# FileDialog.FilterIndex

获取或设置一个 **Long** 类型的值，指示文件对话框的默认文件筛选器。默认筛选器决定首次打开文件对话框时显示的文件类型。可读/写。



## 语法

express.**FilterIndex**

express   一个代表 **FileDialog** 对象的变量。

## 类型

number（int 精度）

## 说明


如果试图将该属性设置为大于筛选数量的数字，将选定最后一个可用筛选。



## 示例


```JavaScript
/*本示例运行于各组件，使用 FileDialog 对象显示“文件选取器”对话框，并添加新的文件筛选器以及将其设为默认筛选器，然后在消息框中显示每个选定的文件。*/
function test() {
    // Create a FileDialog object as a File Picker dialog box.
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    // Add a filter that includes GIF and JPEG images and make it the first item in the list.
    fileDialog.Filters.Add("Images", "*.gif; *.jpg; *.jpeg", 1)
    // Sets the initial file filter to number 1.
    fileDialog.FilterIndex = 1
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
/*本示例运行于各组件，将“打开”对话框的默认文件筛选器设置为最后一个筛选器，然后展示“打开”对话框。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    fileDialog.FilterIndex = fileDialog.Filters.Count
    fileDialog.Show()
}
```
