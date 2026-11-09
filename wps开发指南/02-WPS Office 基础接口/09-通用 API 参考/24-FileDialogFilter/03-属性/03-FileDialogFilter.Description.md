# FileDialogFilter.Description

获取一个 **String** 类型的值，代表每个 **FileDialogFilter** 对象的说明。该说明为文件对话框中显示的文本。只读。



## 语法

express.**Description**

express   一个代表 **FileDialogFilter** 对象的变量。

## 类型

string

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
            alert("Filter description: " + fileDialogFilter.Description)
        }
    }
}
```


```JavaScript
/*本示例运行于各组件，显示“打开”对话框的第一个筛选器的说明。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    alert(fileDialog.Filters.Item(1).Description)
}
```
