# Dialog.Show

显示内置的对话框，等待用户输入数据，然后返回一个代表用户响应的 **Boolean** 值。如果用户单击“打开”，则返回 **True** ；如果用户单击“取消”，则返回 **False** 。



## 语法

express.**Show(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **Dialog** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 可选 | any | 仅应用于内置对话框，是命令的初始参数。有关详细信息，请参阅“注解”部分。 |

## 返回值

如果用户选择“打开”，则为内置对话框返回 True 的布尔值;如果用户选择“取消”，则返回 False。

## 说明


对于内置对话框，如果用户单击 **“打开”** ，则本方法返回 **True** ；如果用户单击 **“取消”** ，则返回 **False** 。

可以使用单个对话框同时更改许多属性。例如，可以使用“设置单元格格式”对话框更改 [ **Font** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj) 对象的所有属性。

对于一些内置对话框（如 **“打开文件”** 对话框），可以使用 *arg1*, *arg2*, ..., *arg30* 设置初始值。要查找想设置的参数，请在 **内置对话框参数列表** 中查找相应的对话框常量。例如，搜索 **xlDialogOpen** 常量以查找 **“打开文件”** 对话框的参数。有关内置对话框的详细信息，请参阅 [ **Dialogs** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Dialogs/obj) 集合。



## 示例


```JavaScript
/*本示例显示“打开文件”对话框。*/
function test() {
    Application.Dialogs.Item(xlDialogOpen).Show()
}
```


```JavaScript
/*此示例显示“打开文件”对话框，并选定“只读”选项。*/
function test() {
    Application.Dialogs.Item(xlDialogOpen).Show(null, null, true)
}
```
