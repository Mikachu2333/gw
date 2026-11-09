# Application.DisplayAlerts

如果宏运行时 ET 显示特定的警告和消息，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayAlerts**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


默认值为 **True** 。将此属性设置为 **False** 可在宏运行时禁止显示提示和警告消息；当出现需要用户应答的消息时，ET 将选择默认应答。

如果将该属性设置为 **False** ，则在代码运行结束后，ET 会将该属性设置为 **True** ，除非运行的是跨进程代码。

如果使用工作簿的 **[SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SaveAs)** 方法覆盖现有文件，则 **“确认另存为”** 对话框具有的默认响应为 **“否”** ；如果将 **DisplayAlerts** 属性设置为 **False** ，则 ET 选择的响应为 **“是”** 。如果选择的响应为 **“是”** ，则将覆盖现有文件。如果使用工作簿的 **[SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SaveAs)** 方法以 ET 5.0/95 文件格式保存包含 Visual Basic for Applications (VBA) 项目的工作簿，则 **“ET”** 对话框具有的默认响应为 **“是”** ；如果将 **DisplayAlerts** 属性设置为 **False** ，则 ET 选择的响应为 **“取消”** ，即不能使用 ET 5.0/95 文件格式保存包含 VBA 项目的工作簿。



## 示例


```JavaScript
/*本示例关闭工作簿 Book1.xls，但不提示用户保存所作更改。不保存对 Book1.xls 所做的更改。*/
function test() {
    Application.DisplayAlerts = false
    Workbooks.Item("BOOK1.XLS").Close()
    Application.DisplayAlerts = true
}
```


```JavaScript
/*本示例禁止显示在启动连接到未运行的应用程序的 DDE 通道时一般会显示的消息。*/
function test() {
    Application.DisplayAlerts = false
    let channelNumber = Application.DDEInitiate("WinWord", "C:\\WINWORD\\FORMLETR.DOC")
    Application.DisplayAlerts = true
    Application.DDEExecute(channelNumber, "[FILEPRINT]")
    Application.DDETerminate(channelNumber)
    Application.DisplayAlerts = true
}
```
