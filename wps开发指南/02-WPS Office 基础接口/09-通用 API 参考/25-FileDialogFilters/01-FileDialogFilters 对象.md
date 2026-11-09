# FileDialogFilters 对象

表示文件对话框中可选文件类型的 **[FileDialogFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilter/obj)** 对象的集合，该对话框由 **FileDialog** 对象显示。

## 说明


使用 **FileDialog** 对象的 **[Filters](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/Filters)** 属性可返回一个 **FileDialogFilters** 集合。


## 示例


```JavaScript
/*本示例运行于各组件，显示“打开”对话框的文件筛选器的数量。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    alert(fileDialog.Filters.Count)
}
```
使用 **Add** 方法可向 **FileDialogFilters** 集合中添加 **FileDialogFilter** 对象。



```JavaScript
/*本示例运行于各组件，使用 Clear 方法清除集合，然后将筛选器添加到集合中。*/
function test() {
    // Create a FileDialog object as a File Picker dialog box.
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    // Change the contents of the Files of Type list.
    // Empty the list by clearing the FileDialogFilters collection.
    fileDialog.Filters.Clear()

    // Add a filter that includes all files.
    fileDialog.Filters.Add("All files", "*.*")
    // Add a filter that includes GIF and JPEG images and make it the first item in the list.
    fileDialog.Filters.Add("Images", "*.gif; *.jpg; *.jpeg", 1)

    // Use the Show method to display the File Picker dialog box and return the user's action.
    // If the user presses the button.
    if (fileDialog.Show() == -1) {
        // Step through each string in the FileDialogSelectedItems collection.
        for (let i = 1; i <= fileDialog.SelectedItems.Count; i++) {
            // selectedItem is a String that contains the path of each selected item.
            // Use any file I/O functions that you want to work with this path.
            // This example displays the path in a message box.
            let selectedItem = fileDialog.SelectedItems.Item(i)
            alert("Path name: " + selectedItem)
        }
    }
    // Set the object variable to null.
    fileDialog = null
}
```
在更改 **FileDialogFilters** 集合时，请记住每个应用程序只能创建单个 **FileDialog** 对象的实例。这意味着在调用一个新对话框类型的 **FileDialog** 方法时， **FileDialogFilters** 集合将重置为其默认筛选器。

 **Clear** 方法会将集合完全清空；但是，如果在清空后没有向集合中添加任何筛选器，将自动添加“所有文件(\*.\*)”筛选器。



```JavaScript
/*本示例运行于各组件，遍历“另存为”对话框中的默认筛选器，判断如果筛选器的扩展名中包含字符串“xls”，则显示该筛选器的说明。*/
function test() {
    // Set the FileDialogFilters collection variable to
    // the FileDialogFilters collection of the SaveAs dialog box.
    let fileDialogFilters = Application.FileDialog(msoFileDialogSaveAs).Filters

    // Iterate through the description and extensions of each
    // default filter in the SaveAs dialog box.
    for (let i = 1; i <= fileDialogFilters.Count; i++) {
        let fileDialogFilter = fileDialogFilters.Item(i)
        // Display the description of filters that include
        // ET files.
        if (fileDialogFilter.Extensions.indexOf("xls") > -1) {
            alert("Description of filter: " + fileDialogFilter.Description)
        }
    }
}
```
当应用于“另存为” **FileDiaog** 对象时，如果 **Filters** 属性与 **Clear** 、 **Add** 或 **Delete** 方法结合使用，则会发生运行时错误。例如，Application.FileDialog(msoFileDialogSaveAs).Filters.Clear()会引起运行时错误。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilters/member/Add) | 在 **“文件”** 对话框的 **“文件类型”** 下拉列表框的筛选器列表中添加一个新的文件筛选器。返回一个代表新添的文件筛选器的 **FileDialogFilter** 对象。 |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilters/member/Clear) | 删除当前在文件对话框中应用的所有筛选器。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilters/member/Delete) | 删除文件对话框筛选。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilters/member/Item) | 获取属于指定的 **FileDialogFilters** 集合的成员的 **[FileDialogFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilter/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilters/member/Application) | 获取一个 **Application** 对象，代表 **FileDialogFilters** 对象的容器应用程序（可以使用 **Automation** 对象的此属性返回该对象的容器应用程序）。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilters/member/Count) | 获取一个 **Long** 类型的值，指示 **FileDialogFilters** 集合中的项数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilters/member/Creator) | 获取一个 32 位整数，指示创建 **FileDialogFilters** 对象时所使用的应用程序。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilters/member/Parent) | 获取 **FileDialogFilters** 对象的 **Parent** 对象。只读。 |