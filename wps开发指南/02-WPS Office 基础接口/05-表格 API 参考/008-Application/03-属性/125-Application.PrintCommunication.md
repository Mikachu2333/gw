# Application.PrintCommunication

指定与打印机的通信是否开启。 **Boolean** 读/写。



## 语法

express.**PrintCommunication**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


如果与打印机的通信开启，则为 **True** ；否则为 **False** 。

将 **PrintCommunication** 属性设置为 **False** 将加速执行设置 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/obj)** 属性的代码。

在设置相应属性以提交所有缓存的 **PageSetup** 命令后，应将 **PrintCommunication** 属性设置为 **True** 。



## 示例


```JavaScript
/*本示例在设置 PageSetup 属性时挂起与打印机的通信。*/
function test() {
    Application.PrintCommunication = false
    let pageSetup = ActiveSheet.PageSetup
    pageSetup.PrintTitleRows = ""
    pageSetup.PrintTitleColumns = ""
    Application.PrintCommunication = true
}
```


```JavaScript
/*本示例显示是否开启与打印机的通信。*/
function test() {
    alert(Application.PrintCommunication)
}
```
