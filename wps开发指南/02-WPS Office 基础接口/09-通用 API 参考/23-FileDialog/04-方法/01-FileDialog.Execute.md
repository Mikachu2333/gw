# FileDialog.Execute

在调用 **Show** 方法后立即执行用户的操作。



## 语法

express.**Execute()**

express   一个代表 **FileDialog** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例运行于各组件，使用 FileDialog 对象显示“打开”对话框，并设置禁止用户从“打开”对话框中选择多个文件，然后在用户按下“打开”按钮后，打开指定文件。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    fileDialog.AllowMultiSelect = false
    if (fileDialog.Show() == -1) {
        fileDialog.Execute()
    }
}
```


```JavaScript
/*本示例运行于各组件，设置“打开”对话框的默认文件筛选器，然后在用户按下“打开”按钮后，打开指定文件。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    fileDialog.FilterIndex = 7
    if (fileDialog.Show() == -1) {
        fileDialog.Execute()
    }
}
```
