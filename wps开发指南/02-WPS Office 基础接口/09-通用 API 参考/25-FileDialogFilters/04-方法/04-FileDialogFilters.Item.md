# FileDialogFilters.Item

获取属于指定的 **FileDialogFilters** 集合的成员的 **[FileDialogFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialogFilter/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **FileDialogFilters** 对象的变量。

## 返回值

FileDialogFilter

## 示例


```JavaScript
/*本示例运行于各组件，显示“打开”对话框的最后一个筛选器的扩展名。*/
function test() {
    let fileDialogFilters = Application.FileDialog(msoFileDialogOpen).Filters
    alert(fileDialogFilters.Item(fileDialogFilters.Count).Extensions)
}
```


```JavaScript
/*本示例运行于各组件，显示“另存为”对话框的第一个筛选器的说明和扩展名。*/
function test() {
    let fileDialogFilter = Application.FileDialog(msoFileDialogSaveAs).Filters.Item(1)
    alert(`说明：${fileDialogFilter.Description}\n扩展名：${fileDialogFilter.Extensions}`)
}
```
