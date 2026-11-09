# Application.AutomationSecurity

返回或设置一个 **MsoAutomationSecurity** 常量，该常量代表当用编程方法打开文件时 WPS 所使用的安全设置。



## 语法

express.**AutomationSecurity**

express   一个代表 **Application** 对象的变量。

## 类型

MsoAutomationSecurity

## 说明


 **AutomationSecurity** 属性的默认设置为 **msoAutomationSecurityLow** 。因此，若要避免更改用户的安全设置或中断依赖于默认设置的解决方案，在程序打开文件后，应谨慎地将此属性设置回其初始设置。

将 **ScreenUpdating** 设置为 **False** 不会影响警告提醒和安全警告。 **DisplayAlerts** 设置不会应用于安全警告。例如，如果用户将 **DisplayAlerts** 设置为等于 **False** ，将 **AutomationSecurity** 设置为 **msoAutomationSecurityByUI** ，同时用户处于“中等”安全级别，则在运行宏时会显示安全警告。这使宏可以捕获文件打开错误，而即使文件成功打开，仍然会显示安全警告。



## 示例


```JavaScript
/*本示例更改设置以禁用宏，显示“打开”对话框，然后将 AutomationSecurity 属性设置回其初始设置。*/
function test() {
    let automationSecurity = Application.AutomationSecurity
    Application.AutomationSecurity = msoAutomationSecurityForceDisable
    let fileDialog = Application.FileDialog(msoFileDialogOpen)
    fileDialog.Show()
    fileDialog.Execute()
    Application.AutomationSecurity = automationSecurity
}
```


```JavaScript
/*本示例显示用编程方法打开文件时 WPS 所使用的安全设置。*/
function test() {
    switch (Application.AutomationSecurity) {
        case msoAutomationSecurityByUI:
            alert("使用“安全性”对话框中指定的安全设置。")
            break
        case msoAutomationSecurityForceDisable:
            alert("禁用以编程方式打开的所有文件中的所有宏，而不显示任何安全警告。")
            break
        case msoAutomationSecurityLow:
            alert("启用所有的宏。")
            break
    }
}
```
