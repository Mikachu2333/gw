# FileDialogFilter 对象

返回通过 **[FileDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/obj)** 对象显示的文件对话框中的一个文件筛选。每个文件筛选确定文件对话框中显示的文件。

## 说明


使用 **FileDialogFilters** 集合的 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilters/member/Item)** 方法可返回一个 **FileDialogFilter** 对象。

使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilters/member/Add)** 方法可向 **FileDialogFilters** 集合中添加一个 **FileDialogFilter** 对象。

使用 **Extensions** 属性可返回 **FileDialogFilter** 对象用于筛选文件的扩展名，使用 **Description** 属性可以返回筛选的说明，但是这两个属性均为只读。如果要设置扩展名和说明，必须使用 **Add** 方法。


## 示例


```JavaScript
/*本示例运行于各组件，遍历“另存为”对话框中的所有筛选器，判断如果筛选器的扩展名中包含字符串“xls”，则显示该筛选器的说明。*/
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


```JavaScript
/*本示例运行于各组件，显示“打开”对话框的第一个筛选器的说明和扩展名。*/
function test() {
    let fileDialogFilter = Application.FileDialog(msoFileDialogOpen).Filters.Item(1)
    alert(`说明：${fileDialogFilter.Description}\n扩展名：${fileDialogFilter.Extensions}`)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilter/member/Application) | 获取一个 Application 对象，代表 **FileDialogFilter** 对象的容器应用程序（可以使用 **Automation** 对象的此属性返回该对象的容器应用程序）。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilter/member/Creator) | 获取一个 32 位整数，指示创建 **FileDialogFilter** 对象时所使用的应用程序。只读。 |
| [Description](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilter/member/Description) | 获取一个 **String** 类型的值，代表每个 **FileDialogFilter** 对象的说明。该说明为文件对话框中显示的文本。只读。 |
| [Extensions](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilter/member/Extensions) | 获取一个包含扩展名的值，这些扩展名决定对于每个 **FileDialogFilter** 对象在文件对话框中显示的文件。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilter/member/Parent) | 获取 **FileDialogFilter** 对象的 **Parent** 对象。只读。 |