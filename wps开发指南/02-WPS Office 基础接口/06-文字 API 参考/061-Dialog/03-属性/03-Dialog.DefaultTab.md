# Dialog.DefaultTab

显示指定的对话框时，该属性返回或设置活动选项卡。 **WdWordDialogTab** 类型，可读写。



## 语法

express.**DefaultTab**

express   一个代表 **Dialog** 对象的变量。

## 类型

WdWordDialogTab

## 示例


```JavaScript
/*本示例显示所选的“页面设置”对话框中的“页边距”选项卡。*/
function test() {
    let dialog = Application.Dialogs.Item(wdDialogFilePageSetup)
    dialog.DefaultTab = wdDialogFilePageSetupTabMargins
    dialog.Show()
}
```


```JavaScript
/*本示例将“字体”对话框的活动选项卡设置为“字体”选项卡*/
function test() {
    let dialog = Application.Dialogs.Item(wdDialogFormatFont)
    dialog.DefaultTab = wdDialogFormatFontTabFont
}
```
