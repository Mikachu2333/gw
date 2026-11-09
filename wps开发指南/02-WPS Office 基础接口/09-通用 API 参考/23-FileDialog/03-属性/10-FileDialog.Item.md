# FileDialog.Item

获取与对象关联的文本。只读。



## 语法

express.**Item**

express   一个代表 **FileDialog** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于各组件，显示“另存为”对话框关联的文本。*/
function test() {
    alert(Application.FileDialog(msoFileDialogSaveAs).Item)
}
```


```JavaScript
/*本示例运行于各组件，显示数组 arr 中所有对话框关联的文本。*/
function test() {
    let arr = [msoFileDialogFilePicker, msoFileDialogFolderPicker, msoFileDialogOpen, msoFileDialogSaveAs]
    for (let i = 0; i < arr.length; i++) {
        alert(Application.FileDialog(arr[i]).Item)
    }
}
```
