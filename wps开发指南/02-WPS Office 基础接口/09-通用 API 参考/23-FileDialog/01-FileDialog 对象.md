# FileDialog 对象

提供文件对话框，其功能与 WPS Office 应用程序中标准的 **“打开”** 和 **“另存为”** 对话框类似。

## 说明


使用 **FileDialog** 方法返回一个 **FileDialog** 对象。 **FileDialog** 方法位于每个单独 Office 应用程序的 **Application** 对象中。该方法使用单个参数 **[MsoFileDialogType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoFileDialogType)** 确定该方法返回的 **FileDialog** 对象类型。 **FileDialog** 对象有四种类型：

* **“打开”** 对话框 - 允许用户选择一个或多个可以在宿主应用程序中使用 **Execute** 方法打开的文件。
* **“另存为”** 对话框 - 允许用户选择一个文件，然后可以使用 **Execute** 方法将当前文件另存为该文件。
* **“文件选取器”** 对话框 - 允许用户选择一个或多个文件。用户选择的文件路径将捕获到 **FileDialogSelectedItems** 集合中。
* **“文件夹选取器”** 对话框 - 允许用户选择一个路径。用户选择的路径将捕获到 **FileDialogSelectedItems** 集合中。

每个宿主应用程序只能创建一个 **FileDialog** 对象实例。因此，即使创建多个 **FileDialog** 对象， **FileDialog** 对象的很多属性也会保持不变。所以，在显示对话框之前请确保已经针对用途适当地设置了所有属性。

若要使用 **FileDialog** 对象显示文件对话框，必须使用 **Show** 方法。显示对话框后，在用户关闭对话框之前将不会执行任何代码。


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
/*本示例运行于各组件，显示“打开”对话框的第一个筛选器的说明和扩展名。*/
function test() {
    let fileDialogFilter = Application.FileDialog(msoFileDialogOpen).Filters.Item(1)
    alert(`说明：${fileDialogFilter.Description}\n扩展名：${fileDialogFilter.Extensions}`)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/Execute) | 在调用 **Show** 方法后立即执行用户的操作。 |
| [Show](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/Show) | 显示文件对话框并返回一个 **Long** 类型的值，指示用户按下的是 **“操作”** 按钮（-1）还是 **“取消”** 按钮（0）。在调用 **Show** 方法时，在用户关闭文件对话框之前不会执行其他代码。在 **“打开”** 和 **“另存为”** 对话框中，在使用了 **Show** 方法后会立即使用 **Execute** 方法执行用户操作。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AllowMultiSelect](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/AllowMultiSelect) | 如果允许用户从文件对话框中选择多个文件，则为 **True** 。可读/写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/Application) | 获取一个 **Application** 对象，代表 **FileDialog** 对象的容器应用程序（可以使用 **Automation** 对象的此属性返回该对象的容器应用程序）。只读。 |
| [ButtonName](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/ButtonName) | 设置或获取代表文件对话框中动作按钮上所显示文本的 **String** 类型的值。可读/写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/Creator) | 获取一个 32 位整数，指示创建 **FileDialog** 对象时所使用的应用程序。只读。 |
| [DialogType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/DialogType) | 返回一个 **[MsoFileDialogType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoFileDialogType)** 常量，代表 **FileDialog** 对象被设置为要显示的文件对话框的类型。只读。 |
| [FilterIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/FilterIndex) | 获取或设置一个 **Long** 类型的值，指示文件对话框的默认文件筛选器。默认筛选器决定首次打开文件对话框时显示的文件类型。可读/写。 |
| [Filters](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/Filters) | 获取一个 **FileDialogFilters** 集合。只读。 |
| [InitialFileName](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/InitialFileName) | 设置或返回一个 **String** 类型的值，代表文件对话框中初始显示的路径或文件名。可读/写。 |
| [InitialView](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/InitialView) | 获取或设置一个 **[MsoFileDialogView](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoFileDialogView)** 常量，代表文件对话框中文件和文件夹的初始表示形式。可读/写。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/Item) | 获取与对象关联的文本。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/Parent) | 获取 **FileDialog** 对象的 **Parent** 对象。只读。 |
| [SelectedItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/SelectedItems) | 获取一个 **FileDialogSelectedItems** 集合。此集合包含用户在使用 **FileDialog** 对象的 **Show** 方法显示的文件对话框中所选的文件的路径列表。只读。 |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/Title) | 设置或获取使用 **FileDialog** 对象显示的文件对话框的标题。可读/写。 |