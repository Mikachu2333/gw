# Workbook.PasswordEncryptionFileProperties

如果 ET 对受密码保护的指定工作簿的文件属性进行加密，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**PasswordEncryptionFileProperties**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


使用 **[SetPasswordEncryptionOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SetPasswordEncryptionOptions)** 方法可指定 ET 是否对受密码保护的指定工作簿的文件属性进行加密。



## 示例


```JavaScript
/*如果受密码保护的工作簿的文件属性没有加密，那么本示例设置密码加密选项。*/
function test() {
    if (!Application.PasswordEncryptionFileProperties) {
        Application.ActiveWorkbook.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "RC4", 56, true)
    }
}
```


```JavaScript
/*本示例演示活动工作簿使用 AES 128 位加密，并通知用户工作簿的文件属性是否进行加密。*/
function test() {
    ActiveWorkbook.SetPasswordEncryptionOptions("Microsoft RSA SChannel Cryptographic Provider", "AES", 128, true)
    alert(ActiveWorkbook.PasswordEncryptionFileProperties)
}
```
