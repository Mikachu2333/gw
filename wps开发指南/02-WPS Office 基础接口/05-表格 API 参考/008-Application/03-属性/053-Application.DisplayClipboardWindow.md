# Application.DisplayClipboardWindow

如果能显示 WPS Office 剪贴板，则返回 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayClipboardWindow**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*在本示例中，ET 确定是否可显示 Office 剪贴板，并通知用户。*/
function test() {
    // Determine if Office Clipboard can be displayed.
    if (Application.DisplayClipboardWindow == true) {
        MsgBox("Office Clipboard can be displayed.")
    } else {
        MsgBox("Office Clipboard cannot be displayed.")
    }
}
```


```JavaScript
/*本示例演示DisplayClipboardWindow的数据类型，当提示框关闭后将DisplayClipboardWindow属性设置为true。*/
function test() {
    alert("DisplayClipboardWindow 属性的数据类型为：" + typeof Application.DisplayClipboardWindow)
    Application.DisplayClipboardWindow = true
}
```
