# Dialog.Execute

应用 WPS 对话框的当前设置。



## 语法

express.**Execute()**

express   一个代表 **Dialog** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例启用“段落”对话框的“换行和分页”选项卡中的“与下段同页”复选框。*/
function test() {
    let dialog = Application.Dialogs.Item(wdDialogFormatParagraph)
    dialog.KeepWithNext = 1
    dialog.Execute()
}
```


```JavaScript
/*本示例将应用“字体”对话框的当前设置。*/
function test() {
    Application.Dialogs.Item(wdDialogFormatFont).Execute()
}
```
