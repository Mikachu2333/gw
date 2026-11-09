# Application.MailSystem

返回安装在主机上的邮件系统。 **[XlMailSystem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlMailSystem)** 类型，只读。



## 语法

express.**MailSystem**

express   一个代表 **Application** 对象的变量。

## 类型

XlMailSystem

## 说明


| **XlMailSystem** 可为以下 **XlMailSystem** 常量之一。 |
| -------------------------------------------- |
| **xlMAPI**                                   |
| **xlNoMailSystem**                           |
| **xlPowerTalk**                              |



## 示例


```JavaScript
/*本示例显示安装在此计算机上的邮件系统名称。*/
function test() {
    switch (Application.MailSystem) {
        case xlMAPI:
            alert("Mail system is Microsoft Mail")
            break
        case xlPowerTalk:
            alert("Mail system is PowerTalk")
            break
        case xlMAPI:
            alert("No mail system installed")
            break
    }
}
```


```JavaScript
/*本示例显示安装在此计算机上的邮件系统是否为xlMAPI。*/
function test() {
    alert(Application.MailSystem == xlMAPI)
}
```
