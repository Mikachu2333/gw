# Application.AutomationSecurity

返回或设置一个 **MsoAutomationSecurity** 常量，该常量表示在用编程方式打开文件时，ET 所使用的安全模式。可读写。



## 语法

express.**AutomationSecurity**

express   一个代表 **Application** 对象的变量。

## 类型

MsoAutomationSecurity

## 说明


当应用程序启动时，该属性自动设置为 **msoAutomationSecurityLow** 。因此，要避免中断依赖于默认设置的解决方案，应该在以编程方式打开文件后，小心地将本属性重置为 **msoAutomationSecurityLow** 。另外，在以编程方式打开文件前后，还应该立即对本属性进行设置，以避免恶意破坏。

将 **[ScreenUpdating](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/ScreenUpdating)** 设置为 **False** 不会影响警告提醒和安全警告。 **[DisplayAlerts](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayAlerts)** 设置不会应用于安全警告。例如，如果用户将 **DisplayAlerts** 设置为等于 **False** ，将 **AutomationSecurity** 设置为 **msoAutomationSecurityByUI** ，同时用户处于“中等”安全级别，则在运行宏时会显示安全警告。这使宏可以捕获文件打开错误，而即使文件成功打开，仍然会显示安全警告。



## 示例


```JavaScript
/*本示例捕获当前的自动安全设置，将设置改为禁用宏，显示“打开”对话框；在打开选定的文档后，将自动安全设回原始设置。*/
function test() {
    let secAutomation = Application.AutomationSecurity
    Application.AutomationSecurity = msoAutomationSecurityForceDisable
    Application.FileDialog(msoFileDialogOpen).Show()
    Application.AutomationSecurity = secAutomation
}
```


```JavaScript
/*本示例演示如果AutomationSecurity属性的值不为msoAutomationSecurityByUI，则将AutomationSecurity属性的值设置为msoAutomationSecurityByUI，并通知用户。*/
function test() {
    if (Application.AutomationSecurity != msoAutomationSecurityByUI) {
        Application.AutomationSecurity = msoAutomationSecurityByUI
        alert("已将安全模式设置为：msoAutomationSecurityByUI。")
    }
}
```
