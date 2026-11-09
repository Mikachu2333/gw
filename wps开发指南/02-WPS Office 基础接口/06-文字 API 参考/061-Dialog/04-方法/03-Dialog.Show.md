# Dialog.Show

显示和执行在指定的 WPS 内置对话框中的初始操作。返回一个 **Number** 类型值，指明关闭对话框时单击的按钮。



## 语法

express.**Show(TimeOut)**

express   一个代表 **Dialog** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| TimeOut | 可选 | any | 自动关闭对话框前 WPS 等待的时间。每一单位大约为 0.001 秒。并发系统活动可能会增加有效时间值。如果省略这一参数，对话框只有在用户关闭它时才关闭。 |

## 返回值

Long

## 说明


下表显示 **Show** 方法所返回的值的含义。

| 返回值     | 说明                             |
| ------- | ------------------------------ |
| \-2     | “关闭”按钮。                        |
| \-1     | “确定”按钮。                        |
| 0（零）    | “取消”按钮。                        |
| \> 0（零） | 命令按钮：1 代表第一个按钮，2 代表第二个按钮，依此类推。 |



## 示例


```JavaScript
/*此示例显示“查找和替换”对话框，并在“查找内容”文本框中预设了“Blue”一词。*/
function test() {
    let dialog = Application.Dialogs.Item(wdDialogEditFind)
    dialog.Find = "Blue"
    dialog.Show()
}
```


```JavaScript
/*本示例将显示并执行在“打开文件”对话框中启动的任意操作。文件名设置为“*.*”可显示所有文件名。*/
function test() {
    let dialog = Application.Dialogs.Item(wdDialogFileOpen)
    dialog.Name = "*.*"
    dialog.Show()
}
```


```JavaScript
/*本示例将显示并执行在"显示比例"对话框中启动的任意操作。如果在大约 9 秒内没有执行任何操作，则对话框将关闭。*/
function test() {
    Application.Dialogs.Item(wdDialogViewZoom).Show(9000)
}
```
