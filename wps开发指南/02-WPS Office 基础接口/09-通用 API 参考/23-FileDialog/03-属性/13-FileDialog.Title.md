# FileDialog.Title

设置或获取使用 **FileDialog** 对象显示的文件对话框的标题。可读/写。



## 语法

express.**Title**

express   一个代表 **FileDialog** 对象的变量。

## 类型

string

## 说明


标题不能超过 127 个字符。



## 示例


```JavaScript
/*本示例运行于各组件，显示“打开”对话框的标题。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    alert(fileDialog.Title)
}
```


```JavaScript
/*本示例运行于各组件，设置“另存为”对话框的标题。*/
function test() {
    let fileDialog = Application.FileDialog(msoFileDialogSaveAs)
    fileDialog.Title = "另存为"
}
```
