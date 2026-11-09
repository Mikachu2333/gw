# Dialog.Display

显示指定的 WPS 内置对话框，直到用户关闭该对话框或已超过指定时限。返回一个 **Long** 类型值，指明关闭对话框时单击的按钮。



## 语法

express.**Display(TimeOut)**

express   一个代表 **Dialog** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| TimeOut | 可选 | any | 自动关闭对话框前 WPS 等待的时间。每一单位大约为 0.001 秒。并发系统活动可能会增加有效时间值。如果省略这一参数，对话框只有在用户关闭它时才关闭。 |

## 返回值

Long

## 说明


 **Display** 方法返回下列可能值。

| 返回值     | 说明                             |
| ------- | ------------------------------ |
| \-2     | **“关闭”** 按钮。                    |
| \-1     | **“确定”** 按钮。                    |
| 0（零）    | **“取消”** 按钮。                    |
| \> 0（零） | 命令按钮：1 代表第一个按钮，2 代表第二个按钮，依此类推。 |



## 示例


```JavaScript
/*本示例显示“关于”对话框大约 10 秒钟。*/
function test() {
    Application.Dialogs.Item(wdDialogHelpAbout).Display(10000)
}
```


```JavaScript
/*本示例显示“打开文件”对话框。*/
function test() {
    Application.Dialogs.Item(wdDialogFileOpen).Display()
}
```
