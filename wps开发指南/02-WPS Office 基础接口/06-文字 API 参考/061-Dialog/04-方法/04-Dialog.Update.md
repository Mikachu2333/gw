# Dialog.Update

更新内置 WPS 对话框中显示的值。



## 语法

express.**Update()**

express   一个代表 **Dialog** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例返回引用“字体”对话框的 Dialog 对象，将应用于 Selection 对象的字体更改为 Arial，更新对话框的值，并显示“字体”对话框。*/
function test() {
    let dialog = Application.Dialogs.Item(wdDialogFormatFont)
    Application.Selection.Font.Name = "Arial"
    dialog.Update()
    dialog.Show()
}
```


```JavaScript
/*此示例显示“查找和替换”对话框并更新对话框的值。*/
function test() {
    let dialog = Application.Dialogs.Item(wdDialogEditFind)
    dialog.Update()
    dialog.Show()
}
```
