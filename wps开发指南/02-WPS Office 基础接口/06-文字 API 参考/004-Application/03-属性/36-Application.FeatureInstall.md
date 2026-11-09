# Application.FeatureInstall

返回或设置 WPS 将如何处理对所需功能尚未安装的方法和属性的调用。 **MsoFeatureInstall** 类型，可读写。



## 语法

express.**FeatureInstall**

express   一个代表 **Application** 对象的变量。

## 类型

MsoFeatureInstall

## 说明


当某个功能正在安装时，可以使用 **msoFeatureInstallOnDemandWithUI** 常量来防止用户认为应用程序没有响应。如果希望只有开发者才能安装新功能，则使用 **msoFeatureInstallNone** 常量。  

如果将 **DisplayAlerts** 属性设为 **wdAlertsNone** ，则即使将 **FeatureInstall** 属性设为 **msoFeatureInstallOnDemand** ，也不会提示用户安装新功能。如果将 **DisplayAlerts** 属性设置为 **wdAlertsAll** ，同时将 **FeatureInstall** 属性设置为 **msoFeatureInstallOnDemand** ，则会显示安装进度指示器。



## 示例


```JavaScript
/*本示例检查 FeatureInstall 属性的值，如果该属性设置为 msoFeatureInstallNone，代码将显示一个消息框，询问用户是否要进行更改的属性设置，如果用户回答“是”，则会将属性设置为 msoFeatureInstallOnDemand。*/
function test() {
    if (Application.FeatureInstall == msoFeatureInstallNone) {
        let response = MsgBox("Uninstalled features for this application may \ncause a run-time error when called.\n\nWould you like to change this setting\nto automatically install missing features?", jsYesNo, "Feature Install Setting")
        if (response == jsResultYes) {
            Application.FeatureInstall = msoFeatureInstallOnDemand
        }
    }
}
```


```JavaScript
/*本示例显示 WPS 处理对所需功能尚未安装的方法和属性的调用的方式。*/
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
