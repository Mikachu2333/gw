# FileDialogSelectedItems.Item

获取一个 **String** 类型的值，对应于用户在使用 **FileDialog** 对象的 **[Show](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/FileDialog/member/Show)** 方法显示的文件对话框中所选择的文件之一的路径。



## 语法

express.**Item(Index)**

express   一个代表 **FileDialogSelectedItems** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 索引从 1 开始。 |

## 返回值

string

## 示例


```JavaScript
/*本示例运行于各组件，显示用户使用 FileDialog 对象的 Show 方法展示“打开”对话框中选择的第一个文件的路径。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    fileDialog.AllowMultiSelect = false
    if (fileDialog.Show() == -1) {
        alert(fileDialog.SelectedItems.Item(1))
    }
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
