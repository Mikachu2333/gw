# Application.FileDialog

返回一个 **FileDialog** 对象，该对象代表文件对话框的单个实例。



## 语法

express.**FileDialog(FileDialogType)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileDialogType | 必选 | MsoFileDialogType | 对话框类型。 |

## 返回值

FileDialog

## 示例


```JavaScript
/*该示例显示“另存为”对话框。*/
function test() {
    let dlgSaveAs = Application.FileDialog(msoFileDialogSaveAs)
    dlgSaveAs.Show()
}
```


```JavaScript
/*本示例显示“打开”对话框并允许用户选择打开多个文件。*/
function test() {
    let dlgOpen = Application.FileDialog(msoFileDialogOpen)
    dlgOpen.AllowMultiSelect = true
    dlgOpen.Show()
}
```
