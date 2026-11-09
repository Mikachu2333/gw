# Application.FeatureInstall

返回或设置一个值（常量），该值指定 ET 如何处理对所需功能尚未安装的方法和属性的调用。可为下表列出的 **[MsoFeatureInstall](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoFeatureInstall)** 常量之一。 **MsoFeatureInstall** 类型，可读写。



## 语法

express.**FeatureInstall**

express   一个代表 **Application** 对象的变量。

## 类型

MsoFeatureInstall

## 说明


| **MsoFeatureInstall** 可以是下列 **MsoFeatureInstall** 常量之一。        |
| -------------------------------------------------------------- |
| **msoFeatureInstallNone** 如果在运行时调用了未安装的功能，则生成普通的自动化错误。该值为默认常量。 |
| **msoFeatureInstallOnDemand** 提示用户安装新功能。                       |
| **msoFeatureInstallOnDemandWithUI** 在安装时显示进度表；但不提示用户安装新功能。     |

可以使用 **msoFeatureInstallOnDemandWithUI** 常量来防止用户误以为在安装某功能时应用程序没有响应。如果希望只有开发者才能安装某些功能，则可使用 **msoFeatureInstallNone** 常量。

如果将 **[DisplayAlerts](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/member/DisplayAlerts)** 属性设置为 **False** ，那么即使将 **FeatureInstall** 属性设置为 **msoFeatureInstallOnDemand** ，系统也不会提示用户安装新功能。如果将 **DisplayAlerts** 属性设置为 **True** ，则当 **FeatureInstall** 属性设置为 **msoFeatureInstallOnDemand** 时，会显示一个安装进度表。



## 示例


```JavaScript
/*本示例激活ET的一个新实例，并检查FeatureInstall属性的值。请确认设置了一个对ET对象库的引用。如果FeatureInstall属性设置为msoFeatureInstallNone，该代码将显示在消息框中，询问用户是否更改属性设置。如果用户响应“确定”，该属性将设置为msoFeatureInstallOnDemand。*/
function test() {
    if (Application.FeatureInstall == msoFeatureInstallNone) {
        let prompt = "Uninstalled features for this application may\r\ncause a run-time error when called.\r\n\r\nWould you like to change this setting\r\nto automatically install missing features?"
        let title = "Feature Install Setting"
        let reply = MsgBox(prompt, jsOKCancel, title)
        if (reply == jsResultOK) {
            Application.FeatureInstall = msoFeatureInstallOnDemand
        }
    }

}
```


```JavaScript
/*本示例显示ET处理对需要尚未安装的功能的方法和属性的调用方式。*/
function test() {
    switch (Application.FeatureInstall) {
        case msoFeatureInstallNone:
            alert("如果调用了未安装的功能，则在运行时生成一般的自动化错误。")
            break
        case msoFeatureInstallOnDemand:
            alert("提示用户安装新功能。")
            break
        case msoFeatureInstallOnDemandWithUI:
            alert("在安装时显示进度表；但不提示用户安装新功能。")
            break
    }
}
```
