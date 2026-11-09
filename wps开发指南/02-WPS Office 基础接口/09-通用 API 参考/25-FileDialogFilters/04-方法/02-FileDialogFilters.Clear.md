# FileDialogFilters.Clear

删除当前在文件对话框中应用的所有筛选器。



## 语法

express.**Clear()**

express   一个代表 **FileDialogFilters** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例运行于各组件，遍历“另存为”对话框中的所有筛选器，判断如果筛选器的扩展名中包含字符串“xls”，则删除“另存为”对话框的所有筛选器。*/
function test() {
    // Set the FileDialogFilters collection variable to
    // the FileDialogFilters collection of the File Picker dialog box.
    let fileDialogFilters = Application.FileDialog(msoFileDialogSaveAs).Filters

    // Iterate through the description and extensions of each
    // default filter in the File Picker dialog box.
    for (let i = 1; i <= fileDialogFilters.Count; i++) {
        let fileDialogFilter = fileDialogFilters.Item(i)
        if (fileDialogFilter.Extensions.indexOf("xls") > -1) {
            fileDialogFilters.Clear()
        }
    }
}
```


```JavaScript
/*本示例运行于各组件，先删除“文件选取器”对话框的“文件类型”下拉列表框的所有筛选器，然后为“文件选取器”对话框的“文件类型”下拉列表框的筛选器列表中添加一个新的文件筛选器，并展示“文件选取器”对话框。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    fileDialog.Filters.Clear()
    fileDialog.Filters.Add("example", "*.pptx; *.xlsx; *.docx", 1)
    fileDialog.Show()
}
```
