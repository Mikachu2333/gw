# FileDialogSelectedItems 对象

 **String** 值的集合，这些值对应于通过 **[FileDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/obj)** 对象显示的文件对话框中用户所选文件或文件夹路径。

## 说明


使用 **FileDialog** 对象的 **[SelectedItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/SelectedItems)** 属性可返回一个 **FileDialogSelectedItems** 集合。


## 示例


```JavaScript
/*本示例运行于各组件，使用 FileDialog 对象显示“文件选取器”对话框，并在消息框中显示每个选定的文件。*/
function test() {
    // Create a FileDialog object as a File Picker dialog box.
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    // Allow the selection of multiple files.
    fileDialog.AllowMultiSelect = true
    // Use the Show method to display the file picker dialog and return the user's action.
    // If the user presses the button.
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
/*本示例运行于各组件，显示用户使用 FileDialog 对象的 Show 方法展示“文件选取器”对话框中选择的最后一个文件的路径。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    fileDialog.AllowMultiSelect = true
    if (fileDialog.Show() == -1) {
        alert(fileDialog.SelectedItems.Item(fileDialog.SelectedItems.Count))
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogSelectedItems/member/Item) | 获取一个 **String** 类型的值，对应于用户在使用 **FileDialog** 对象的 **[Show](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/Show)** 方法显示的文件对话框中所选择的文件之一的路径。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogSelectedItems/member/Application) | 获取一个 **Application** 对象，代表 **FileDialogSelectedItems** 对象的容器应用程序（可以使用 **Automation** 对象的此属性返回该对象的容器应用程序）。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogSelectedItems/member/Count) | 获取一个 **Long** 类型的值，指示 **FileDialogSelectedItems** 集合中的项数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogSelectedItems/member/Creator) | 获取一个 32 位整数，指示创建 **FileDialogSelectedItems** 对象时所使用的应用程序。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogSelectedItems/member/Parent) | 获取 **FileDialogSelectedItems** 对象的 **Parent** 对象。只读。 |