# Application.DisplayPasteOptions

如果可以显示 **“粘贴选项”** 按钮，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayPasteOptions**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


这是一个 WPS Office 范围的设置。该设置影响所有其他的 WPS Office 应用程序。如果将 **DisplayPasteOptions** 属性设置为 **True** ，则会关闭 ET 中的 **“自动填充选项”** 按钮。 **“自动填充选项”** 按钮只存在于 ET 中，而 **“粘贴选项”** 按钮存在于所有其他的 WPS Office 应用程序中。



## 示例


```JavaScript
/*在本示例中，ET 将显示“粘贴选项”按钮的状态通知用户。*/
function test() {
    // Check if the options button can be displayed.
    if (Application.DisplayPasteOptions) {
        MsgBox("The ability to display the Paste Options button is on.")
    } else {
        MsgBox("The ability to display the Paste Options button is off.")
    }
}
```


```JavaScript
/*本示例演示DisplayPasteOptions的数据类型，当提示框关闭后将DisplayPasteOptions属性设置为false。*/
function test() {
    alert("DisplayPasteOptions 属性的数据类型为：" + typeof Application.DisplayPasteOptions)
    Application.DisplayPasteOptions = false
}
```
