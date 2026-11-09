# Application.FileDialog

返回一个 **FileDialog** 对象，该对象表示文件对话框的单个实例。只读。



## 语法

express.**FileDialog(Type)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | MsoFileDialogType | 要返回的对话框的类型。 |

## 返回值

FileDialog

## 说明


 **FileDialog** 可以是下列 **MsoFileDialogType** 常量之一：

||
| ------------------------------------------------------ |
| **msoFileDialogFilePicker**                            |
| **msoFileDialogFolderPicker**                          |
| **msoFileDialogOpen**                                  |
| **msoFileDialogSaveAs**                                |



## 示例


```JavaScript
/*以下示例显示“另存为”对话框。*/
function test() {
    let dlgSaveAs = Application.FileDialog(msoFileDialogSaveAs)
    dlgSaveAs.Show()
}
```


```JavaScript
/*以下示例显示“打开”对话框，并允许用户选择多个文件打开。*/
function test() {
    let dlgOpen = Application.FileDialog(msoFileDialogOpen)
    dlgOpen.AllowMultiSelect = msoTrue
    dlgOpen.Show()
}
```
