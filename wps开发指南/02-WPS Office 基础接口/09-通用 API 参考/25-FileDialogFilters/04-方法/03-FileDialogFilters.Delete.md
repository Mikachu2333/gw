# FileDialogFilters.Delete

删除文件对话框筛选。



## 语法

express.**Delete(filter)**

express   一个代表 **FileDialogFilters** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| filter | 可选 | any | 要删除的筛选器。 |

## 返回值

void

## 示例


```JavaScript
/*本示例运行于各组件，遍历“文件选取器”对话框中的所有筛选器，判断如果筛选器的扩展名中包含字符串“xls”，则删除该筛选器。*/
function test() {
    let fileDialogFilters = Application.FileDialog(msoFileDialogFilePicker).Filters
    for (let i = fileDialogFilters.Count; i >= 1; i--) {
        let fileDialogFilter = fileDialogFilters.Item(i)
        if (fileDialogFilter.Extensions.indexOf("xls") > -1) {
            fileDialogFilters.Delete(i)
        }
    }
}
```


```JavaScript
/*本示例运行于各组件，删除“文件选取器”对话框的最后一个筛选器，然后展示“文件选取器”对话框。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogFilePicker)
    fileDialog.Filters.Delete(fileDialog.Filters.Count)
    fileDialog.Show()
}
```
